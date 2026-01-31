import React, { useState } from "react";
import { ItineraryItem, ActivityType, HighlightCategory } from "../types";
import {
  MapPin,
  Utensils,
  Train,
  Camera,
  Bed,
  ShoppingBag,
  Info,
  Navigation,
  Sparkles,
  BookOpen,
  Map,
  X,
  ZoomIn,
} from "lucide-react";
import { fetchLocationDetails } from "../services/geminiService";

interface ActivityItemProps {
  item: ItineraryItem;
  isLast: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ item, isLast }) => {
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getIcon = (type: ActivityType) => {
    switch (type) {
      case ActivityType.FOOD:
        return <Utensils size={16} className="text-japan-red" />;
      case ActivityType.TRANSPORT:
        return <Train size={16} className="text-indigo-japan" />;
      case ActivityType.SIGHTSEEING:
        return <Camera size={16} className="text-matcha-dark" />;
      case ActivityType.STAY:
        return <Bed size={16} className="text-gray-600" />;
      case ActivityType.SHOPPING:
        return <ShoppingBag size={16} className="text-sakura-dark" />;
      default:
        return <Info size={16} className="text-gray-500" />;
    }
  };

  const getHighlightColor = (cat: HighlightCategory) => {
    switch (cat) {
      case "MUST_EAT":
      case "MUST_ORDER":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "MUST_BUY":
        return "bg-pink-100 text-pink-700 border-pink-200";
      case "RESERVATION":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "TIP":
      default:
        return "bg-blue-50 text-blue-600 border-blue-100";
    }
  };

  const handleNavigation = () => {
    const query = `${item.location || ""} ${item.address || ""}`;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      "_blank",
    );
  };

  const handleAskAI = async () => {
    if (!item.location) return;
    setLoadingAi(true);
    const tip = await fetchLocationDetails(item.location);
    setAiTip(tip);
    setLoadingAi(false);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const mapQuery = encodeURIComponent(
    `${item.location || ""} ${item.address || ""}`,
  );

  // Use local placeholder if image fails or is missing
  const displayImage = imgError
    ? "./assets/pictures/placeholder.jpg"
    : item.imageUrl;

  return (
    <>
      <div className="flex group mb-8 last:mb-0">
        {/* Time Column */}
        <div className="flex flex-col items-center mr-4 w-12 flex-shrink-0 pt-2">
          <span className="text-xs font-bold text-gray-400 font-mono tracking-tighter">
            {item.time}
          </span>
          <div
            className={`w-0.5 h-full my-2 bg-gray-200 rounded-full ${isLast ? "hidden" : "block"}`}
          ></div>
        </div>

        {/* Card */}
        <div className="flex-grow pb-2 relative min-w-0">
          <div className="bg-white rounded-[2rem] p-0 shadow-soft border border-white overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Image Banner */}
            {item.imageUrl && (
              <div
                className="h-40 w-full overflow-hidden relative cursor-zoom-in group/image"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={displayImage}
                  alt={item.title}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-sm">
                  {getIcon(item.type)}
                  <span className="text-[10px] font-bold text-gray-600 tracking-wide uppercase">
                    {item.type}
                  </span>
                </div>

                {/* Zoom Hint Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                  <div className="bg-white/90 p-2 rounded-full shadow-lg transform scale-90 group-hover/image:scale-100 transition-transform">
                    <ZoomIn size={20} className="text-gray-600" />
                  </div>
                </div>
              </div>
            )}

            <div className="p-5">
              {!item.imageUrl && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-full bg-gray-50">
                    {getIcon(item.type)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wide uppercase">
                    {item.type}
                  </span>
                </div>
              )}

              <h3 className="font-bold text-japan-black text-xl mb-1">
                {item.title}
              </h3>

              {item.address && (
                <div className="flex items-start gap-1 mb-4 text-gray-400 text-xs">
                  <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                  <span className="leading-tight line-clamp-1">
                    {item.address}
                  </span>
                </div>
              )}

              {/* Guide Story Section */}
              {item.guideStory && (
                <div className="mb-4 bg-paper/50 p-4 rounded-2xl border border-sand/50">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} className="text-matcha-dark" />
                    <span className="text-xs font-bold text-matcha-dark">
                      旅人攻略
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {item.guideStory}
                  </p>
                </div>
              )}

              {/* Fallback description if no story */}
              {!item.guideStory && item.description && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed font-medium">
                  {item.description}
                </p>
              )}

              {/* Structured Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.highlights.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1 ${getHighlightColor(tag.category)}`}
                    >
                      <span className="opacity-60">#</span>
                      {tag.text}
                    </span>
                  ))}
                </div>
              )}

              {/* Map Preview Section */}
              {showMap && (
                <div className="mb-5 rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50 animate-fadeScale">
                  <iframe
                    width="100%"
                    height="200"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    title="map-preview"
                    src={`https://maps.google.com/maps?q=${mapQuery}&hl=zh-TW&z=15&output=embed`}
                    className="w-full"
                  ></iframe>
                  <div className="p-2 text-center bg-gray-50 text-[10px] text-gray-400">
                    預覽地圖 • Google Maps
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-50">
                <div className="flex gap-2">
                  <button
                    onClick={handleAskAI}
                    className="text-xs flex items-center gap-1.5 text-indigo-japan font-bold hover:bg-indigo-50 px-3 py-2 rounded-xl transition-colors"
                  >
                    <Sparkles size={14} />
                    {loadingAi ? "AI..." : "更多故事"}
                  </button>

                  <button
                    onClick={toggleMap}
                    className={`text-xs flex items-center gap-1.5 font-bold hover:bg-matcha/30 px-3 py-2 rounded-xl transition-colors ${showMap ? "text-matcha-dark bg-matcha/20" : "text-gray-500"}`}
                  >
                    <Map size={14} />
                    {showMap ? "隱藏地圖" : "預覽地圖"}
                  </button>
                </div>

                <button
                  onClick={handleNavigation}
                  className="flex items-center gap-1.5 bg-japan-black text-black px-5 py-2.5 rounded-2xl text-xs font-bold shadow-md hover:bg-gray-300 active:scale-95 transition-all"
                >
                  <Navigation size={14} />
                  導航
                </button>
              </div>

              {aiTip && (
                <div className="mt-4 p-4 bg-white rounded-2xl text-xs text-gray-600 border border-indigo-100 shadow-sm animate-fadeScale relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-indigo-100 transform rotate-45"></div>
                  <div className="flex gap-2">
                    <Sparkles
                      size={16}
                      className="text-indigo-japan flex-shrink-0 mt-0.5"
                    />
                    <p className="leading-relaxed">{aiTip}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeScale"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-md transition-colors shadow-lg z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <X size={24} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center flex-col">
            <img
              src={displayImage}
              alt={item.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="mt-6 text-center px-4 animate-fadeScale">
              <h3 className="text-white font-bold text-xl drop-shadow-md">
                {item.title}
              </h3>
              {item.location && (
                <p className="text-white/70 text-sm mt-1 flex items-center justify-center gap-1">
                  <MapPin size={12} /> {item.location}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityItem;
