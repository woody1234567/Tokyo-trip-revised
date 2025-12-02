
import React, { useState } from 'react';
import { TRANSPORT_MAPS_DATA } from '../constants';
import { ChevronDown, ChevronUp, ExternalLink, Map, } from 'lucide-react';

const TransportMapsView: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="px-4 pb-24 animate-fadeScale">
      <div className="mb-6 flex items-center gap-3">
        <div className="p-3 bg-indigo-50 text-indigo-japan rounded-2xl">
          <Map size={24} />
        </div>
        <div>
          <h2 className="text-xl font-black text-japan-black">東京交通地圖</h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Transport Maps</p>
        </div>
      </div>

      <div className="grid gap-4">
        {TRANSPORT_MAPS_DATA.map((item) => {
          const isExpanded = expandedId === item.id;
          
          return (
            <div 
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-soft border border-white transition-all duration-300"
            >
              <div 
                onClick={() => toggleExpand(item.id)}
                className="relative cursor-pointer group"
              >
                {/* Cover Image with Gradient Overlay */}
                <div className="h-28 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Title Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                     <div className="flex items-center gap-2 mb-1">
                        <span 
                            className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                            style={{ backgroundColor: item.color, color: item.textColor || '#fff' }}
                        >
                            {item.company}
                        </span>
                     </div>
                     <h3 className="text-white font-bold text-lg leading-none">{item.name}</h3>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 z-20 text-white/80">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`transition-all duration-500 ease-out overflow-hidden bg-gray-50 ${isExpanded ? 'max-h-[800px]' : 'max-h-0'}`}>
                 <div className="p-5">
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
                        {item.description}
                    </p>

                    {/* Map Preview Card */}
                    <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm mb-4">
                        <div className="w-full h-48 overflow-hidden rounded-lg relative bg-gray-100 flex items-center justify-center">
                            <img 
                                src={item.mapUrl} 
                                alt={`${item.name} Route Map`}
                                className="w-full h-full object-contain"
                            />
                            <a 
                                href={item.mapUrl} 
                                target="_blank"
                                rel="noreferrer"
                                className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm hover:bg-black transition"
                            >
                                放大圖片
                            </a>
                        </div>
                    </div>

                    {/* Official Link Button */}
                    {item.officialLink && (
                        <a 
                            href={item.officialLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-indigo-100 text-indigo-japan font-bold text-xs rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
                        >
                            <ExternalLink size={14} />
                            前往官方網站 (高清 PDF)
                        </a>
                    )}
                 </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center px-6">
        <p className="text-[10px] text-gray-400 leading-relaxed">
            * 圖片來源自維基百科或公共領域資源，僅供參考。詳細時刻表與票價請以各鐵路公司官方網站為準。
        </p>
      </div>
    </div>
  );
};

export default TransportMapsView;
