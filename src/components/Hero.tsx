import React, { useState, useEffect } from 'react';
import { Award, Users, Calendar, ArrowRight, Phone, Mail, Home, Shield } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Professioneel Dakonderhoud",
      subtitle: "Vakmanschap en betrouwbaarheid voor uw dak",
      image: "https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      overlay: "from-stone-900/90 via-stone-900/70 to-stone-900/50"
    },
    {
      title: "Duurzame Dakoplossingen",
      subtitle: "Moderne technieken gecombineerd met traditioneel vakmanschap",
      image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      overlay: "from-stone-900/90 via-stone-900/70 to-stone-900/50"
    },
    {
      title: "Dakreparatie & Renovatie",
      subtitle: "Herstel en vernieuw uw dak met onze expertise en precisie",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      overlay: "from-stone-900/90 via-stone-900/70 to-stone-900/50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Calendar, number: "7+", label: "Jaren Ervaring", description: "Bewezen expertise" },
    { icon: Award, number: "100%", label: "Kwaliteitsgarantie", description: "Op al ons werk" },
    { icon: Users, number: "24/7", label: "Bereikbaar", description: "Altijd voor u klaar" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover md:object-center object-[center_20%]"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`}></div>
          </div>
        ))}
      </div>

      {/* Subtle Roof Pattern Overlay */}
      <div className="absolute inset-0 roof-pattern pointer-events-none"></div>

      {/* Animated Geometric Elements - Roof shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[30px] border-l-transparent border-r-transparent border-b-brand-500/10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[25px] border-l-transparent border-r-transparent border-b-brand-400/15 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[20px] border-l-transparent border-r-transparent border-b-brand-600/10 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white w-full px-4 sm:px-6 lg:px-8 py-20 pt-32 lg:pt-48">
        <div className="max-w-6xl mx-auto">

          {/* New Badge with Icon */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 backdrop-blur-sm border border-brand-400/40 px-5 py-2.5 rounded-full">
              <Home className="w-5 h-5 text-brand-400" />
              <span className="text-brand-300 font-semibold text-sm tracking-wide">Uw Dak, Onze Zorg</span>
              <Shield className="w-5 h-5 text-brand-400" />
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent drop-shadow-lg">
                DakZorg
              </span>
              <span className="block text-white drop-shadow-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">Nederland</span>
            </h1>

            <div className="w-32 h-1.5 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 mx-auto mb-6 rounded-full shadow-lg shadow-brand-500/50"></div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-100 font-medium mb-2">
              Uw specialist in dakonderhoud
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed px-4">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons - New Style with more rounded corners */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 lg:mb-20 px-4">
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-900 font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-500/40 flex items-center justify-center space-x-3 text-base sm:text-lg overflow-hidden"
            >
              <span className="relative z-10">Gratis Offerte</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#about"
              className="group border-2 border-brand-400/60 text-white hover:bg-brand-500 hover:border-brand-500 hover:text-slate-900 font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 text-base sm:text-lg"
            >
              <span>Meer Over Ons</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Contact - Rounded style */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <a
              href="tel:0657010861"
              className="group flex items-center justify-center space-x-3 glass glow-brand text-white px-6 sm:px-8 py-4 rounded-full hover:bg-brand-500/30 transition-all duration-300 text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
              <div className="text-center">
                <div className="font-bold text-lg">06 57 01 08 61</div>
                <div className="text-xs text-brand-300">24/7 Bereikbaar</div>
              </div>
            </a>
            <a
              href="mailto:info@dakzorgnederland.nl"
              className="group flex items-center justify-center space-x-3 glass text-white px-6 sm:px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
              <span className="font-semibold">Direct Contact</span>
            </a>
          </div>

          {/* Stats Cards - New Glassmorphism with Glow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group glass glow-brand rounded-3xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-900" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-400 mb-2">{stat.number}</div>
                <div className="text-white font-bold mb-1 text-base sm:text-lg">{stat.label}</div>
                <div className="text-stone-300 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators - Brand colored */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-stone-300 text-xs sm:text-sm px-4">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-400 rounded-full animate-pulse"></div>
              <span>Volledig Verzekerd</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-500 rounded-full"></div>
              <span>KvK Geregistreerd</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-400 rounded-full"></div>
              <span>Heel Nederland</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-500 rounded-full animate-pulse"></div>
              <span>24/7 Bereikbaar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - New style */}
      <div className="absolute bottom-8 right-4 sm:right-8 flex flex-col space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-8 sm:h-10 rounded-full transition-all duration-500 ease-out ${
              index === currentSlide
                ? 'bg-gradient-to-b from-brand-400 to-brand-600 shadow-lg shadow-brand-500/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Slide Progress Bar - Thicker with glow */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 transition-all duration-[8000ms] ease-linear shadow-lg shadow-brand-500/50"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: 'slideProgress 8s linear infinite'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
