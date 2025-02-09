import React from 'react';
import { Card, CardContent } from './ui/card';

const VideoSection = () => {
  // Reemplaza esta URL con la URL de tu video de Cloudinary
  const videoUrl = "https://res.cloudinary.com/dvtbj4n0q/video/upload/v1738843636/gelbs0tcj4yodmvjhdfm.mp4";

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8 font-dancing">
        Nuestros Videos
      </h2>
      <div className="max-w-md mx-auto"> {/* Cambiado a max-w-md para videos verticales */}
        <Card className="bg-white/90 backdrop-blur shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="aspect-[9/16] rounded-lg overflow-hidden"> {/* Cambiado a aspect-[9/16] para formato vertical */}
              <video 
                controls 
                className="w-full h-full"
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-center mt-4 text-gray-600 italic">
              Nuestros momentos más especiales en video ❤️
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;