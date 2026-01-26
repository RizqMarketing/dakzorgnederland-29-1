import React from 'react';
import { Phone, Award, Clock, Star, Shield, Headphones } from 'lucide-react';

const NicoContact = () => {
  return (
    <section className="py-16 bg-stone-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full roof-pattern"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-400/30">
                <Headphones className="w-5 h-5" />
                <span>Direct Contact Met Ons Team</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Bel direct met
                <span className="block bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">onze specialisten</span>
              </h2>

              <p className="text-lg text-stone-300 leading-relaxed">
                Persoonlijk contact met ervaren vakmensen. Met meer dan 7 jaar ervaring in dakonderhoud
                staat ons team garant voor vakmanschap en betrouwbaarheid.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4">
                <Clock className="w-6 h-6 text-brand-400" />
                <span className="font-semibold">24/7 Bereikbaar</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4">
                <Star className="w-6 h-6 text-brand-400" />
                <span className="font-semibold">7+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4">
                <Shield className="w-6 h-6 text-brand-400" />
                <span className="font-semibold">Volledig Verzekerd</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4">
                <Award className="w-6 h-6 text-brand-400" />
                <span className="font-semibold">Kwaliteitsgarantie</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="glass rounded-3xl p-8 glow-brand">
              <div className="text-center space-y-5">
                <p className="text-stone-300 text-lg">
                  Geen wachttijden, geen tussenpersonen. Direct contact met de vakman.
                </p>

                <a
                  href="tel:0657010861"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-900 font-bold py-5 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-brand-500/30 group"
                >
                  <Phone className="w-7 h-7 mr-4 group-hover:animate-bounce" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">Bel Nu Gratis</div>
                    <div className="text-2xl font-black">06 57 01 08 61</div>
                  </div>
                </a>

                <p className="text-sm text-stone-400">
                  Gratis advies en vrijblijvende offerte
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-[90%]">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://imgur.com/LCf2zCM.png"
                  alt="DakZorg Nederland - Professioneel dakwerk"
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />

                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-brand-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ✓ Vakwerk
                </div>
                <div className="absolute bottom-4 left-4 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ★ 7+ Jaar Ervaring
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 text-stone-400 text-sm">
            <span className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-400 rounded-full animate-pulse"></div>
              <span>Nu Beschikbaar</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-500 rounded-full"></div>
              <span>Vrijblijvende Offerte</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-brand-400 rounded-full"></div>
              <span>Erkend Dakdekkersbedrijf</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicoContact;
