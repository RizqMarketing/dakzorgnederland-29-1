import React from 'react';
import { CheckCircle, Award, ArrowRight, Star, Shield, Clock, Wrench, Phone, Users } from 'lucide-react';

const About = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden py-24 bg-gradient-to-b from-stone-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-stone-200/60 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Over DakZorg Nederland</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Vakmanschap waar u op kunt{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">vertrouwen</span>
          </h2>

          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Al meer dan 7 jaar uw specialist voor alle dakwerkzaamheden.
            Wij combineren traditioneel vakmanschap met moderne technieken.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">

                {/* Left - Image */}
                <div className="relative h-80 lg:h-auto">
                  <img
                    src="/house3-new.jpg"
                    alt="Professioneel dakwerk"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent lg:bg-gradient-to-t lg:from-stone-900/40 lg:to-transparent"></div>

                  {/* Image overlay badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30">
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-white text-sm font-medium">Uitstekend</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">
                    Waarom kiezen voor DakZorg?
                  </h3>

                  <p className="text-stone-600 mb-8 leading-relaxed">
                    Wij geloven in kwaliteit boven kwantiteit. Elk project krijgt onze volledige
                    aandacht, van de eerste inspectie tot de laatste afwerking. Onze klanten
                    waarderen onze eerlijke communicatie en betrouwbare service.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Gratis inspectie en vrijblijvende offerte",
                      "Transparante prijzen, geen verrassingen achteraf",
                      "Garantie op materiaal en werkzaamheden",
                      "KvK geregistreerd en volledig verzekerd"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-stone-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleContactClick}
                      className="group bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Neem Contact Op</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                      href="tel:0657010861"
                      className="flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-6 py-4 rounded-xl transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span>06 57 01 08 61</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


      </div>
    </section>
  );
};

export default About;
