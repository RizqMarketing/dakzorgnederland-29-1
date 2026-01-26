import React from 'react';
import { MessageSquare, Star, Phone, Shield, Clock, Award, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-100/30 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-full p-4 shadow-2xl shadow-brand-500/30">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Wat <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Onze Klanten</span> Zeggen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Al meer dan 7 jaar zorgen wij voor tevreden klanten in Nederland.
            Hieronder vindt u een selectie van onze klantbeoordelingen.
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="max-w-5xl mx-auto">
          {/* Featured Reviews Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-semibold mb-4">
              <Star className="w-5 h-5 mr-2 fill-current" />
              Recentste 5 Sterren Reviews
            </div>
            <p className="text-slate-600 text-lg">
              Onze klanten delen hun ervaringen met Dakzorg Nederland
            </p>
          </div>

          {/* Two Featured Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Review 1 - Lucienne Gringhuis */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100">
              {/* Quote decoration */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                  "Ik had een kleine lekkage omdat de sneeuw aan het smelten was. Er kwamen vandaag 2 aardige mannen
                  en ze hebben het meteen gemaakt voor een correcte prijs. Superblij mee. Aanrader."
                </p>

                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    LG
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-slate-900">Lucienne Gringhuis</h4>
                    <p className="text-slate-500">Recente klant</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-sm text-green-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Lekkage snel verholpen
                </span>
                <span className="text-sm text-slate-500">Wat klanten zeggen</span>
              </div>
            </div>

            {/* Review 2 - Jennety Vangulik */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100">
              {/* Quote decoration */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                  "Lang opzoek geweest naar een betrouwbare dakdekker. Toen hebben ze mij Dakzorg Nederland aanbevolen.
                  Heb een contact moment ingepland, reageerde snel en dachten echt met mij mee! Alles netjes afgewerkt
                  tot in de details. Vakmannen zijn het!"
                </p>

                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    JV
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-slate-900">Jennety Vangulik</h4>
                    <p className="text-slate-500">Tevreden klant</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-sm text-green-600 font-semibold">
                  <Award className="w-4 h-4 mr-1" />
                  Uitstekende service
                </span>
                <span className="text-sm text-slate-500">Klanten ervaring</span>
              </div>
            </div>
          </div>

          {/* Trust statistics */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-600">Gemiddelde beoordeling</div>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Tevreden klanten</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;