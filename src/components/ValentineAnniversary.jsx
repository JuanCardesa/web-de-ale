import React, { useState, useEffect } from 'react';  
import { Heart, MessageCircle, Calendar, Quote } from 'lucide-react';  
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';  
import TimelineEvent from './TimelineEvent';  
import MemoriesSection from './MemoriesSection';  
import VideoSection from './VideoSection';  

const FloatingHearts = () => {  
  return (  
    <div className="fixed inset-0 pointer-events-none overflow-hidden">  
      {[...Array(15)].map((_, i) => (  
        <div  
          key={i}  
          className="absolute animate-float"  
          style={{  
            left: `${Math.random() * 100}%`,  
            top: `${Math.random() * 100}%`,  
            animationDelay: `${Math.random() * 5}s`,  
            animationDuration: `${15 + Math.random() * 10}s`  
          }}  
        >  
          <Heart  
            className="text-red-300 opacity-60"  
            style={{  
              width: `${20 + Math.random() * 20}px`,  
              height: `${20 + Math.random() * 20}px`,  
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'  
            }}  
          />  
        </div>  
      ))}  
    </div>  
  );  
};  

const LoveCounter = () => {  
  const [diffDays, setDiffDays] = useState(0);  
  
  useEffect(() => {  
    const calculateDays = () => {  
      const startDate = new Date('2024-02-14');  
      const today = new Date();  
      
      const diffTime = Math.abs(today - startDate);  
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));  
      
      setDiffDays(days);  
    };  

    calculateDays();  
    const timer = setInterval(calculateDays, 86400000); // Actualiza cada día  

    return () => clearInterval(timer);  
  }, []);  

  return (  
    <section className="py-8">  
      <Card className="max-w-md mx-auto bg-white/90 backdrop-blur shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-red-100">  
        <CardContent className="text-center py-6">  
          <Calendar className="mx-auto mb-4 text-red-500" />  
          <h2 className="text-3xl font-bold text-gray-800">  
            {diffDays} días juntos  
          </h2>  
          <p className="text-gray-600 mt-2">  
            Desde el 14 de febrero de 2024  
          </p>  
        </CardContent>  
      </Card>  
    </section>  
  );  
};  

const ValentineAnniversary = () => {  
  const [messages, setMessages] = useState([]);  
  const [newMessage, setNewMessage] = useState('');  
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);  
  const [isVisible, setIsVisible] = useState(false);  

  useEffect(() => {  
    setIsVisible(true);  
  }, []);  

  const romanticQuotes = [  
    "Cada día a tu lado es una nueva aventura llena de amor ❤️",  
    "Un año juntos y apenas comienza nuestra historia ✨",  
    "Eres el mejor regalo que la vida me ha dado 🎁",  
    "Contigo, cada momento es especial 💫",  
    "Un año de sonrisas, amor y momentos inolvidables 💑",  
    "Recuerda que yo te quiero más ratona 🐭❤️",  
    "Eres mi razón para sonreír, incluso en los días más grises gordi ☁️😊",  
    "A tu lado, cada día es un capítulo de nuestra hermosa historia 📖💖",  
    "Juntos, somos el equipo perfecto ✨",  
    "Juntos para siempre, culito❤️"  
];  

  const memories = [  
    {  
      title: "Nuestro Primer Beso 💋",  
      date: "14 de febrero 2024",  
      description: "Donde todo comenzó, en aquella noche especial..."  
    },  
    {  
      title: "Primera Cita 🌹",  
      date: "14 de febrero 2024",  
      description: "Una velada mágica que marcó el inicio de nuestra historia"  
    }  
  ];  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentQuoteIndex((prev) =>   
        prev === romanticQuotes.length - 1 ? 0 : prev + 1  
      );  
    }, 5000);  
    return () => clearInterval(interval);  
  }, []);  

  const handleSubmitMessage = (e) => {  
    e.preventDefault();  
    if (newMessage.trim()) {  
      setMessages([...messages, { text: newMessage, date: new Date() }]);  
      setNewMessage('');  
    }  
  };  

  return (  
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-red-50 to-pink-100 transition-opacity duration-1000 opacity-100">  
      <FloatingHearts />  
      
      {/* Header/Welcome */}  
      <header className="text-center py-16 px-4 relative">  
        <Heart className="mx-auto text-red-500 w-16 h-16 animate-pulse" />  
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mt-4 font-dancing">  
          Feliz Aniversario, Ale ❤️  
        </h1>  
        <p className="mt-4 text-lg text-gray-700 italic">  
          365 días de amor, risas y momentos inolvidables juntos  
        </p>  
      </header>  

      {/* Counter */}  
      <LoveCounter />  

      {/* Quotes */}  
      <section className="py-8 px-4">  
        <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">  
          <CardHeader>  
            <CardTitle className="flex items-center gap-2 font-dancing text-2xl">  
              <Quote className="text-red-500" />  
              Frases de Amor  
            </CardTitle>  
          </CardHeader>  
          <CardContent>  
            <div className="min-h-[100px] flex items-center justify-center p-6">  
              <p className="text-xl text-gray-700 text-center animate-fade-in italic">  
                {romanticQuotes[currentQuoteIndex]}  
              </p>  
            </div>  
          </CardContent>  
        </Card>  
      </section>  

      {/* Memories Section */}  
      <MemoriesSection memories={memories} />  

      {/* Timeline */}  
      <TimelineEvent />  

      {/* Videos */}  
      <VideoSection />  

      {/* Love Messages */}  
      <section className="py-8 px-4 mb-16">  
        <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur shadow-xl">  
          <CardHeader>  
            <CardTitle className="flex items-center gap-2 font-dancing text-2xl">  
              <MessageCircle className="text-red-500" />  
              Notitas de Amor  
            </CardTitle>  
          </CardHeader>  
          <CardContent>  
            <form onSubmit={handleSubmitMessage} className="mb-6">  
              <textarea  
                value={newMessage}  
                onChange={(e) => setNewMessage(e.target.value)}  
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"  
                placeholder="Escribe tu mensaje de amor..."  
                rows="3"  
              />  
              <button  
                type="submit"  
                className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"  
              >  
                Enviar Mensaje ❤️  
              </button>  
            </form>  
            <div className="space-y-4">  
              {messages.map((message, index) => (  
                <div key={index} className="bg-gradient-to-r from-pink-50 to-red-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
                  <p className="text-gray-700">{message.text}</p>  
                  <p className="text-sm text-gray-500 mt-2">  
                    {message.date.toLocaleString()}  
                  </p>  
                </div>  
              ))}  
            </div>  
          </CardContent>  
        </Card>  
      </section>  

      <style jsx global>{`  
        @keyframes float {  
          0% { transform: translateY(0) rotate(0deg); }  
          50% { transform: translateY(-100px) rotate(180deg); }  
          100% { transform: translateY(-200px) rotate(360deg); }  
        }  
        
        .animate-float {  
          animation: float linear infinite;  
        }  
        
        .animate-bounce-slow {  
          animation: bounce 2s infinite;  
        }  
        
        .font-dancing {  
          font-family: 'Dancing Script', cursive;  
        }  

        .animate-fade-in {  
          animation: fadeIn 0.5s ease-in;  
        }  

        @keyframes fadeIn {  
          from { opacity: 0; }  
          to { opacity: 1; }  
        }  
      `}</style>  
    </div>  
  );  
};  

export default ValentineAnniversary;