import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const TimelineEvent = () => {
  const events = [
    { id: 1, title: "Carnavales", date: "Febrero 2024" },
    { id: 2, title: "San Valentín", date: "14 Febrero 2024" },
    { id: 3, title: "Cumple de Juan", date: "19 de Marzo 2024" },
    { id: 4, title: "Feria", date: "Abril 2024" },
    { id: 5, title: "Viaje a San Lucar", date: "29 de Mayo 2024" },
    { id: 6, title: "Islantilla", date: "Junio 2024" },
    { id: 7, title: "Aguadulce", date: "Julio 2024" },
    { id: 8, title: "Cumple de Ale", date: "31 de Agosto 2024" },
    { id: 9, title: "Vuelta a Sevilla", date: "Septiembre 2024" },
    { id: 10, title: "Evento Piquersa", date: "15 de Noviembre 2024" },
    { id: 11, title: "Navidades", date: "Diciembre 2024" },
    { id: 12, title: "Primer Año Juntos", date: "Febrero 2025" }
  ];

  const Event = ({ event, index, totalEvents }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative"
        style={{ 
          flex: `0 0 ${100 / totalEvents}%`,
          // Add left padding to first item to align with container
          paddingLeft: index === 0 ? '12px' : '0',
          // Add right padding to last item to align with container
          paddingRight: index === totalEvents - 1 ? '12px' : '0'
        }}
      >
        {/* Connecting line before the node */}
        {index > 0 && (
          <div className="absolute left-0 right-1/2 h-0.5 bg-pink-200 top-3 -translate-y-1/2" />
        )}
        
        {/* Connecting line after the node */}
        {index < totalEvents - 1 && (
          <div className="absolute left-1/2 right-0 h-0.5 bg-pink-200 top-3 -translate-y-1/2" />
        )}

        {/* Node and content */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`w-6 h-6 rounded-full mx-auto relative z-10 transition-all duration-200 ${
              isHovered ? 'bg-red-500 scale-150' : 'bg-pink-200'
            }`}
          >
            {isHovered && (
              <div className="absolute -inset-1 bg-red-200 rounded-full -z-10 animate-scale" />
            )}
          </div>

          <div
            className={`absolute w-48 ${
              index % 2 === 0 ? '-top-16' : 'top-10'
            } left-1/2 -translate-x-1/2 text-center transition-all duration-200 ${
              isHovered ? 'transform scale-110' : ''
            }`}
            style={{
              transform: `translate(-50%, ${isHovered ? (index % 2 === 0 ? '-5px' : '5px') : '0'})`,
            }}
          >
            <div className={`transition-colors duration-200 ${isHovered ? 'text-red-500' : 'text-gray-600'}`}>
              <p className="text-base font-medium mb-1">{event.title}</p>
              <p className="text-sm">{event.date}</p>
              {isHovered && (
                <div className={`absolute ${
                  index % 2 === 0 ? 'bottom-full mb-1' : 'top-full mt-1'
                } left-1/2 -translate-x-1/2 animate-scale`}>
                  <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-20 font-dancing">
        TimeLine
      </h2>
      
      <div className="hidden md:block">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative flex justify-between items-center min-h-[200px]">
            {events.map((event, index) => (
              <Event 
                key={event.id} 
                event={event} 
                index={index}
                totalEvents={events.length}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-12">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="flex items-center gap-6"
          >
            <div
              className="w-6 h-6 rounded-full bg-pink-200 flex-shrink-0 hover:bg-red-500 hover:scale-150 transition-all duration-200"
            />
            <div className="flex-grow">
              <p className="font-medium text-gray-700 text-lg">{event.title}</p>
              <p className="text-sm text-gray-500 mt-1">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineEvent;