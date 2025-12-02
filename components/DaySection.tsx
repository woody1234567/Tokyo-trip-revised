import React from 'react';
import { DayItinerary } from '../types';
import ActivityItem from './ActivityItem';
import { ChevronDown, ChevronUp, Sun, Cloud, CloudRain } from 'lucide-react';

interface DaySectionProps {
  day: DayItinerary;
  isExpanded: boolean;
  onToggle: () => void;
}

const DaySection: React.FC<DaySectionProps> = ({ day, isExpanded, onToggle }) => {
  
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
        case 'Sunny': return <Sun size={14} className="text-orange-400" />;
        case 'Cloudy': return <Cloud size={14} className="text-gray-400" />;
        case 'Rain': return <CloudRain size={14} className="text-blue-400" />;
        default: return <Sun size={14} className="text-orange-400" />;
    }
  };

  const getWeatherText = (condition: string) => {
     switch (condition) {
        case 'Sunny': return '晴時多雲';
        case 'Cloudy': return '多雲';
        case 'Rain': return '有雨';
        default: return '晴天';
     }
  };

  return (
    <div className="mb-6 px-4">
      <div 
        onClick={onToggle}
        className={`relative z-10 bg-white p-4 rounded-3xl flex items-center justify-between cursor-pointer border border-white shadow-soft transition-all duration-300 ${isExpanded ? 'shadow-none bg-paper border-transparent' : ''}`}
      >
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 flex flex-col items-center justify-center rounded-2xl shadow-inner-soft ${isExpanded ? 'bg-japan-red text-white' : 'bg-paper text-japan-red'}`}>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Day</span>
                <span className="text-xl font-bold leading-none font-mono">{day.id.replace('day', '')}</span>
            </div>
            <div>
                <h2 className="text-lg font-bold text-japan-black">{day.date}</h2>
                <p className="text-xs text-gray-500 font-medium">{day.title}</p>
            </div>
        </div>
        
        <div className="flex flex-col items-end gap-1">
             {day.weatherForecast && (
                <div className="flex items-center gap-1.5 bg-sky-50 px-2 py-1 rounded-full">
                    {getWeatherIcon(day.weatherForecast.condition)}
                    <span className="text-[10px] font-bold text-sky-700">{day.weatherForecast.temp}</span>
                </div>
            )}
            <div className="text-gray-300 mt-1">
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-out overflow-hidden ${isExpanded ? 'opacity-100 mt-2' : 'opacity-0 max-h-0'}`}>
        <div className="pl-2 pr-2 pt-2">
            {day.items.map((item, index) => (
                <ActivityItem 
                    key={item.id} 
                    item={item} 
                    isLast={index === day.items.length - 1} 
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DaySection;