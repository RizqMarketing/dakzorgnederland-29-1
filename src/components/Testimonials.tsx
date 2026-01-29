import React from 'react';
import { MessageSquare, Star, Award, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-100/40 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-100/40 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-brand-300/30 to-brand-500/30 rounded-full filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-brand-400/30 to-brand-600/30 rounded-full filter blur-xl animate-pulse"
           style={{ animationDelay: '1s' }} ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-brand-100 to-brand-200 text-brand-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-brand-200/50">
            <Star className="w-4 h-4 mr-2 text-brand-600 animate-pulse" />
            310+ tevreden klanten
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Wat <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Onze Klanten</span> Zeggen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full"></div>
        </div>

        {/* Customer Reviews */}
        <div className="max-w-5xl mx-auto mt-12">

          {/* Two Featured Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Review 1 - Lucienne Gringhuis */}
            <div className="relative group bg-white rounded-3xl p-9 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 transform hover:scale-105 overflow-hidden">
              {/* Subtle shine on hover */}
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 w-full h-full pointer-events-none rounded-3xl"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)'
                   }}
              ></div>

              <div className="mb-6 relative z-10">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-8 h-8 text-yellow-400 fill-current hover:scale-110 transition-transform duration-300 animate-pulse"
                          style={{ animationDelay: `${star * 0.1}s` }} />
                  ))}
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-6 italic font-medium">
                  "Ik had een kleine lekkage omdat de sneeuw aan het smelten was. Er kwamen vandaag 2 aardige mannen
                  en ze hebben het meteen gemaakt voor een correcte prijs. Superblij mee. Aanrader."
                </p>

                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold shadow-md hover:scale-105 transition-transform duration-300">
                    LG
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-slate-800">Lucienne Gringhuis</h4>
                    <p className="text-slate-500">Recente klant</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start pt-4 border-t border-slate-100 relative z-10">
                <span className="inline-flex items-center text-sm text-slate-600 font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  <CheckCircle className="w-4 h-4 mr-1 text-brand-500" />
                  Lekkage snel verholpen
                </span>
              </div>
            </div>

            {/* Review 2 - Jennety Vangulik */}
            <div className="relative group bg-white rounded-3xl p-9 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 transform hover:scale-105 overflow-hidden">
              {/* Subtle shine on hover */}
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 w-full h-full pointer-events-none rounded-3xl"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)'
                   }}
              ></div>

              <div className="mb-6 relative z-10">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-8 h-8 text-yellow-400 fill-current hover:scale-110 transition-transform duration-300 animate-pulse"
                          style={{ animationDelay: `${star * 0.1}s` }} />
                  ))}
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-6 italic font-medium">
                  "Lang opzoek geweest naar een betrouwbare dakdekker. Toen hebben ze mij Dakzorg Nederland aanbevolen.
                  Heb een contact moment ingepland, reageerde snel en dachten echt met mij mee! Alles netjes afgewerkt
                  tot in de details. Vakmannen zijn het!"
                </p>

                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold shadow-md hover:scale-105 transition-transform duration-300">
                    JV
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-slate-800">Jennety Vangulik</h4>
                    <p className="text-slate-500">Recente klant</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start pt-4 border-t border-slate-100 relative z-10">
                <span className="inline-flex items-center text-sm text-slate-600 font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  <Award className="w-4 h-4 mr-1 text-brand-500" />
                  Uitstekende service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;