import React, { useState } from "react";
import { ITINERARY_DATA } from "./constants";
import DaySection from "./components/DaySection";
import UtilitiesView from "./components/UtilitiesView";
import WeatherOverview from "./components/WeatherOverview";
import { Wallet, TentTree, AlignLeft } from "lucide-react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"itinerary" | "utils">(
    "itinerary",
  );
  const [expandedDay, setExpandedDay] = useState<string>("day1");
  const [utilsViewMode, setUtilsViewMode] = useState<
    "info" | "wallet" | "maps"
  >("info");

  const toggleDay = (id: string) => {
    setExpandedDay(expandedDay === id ? "" : id);
  };

  const switchToUtils = (mode: "info" | "wallet" | "maps") => {
    setUtilsViewMode(mode);
    setActiveTab("utils");
  };

  const NavButtons = ({ vertical = false }: { vertical?: boolean }) => (
    <div
      className={`flex ${vertical ? "flex-col w-full gap-2" : "gap-1 bg-gray-100/50 p-1 rounded-xl"}`}
    >
      <button
        onClick={() => setActiveTab("itinerary")}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === "itinerary" ? "bg-indigo-japan text-black shadow-sm" : "text-gray-400 hover:bg-white hover:text-gray-500"} ${vertical ? "text-sm py-3 px-4" : ""}`}
      >
        行程
      </button>
      <button
        onClick={() => switchToUtils("info")}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === "utils" && utilsViewMode === "info" ? "bg-indigo-japan text-black shadow-sm" : "text-gray-400 hover:bg-white hover:text-gray-500"} ${vertical ? "text-sm py-3 px-4" : ""}`}
      >
        資訊
      </button>
      <button
        onClick={() => switchToUtils("wallet")}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === "utils" && utilsViewMode === "wallet" ? "bg-indigo-japan text-black shadow-sm" : "text-gray-400 hover:bg-white hover:text-gray-500"} ${vertical ? "text-sm py-3 px-4" : ""}`}
      >
        錢包
      </button>
      <button
        onClick={() => switchToUtils("maps")}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === "utils" && utilsViewMode === "maps" ? "bg-indigo-japan text-black shadow-sm" : "text-gray-400 hover:bg-white hover:text-gray-500"} ${vertical ? "text-sm py-3 px-4" : ""}`}
      >
        地圖
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "utils":
        return <UtilitiesView viewMode={utilsViewMode} />;
      case "itinerary":
      default:
        return (
          <div className="pt-6 pb-24 md:pb-12">
            <WeatherOverview />
            <div className="grid grid-cols-1 gap-0">
              {ITINERARY_DATA.map((day) => (
                <DaySection
                  key={day.id}
                  day={day}
                  isExpanded={expandedDay === day.id}
                  onToggle={() => toggleDay(day.id)}
                />
              ))}
            </div>
            <div className="p-10 text-center text-gray-300">
              <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <p className="text-sm font-bold opacity-60">素敵な旅を！</p>
              <p className="text-[10px] mt-1 opacity-40 uppercase tracking-widest">
                Have a nice trip
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] md:flex md:justify-center md:items-start md:p-8">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 sticky top-8 h-[calc(100vh-4rem)] mr-8 space-y-6">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-white">
          <h1 className="text-2xl font-black tracking-tighter text-indigo-japan flex items-center gap-2 mb-1">
            <span>TOKYO</span>
            <span className="text-japan-red text-sm">●</span>
            <span>FUJI</span>
          </h1>
          <p className="text-[10px] text-gray-400 font-bold tracking-[0.25em] uppercase mb-8">
            Travel Companion
          </p>

          <nav className="mb-8">
            <NavButtons vertical />
          </nav>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <div className="space-y-3">
              <button
                onClick={() =>
                  window.open("https://www.google.com/maps", "_blank")
                }
                className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-indigo-japan transition-colors"
              >
                <AlignLeft size={14} /> Google Maps
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-indigo-japan transition-colors">
                <Wallet size={14} /> My Budget
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-indigo-japan transition-colors">
                <TentTree size={14} /> Hotel Info
              </button>
            </div>
          </div>
        </div>

        <div className="bg-indigo-japan/5 rounded-3xl p-6 border border-indigo-japan/10">
          <p className="text-[10px] font-black text-indigo-japan/50 uppercase tracking-[0.2em] mb-2">
            Note
          </p>
          <p className="text-xs text-indigo-japan/70 leading-relaxed font-medium">
            這是您的專屬旅行手冊。點擊左側導航切換不同功能。
          </p>
        </div>
      </aside>

      <div className="w-full max-w-md md:max-w-2xl bg-[#F9F7F2] relative shadow-2xl md:shadow-soft rounded-none md:rounded-[3rem] overflow-hidden font-sans text-japan-black border-x border-gray-100/30 md:border md:border-white">
        {/* Mobile Header (Hidden on Desktop) */}
        <header className="md:hidden bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 py-4 flex items-center justify-between border-b border-gray-100/50 h-[4.5rem]">
          <div>
            <h1 className="text-lg font-black tracking-tighter text-indigo-japan flex items-center gap-1">
              <span>TOKYO</span>
              <span className="text-japan-red text-xs">●</span>
              <span>FUJI</span>
            </h1>
            <p className="text-[8px] text-gray-400 font-bold tracking-[0.25em] uppercase mt-0.5">
              Travel Companion
            </p>
          </div>

          <div className="flex items-center">
            <NavButtons />
          </div>
        </header>

        {/* Desktop Title Bar (Hidden on Mobile) */}
        <header className="hidden md:flex bg-white/40 backdrop-blur-sm px-8 py-6 items-center justify-between border-b border-white/40">
          <div>
            <h2 className="text-sm font-black text-japan-black uppercase tracking-widest">
              {activeTab === "itinerary"
                ? "行程概覽"
                : utilsViewMode === "info"
                  ? "基本資訊"
                  : utilsViewMode === "wallet"
                    ? "旅行預算"
                    : "交通地圖"}
            </h2>
          </div>
          <div className="text-[10px] font-bold text-gray-400 bg-white/50 px-3 py-1 rounded-full border border-white/50">
            3/28 - 4/03 Trip
          </div>
        </header>

        {/* Main Content Area */}
        <main className="no-scrollbar overflow-y-auto h-full scroll-smooth">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
