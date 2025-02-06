import React, { useState, useEffect } from 'react';
import ValentineAnniversary from './ValentineAnniversary';
import { Heart, Sparkles, Stars } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s linear infinite`,
            animationDelay: `${-Math.random() * 10}s`
          }}
        >
          {i % 3 === 0 ? (
            <Heart className="text-white/30" size={30 + Math.random() * 20} />
          ) : i % 3 === 1 ? (
            <Sparkles className="text-white/30" size={25 + Math.random() * 15} />
          ) : (
            <Stars className="text-white/30" size={28 + Math.random() * 18} />
          )}
        </div>
      ))}
    </div>
  );
};

const DynamicBackground = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="absolute inset-0 transition-all duration-200 ease-in-out"
      style={{
        background: `
          radial-gradient(circle at ${position.x}% ${position.y}%, 
            rgba(255, 182, 193, 0.9), 
            rgba(255, 192, 203, 0.7)
          ),
          linear-gradient(
            45deg,
            #ffb6c1,
            #ffc0cb,
            #db7093,
            #ffb6c1
          )
        `,
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 6s ease infinite'
      }}
    />
  );
};

const LockScreen = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hover, setHover] = useState(false);

  const handleUnlock = () => {
    setFadeOut(true);
    setTimeout(() => setUnlocked(true), 1000);
  };

  if (unlocked) {
    return <ValentineAnniversary />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <DynamicBackground />
      <FloatingElements />
      
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        fadeOut ? 'opacity-0 translate-y-10' : 'opacity-100'
      }`}>
        <h1 className="text-6xl font-dancing font-bold text-white mb-12 animate-fade-in drop-shadow-lg">
          Para Mi Amor 💝
        </h1>
        
        <button
          onClick={handleUnlock}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full 
                   font-semibold text-xl text-white shadow-lg 
                   hover:bg-white/30 transform hover:-translate-y-1 
                   transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>Desbloquear</span>
            <Heart 
              className={`transition-transform duration-300 ${
                hover ? 'scale-125' : 'scale-100'
              }`}
              fill={hover ? 'white' : 'none'}
            />
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 
                        opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LockScreen;
