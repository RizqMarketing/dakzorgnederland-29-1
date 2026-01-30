import React from 'react';
import { MapPin, CheckCircle, Phone, Award, Shield, Star, Clock, Wrench } from 'lucide-react';

const Coverage = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <MapPin className="w-4 h-4 text-brand-400" />
            <span>Ons Werkgebied</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Actief in heel <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Nederland</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Met meer dan 7 jaar ervaring zijn wij uw betrouwbare dakdekker in alle Nederlandse provincies.
          </p>

          {/* Map - mobile only, right below the description */}
          <div className="mt-8 flex justify-center lg:hidden">
            <img
              src="https://imgur.com/s93HFyS.png"
              alt="Nederland kaart met provincies - DakZorg Nederland"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content & Stats - LEFT */}
          <div className="space-y-6 order-1">

            {/* Main content card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Uw Regionale Dakexpert
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed mb-5">
                Als ervaren dakdekkersbedrijf staan wij voor kwaliteit en betrouwbaarheid.
                Van kleine reparaties tot complete nieuwbouw - wij zorgen voor een vakkundige uitvoering.
              </p>

              <a
                href="tel:0657010861"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-5 py-3 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>06 57 01 08 61</span>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-center shadow-lg">
                <div className="text-4xl font-black text-white mb-1">12</div>
                <div className="text-brand-100 font-medium text-sm">Provincies</div>
              </div>

              <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-5 text-center shadow-lg">
                <div className="text-4xl font-black text-white mb-1">24/7</div>
                <div className="text-stone-400 font-medium text-sm">Spoedservice</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-stone-200">
                <Award className="w-6 h-6 text-brand-500" />
                <span className="text-sm font-semibold text-stone-700">Erkend Bedrijf</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-stone-200">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="text-sm font-semibold text-stone-700">Volledig Verzekerd</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-stone-200">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-semibold text-stone-700">5 Sterren Service</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-stone-200">
                <Clock className="w-6 h-6 text-brand-500" />
                <span className="text-sm font-semibold text-stone-700">Snelle Reactie</span>
              </div>
            </div>
          </div>

          {/* Map Image - RIGHT (desktop only) */}
          <div className="relative hidden lg:flex items-center justify-center h-full order-2">
            <img
              src="https://imgur.com/s93HFyS.png"
              alt="Nederland kaart met provincies - DakZorg Nederland"
              className="h-auto"
              style={{ width: '125%', height: 'auto', maxWidth: 'none' }}
            />

          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16">
          <div className="bg-stone-900 rounded-2xl py-6 px-8">
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-white">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span className="font-medium text-sm">Volledig Verzekerd</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span className="font-medium text-sm">KvK Geregistreerd</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span className="font-medium text-sm">Garantie op Werkzaamheden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;