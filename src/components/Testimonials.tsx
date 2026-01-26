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
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            310+ tevreden klanten
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Wat <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Onze Klanten</span> Zeggen
          </h2>
        </div>

        {/* Customer Reviews */}
        <div className="max-w-5xl mx-auto mt-12">

          {/* Two Featured Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"/>
            {/* Review 1 - Lucienne Gringhuis */}
            <div className="relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100/50">
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

              <div className="flex items-center justify-start pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-sm text-green-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Lekkage snel verholpen
                </span>
              </div>
            </div>

            {/* Review 2 - Jennety Vangulik */}
            <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/80">
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

              <div className="flex items-center justify-start pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-sm text-green-600 font-semibold">
                  <Award className="w-4 h-4 mr-1" />
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