import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, MapPin, Droplets, Wind, RefreshCw } from 'lucide-react';
import { fetchWeather } from '../services/geminiService';

type WeatherCondition = 'Sunny' | 'Cloudy' | 'Rain';

interface DailyForecast {
    date: string;
    day: string;
    icon: WeatherCondition;
    high: number;
    low: number;
}

interface LocationWeather {
    current: {
        temp: number;
        condition: WeatherCondition;
        humidity: string;
        wind: string;
    };
    forecast: DailyForecast[];
}

// Fallback data structure
const DEFAULT_DATA: Record<string, LocationWeather> = {
    'Tokyo': {
        current: { temp: 18, condition: 'Sunny', humidity: '--%', wind: '--' },
        forecast: Array(5).fill({ date: '--/--', day: '--', icon: 'Sunny', high: 0, low: 0 })
    },
    'Fuji': {
        current: { temp: 12, condition: 'Cloudy', humidity: '--%', wind: '--' },
        forecast: Array(5).fill({ date: '--/--', day: '--', icon: 'Cloudy', high: 0, low: 0 })
    }
};

const WeatherOverview: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<'Tokyo' | 'Fuji'>('Tokyo');
  const [weatherData, setWeatherData] = useState<Record<string, LocationWeather>>(DEFAULT_DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadWeather = async () => {
        setLoading(true);
        const locationQuery = activeLocation === 'Tokyo' ? 'Tokyo, Japan' : 'Fujikawaguchiko, Japan';
        const rawText = await fetchWeather(locationQuery);
        
        if (rawText) {
            parseAndSetWeather(activeLocation, rawText);
        }
        setLoading(false);
    };

    loadWeather();
  }, [activeLocation]);

  const parseAndSetWeather = (locKey: string, text: string) => {
      try {
          const lines = text.trim().split('\n');
          const currentLine = lines.find(l => l.startsWith('CURRENT'));
          const forecastLines = lines.filter(l => l.startsWith('FORECAST')).slice(0, 5);

          if (!currentLine || forecastLines.length === 0) return;

          const currentParts = currentLine.split('|');
          const current: LocationWeather['current'] = {
              temp: parseInt(currentParts[1]) || 0,
              condition: (currentParts[2] as WeatherCondition) || 'Sunny',
              humidity: currentParts[3] || '',
              wind: currentParts[4] || ''
          };

          const forecast: DailyForecast[] = forecastLines.map(line => {
              const parts = line.split('|');
              return {
                  date: parts[1],
                  day: parts[2],
                  icon: (parts[3] as WeatherCondition) || 'Sunny',
                  high: parseInt(parts[4]) || 0,
                  low: parseInt(parts[5]) || 0
              };
          });

          setWeatherData(prev => ({
              ...prev,
              [locKey]: { current, forecast }
          }));
      } catch (e) {
          console.error("Failed to parse weather data", e);
      }
  };

  const data = weatherData[activeLocation];

  const getIcon = (condition: WeatherCondition, size: number = 24) => {
    switch (condition) {
        case 'Sunny': return <Sun className="text-orange-400" size={size} />;
        case 'Cloudy': return <Cloud className="text-gray-400" size={size} />;
        case 'Rain': return <CloudRain className="text-blue-400" size={size} />;
        default: return <Sun className="text-orange-400" size={size} />;
    }
  };

  return (
    <div className="px-4 mb-6 animate-fadeScale">
       <div className="bg-white p-5 rounded-3xl shadow-soft border border-white relative overflow-hidden transition-all duration-300">
          
          {/* Location Toggle Tabs */}
          <div className="flex bg-gray-100/80 p-1 rounded-xl absolute top-4 right-4 z-10">
              <button 
                onClick={() => setActiveLocation('Tokyo')}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeLocation === 'Tokyo' ? 'bg-white text-indigo-japan shadow-sm' : 'text-gray-400'}`}
              >
                  東京
              </button>
              <button 
                onClick={() => setActiveLocation('Fuji')}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all duration-300 ${activeLocation === 'Fuji' ? 'bg-white text-indigo-japan shadow-sm' : 'text-gray-400'}`}
              >
                  河口湖
              </button>
          </div>

          <div className={`flex items-center justify-between mb-6 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            <div>
                <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                    <MapPin size={12} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                        {activeLocation === 'Tokyo' ? 'TOKYO' : 'KAWAGUCHIKO'}
                    </span>
                    {loading && <RefreshCw size={10} className="animate-spin ml-1" />}
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-japan-black tracking-tighter">
                        {data.current.temp}°
                    </span>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-1.5">
                            {getIcon(data.current.condition, 20)}
                            <span className="text-sm font-bold text-gray-600">
                                {data.current.condition === 'Sunny' ? '晴朗' : data.current.condition === 'Cloudy' ? '多雲' : '降雨'}
                            </span>
                        </div>
                        <div className="flex gap-2 text-[9px] text-gray-400 font-mono mt-0.5">
                            <span className="flex items-center gap-0.5"><Droplets size={8}/> {data.current.humidity}</span>
                            <span className="flex items-center gap-0.5"><Wind size={8}/> {data.current.wind}</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          {/* 5-Day Forecast Grid */}
          <div className={`grid grid-cols-5 gap-2 border-t border-gray-100 pt-4 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            {data.forecast.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 group">
                    <span className="text-[9px] font-bold text-gray-400">{day.date}</span>
                    <div className="p-2 rounded-xl bg-paper group-hover:bg-indigo-50 transition-colors">
                        {getIcon(day.icon, 16)}
                    </div>
                    <div className="flex flex-col items-center text-[10px] font-mono leading-none gap-0.5">
                        <span className="font-bold text-japan-black">{day.high}°</span>
                        <span className="text-gray-400 text-[8px]">{day.low}°</span>
                    </div>
                    <span className="text-[8px] text-gray-400 scale-90">{day.day}</span>
                </div>
            ))}
          </div>

       </div>
    </div>
  );
};

export default WeatherOverview;