import React from 'react';
import { Card, CardContent } from './ui/card';
import aleImage from '../assets/image/ale.jpg';
import juanImage from '../assets/image/juan.jpg';
import togetherImage from '../assets/image/together.jpg';

const MemoriesSection = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-12 font-dancing">
        Nuestro Antes y Después
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Antes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-dancing text-red-500 text-center mb-6">Antes</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="aspect-square bg-pink-100 rounded-lg overflow-hidden">
                    <img 
                      src={aleImage}
                      alt="Ale de pequeña" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center mt-2 text-gray-600 font-medium">Ale</p>
                </div>
                <div className="relative group">
                  <div className="aspect-square bg-pink-100 rounded-lg overflow-hidden">
                    <img 
                      src={juanImage}
                      alt="Juan de pequeño" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center mt-2 text-gray-600 font-medium">Juan</p>
                </div>
              </div>
              <p className="text-gray-600 text-center mt-4 italic">
                "Quién diría que estos dos pequeños estaban destinados a encontrarse..."
              </p>
            </CardContent>
          </Card>

          {/* Ahora */}
          <Card className="bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-dancing text-red-500 text-center mb-6">Ahora</h3>
              <div className="relative group">
                <div className="aspect-[4/3] bg-pink-100 rounded-lg overflow-hidden">
                  <img 
                    src={togetherImage}
                    alt="Ale y Juan juntos" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-center mt-4 text-gray-600 italic">
                  "Y aquí estamos, escribiendo nuestra propia historia de amor ❤️"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline connection decorative element */}
        <div className="flex justify-center mb-8">
          <div className="w-0.5 h-16 bg-gradient-to-b from-red-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;