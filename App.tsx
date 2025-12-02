
import React, { useState } from 'react';
import { ITINERARY_DATA } from './constants';
import DaySection from './components/DaySection';
import UtilitiesView from './components/UtilitiesView';
import WeatherOverview from './components/WeatherOverview';
import { Wallet, TentTree, AlignLeft } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'utils'>('itinerary');
  const [expandedDay, setExpandedDay] = useState<string>('day1');
  const [utilsViewMode, setUtilsViewMode] = useState<'info' | 'wallet' | 'maps'>('info');

  const toggleDay = (id: string) => {
    setExpandedDay(expandedDay === id ? '' : id);
  };

  const switchToUtils = (mode: 'info' | 'wallet' | 'maps') => {
    setUtilsViewMode(mode);
    setActiveTab('utils');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'utils':
        return <UtilitiesView viewMode={utilsViewMode} />;
      case 'itinerary':
      default:
        return (
          <div className="pt-6 pb-24">
            <WeatherOverview />
            {ITINERARY_DATA.map((day) => (
              <DaySection 
                key={day.id} 
                day={day} 
                isExpanded={expandedDay === day.id} 
                onToggle={() => toggleDay(day.id)} 
              />
            ))}
            <div className="p-10 text-center text-gray-300">
                <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <p className="text-sm font-bold opacity-60">素敵な旅を！</p>
                <p className="text-[10px] mt-1 opacity-40 uppercase tracking-widest">Have a nice trip</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] pb-6 max-w-md mx-auto relative shadow-2xl overflow-hidden font-sans text-japan-black">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 py-4 flex items-center justify-between border-b border-gray-100/50 h-[4.5rem]">
        <div>
           <h1 className="text-lg font-black tracking-tighter text-indigo-japan flex items-center gap-1">
             <span>TOKYO</span>
             <span className="text-japan-red text-xs">●</span>
             <span>FUJI</span>
           </h1>
           <p className="text-[8px] text-gray-400 font-bold tracking-[0.25em] uppercase mt-0.5">Travel Companion</p>
        </div>
        
        {/* Header Right Action: Integrated Navigation */}
        <div className="flex items-center">
            <div className="flex gap-1 bg-gray-100/50 p-1 rounded-xl">
                <button 
                    onClick={() => setActiveTab('itinerary')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === 'itinerary' ? 'bg-indigo-japan text-white shadow-sm' : 'text-gray-400 hover:bg-white hover:text-gray-500'}`}
                >
                    行程
                </button>
                <button 
                    onClick={() => switchToUtils('info')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === 'utils' && utilsViewMode === 'info' ? 'bg-indigo-japan text-white shadow-sm' : 'text-gray-400 hover:bg-white hover:text-gray-500'}`}
                >
                    資訊
                </button>
                <button 
                    onClick={() => switchToUtils('wallet')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === 'utils' && utilsViewMode === 'wallet' ? 'bg-indigo-japan text-white shadow-sm' : 'text-gray-400 hover:bg-white hover:text-gray-500'}`}
                >
                    錢包
                </button>
                <button 
                    onClick={() => switchToUtils('maps')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeTab === 'utils' && utilsViewMode === 'maps' ? 'bg-indigo-japan text-white shadow-sm' : 'text-gray-400 hover:bg-white hover:text-gray-500'}`}
                >
                    地圖
                </button>
            </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="no-scrollbar overflow-y-auto h-full scroll-smooth">
        {renderContent()}
      </main>

    </div>
  );
};

export default App;
