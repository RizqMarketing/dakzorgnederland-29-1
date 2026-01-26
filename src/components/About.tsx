import React from 'react';
import { CheckCircle, Award, ArrowRight, Star, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    "7+ jaar ervaring in dakonderhoud",
    "Actief in heel Nederland",
    "Specialisatie in alle soorten dakwerk",
    "Persoonlijke aanpak voor elk project",
    "Transparante prijzen zonder verrassingen",
    "KvK geregistreerd bedrijf"
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Over DakZorg Nederland</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Over</span> ons
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Met meer dan 7 jaar ervaring zijn wij uw partner voor alle dakwerkzaamheden.
            Van kleine reparaties tot complete renovaties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 mb-10">
              <p className="text-stone-600 text-lg leading-relaxed">
                DakZorg Nederland staat voor kwaliteit, betrouwbaarheid en vakmanschap.
                Ons team van ervaren dakdekkers werkt met zorg en aandacht aan elk project.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Of het nu gaat om een kleine reparatie of een complete dakrenovatie -
                wij leveren altijd topkwaliteit tegen eerlijke prijzen.
              </p>
            </div>

            {/* Achievements List - New design with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-stone-700 font-medium text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleContactClick}
              className="group bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-brand-500/30 flex items-center space-x-3"
            >
              <span>Neem Contact Op</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Images - New stacked design */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Prachtig modern huis met professioneel dakwerk"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="text-lg font-bold">Modern Dakontwerp</div>
                        <div className="text-sm text-stone-300">Professioneel uitgevoerd</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-brand-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Image - Overlapping */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 lg:w-56 lg:h-56 overflow-hidden rounded-3xl shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/house3-new.jpg"
                  alt="Vakkundig dakonderhoud"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-brand-500 to-brand-600 text-slate-900 px-5 py-3 rounded-2xl text-sm font-bold shadow-lg flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>7+ Jaar Ervaring</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
