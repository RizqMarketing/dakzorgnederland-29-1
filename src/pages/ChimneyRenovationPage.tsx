import React, { useState } from 'react';
import {
  Home, CheckCircle, Phone, ArrowRight,
  Award, Shield, Clock, Wrench
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactPopup from '../components/ContactPopup';
import Testimonials from '../components/Testimonials';

const ChimneyRenovationPage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const renovationServices = [
    "Schoorsteen voegen en repareren",
    "Schoorsteenvegen",
    "Kachels plaatsen & afbouwen",
    "Rookkanalen vernieuwen",
    "Waterdicht maken van schoorsteen",
    "Scheuren repareren in schoorsteen"
  ];

  const renovationTypes = [
    {
      title: "Complete Schoorsteen Renovatie",
      description: "Van kap tot fundering - complete vernieuwing",
      icon: Wrench,
      details: "Volledige renovatie van uw schoorsteen met moderne materialen voor jarenlang probleemloos gebruik."
    },
    {
      title: "Schouw Renovatie",
      description: "Moderne, veilige en energiezuinige schouw",
      icon: Home,
      details: "Complete renovatie van uw schouw, van woonkamer tot dak. Mooi, veilig en volgens alle normen."
    },
    {
      title: "Rookkanaal Herstel",
      description: "Veilig en efficiënt rookkanaal voor optimale trek",
      icon: Shield,
      details: "Professioneel herstel en renovatie van rookkanalen voor veilige afvoer van rookgassen."
    }
  ];

  const features = [
    {
      title: "Behoud Karakter",
      description: "Wij behouden het authentieke karakter van uw woning",
      icon: Award
    },
    {
      title: "Moderne Technieken",
      description: "Gebruik van de nieuwste materialen en technieken",
      icon: Wrench
    },
    {
      title: "10 Jaar Garantie",
      description: "Uitgebreide garantie op alle renovatiewerkzaamheden",
      icon: Shield
    }
  ];

  const renovationProcess = [
    {
      step: "1",
      title: "Gratis Inspectie",
      description: "Uitgebreide inspectie van uw schoorsteen",
      details: "We beoordelen de staat en maken een renovatieplan op maat."
    },
    {
      step: "2",
      title: "Renovatieplan & Offerte",
      description: "Gedetailleerd plan met vaste prijs",
      details: "U krijgt een helder plan met alle werkzaamheden en kosten."
    },
    {
      step: "3",
      title: "Professionele Uitvoering",
      description: "Vakkundige renovatie door specialisten",
      details: "Ervaren vakmensen renoveren uw schoorsteen met oog voor detail."
    },
    {
      step: "4",
      title: "Oplevering & Garantie",
      description: "Perfecte afwerking met 10 jaar garantie",
      details: "Complete oplevering met garantiecertificaat voor uw zekerheid."
    }
  ];

  const emergencyServices = [
    { service: "Lekkende schoorsteen", description: "Directe hulp bij waterschade", available: "24/7 bereikbaar" },
    { service: "Slechte trek", description: "Snelle beoordeling en advies", available: "Op afspraak" },
    { service: "Scheuren in schoorsteen", description: "Vakkundige reparatie", available: "24/7 bereikbaar" },
    { service: "Vochtproblemen", description: "Altijd bereikbaar voor spoedgevallen", available: "24/7 bereikbaar" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20 pt-32 lg:pt-48">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/house2-new.jpg)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-400/30 mb-8">
              <Award className="w-4 h-4" />
              <span>Specialist in Schoorsteen Renovatie</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Professionele Schoorsteen
              <span className="block text-brand-400 mt-2">Renovatie</span>
            </h1>

            <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Geef uw schoorsteen een tweede leven. Van kleine reparaties tot complete renovatie
              met behoud van het authentieke karakter van uw woning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Gratis Offerte Aanvragen</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-stone-800 hover:bg-stone-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>06 57 01 08 61</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: CheckCircle, text: "Gratis inspectie & offerte" },
                { icon: Clock, text: "24/7 bereikbaar" },
                { icon: Shield, text: "10 jaar garantie" },
                { icon: Award, text: "7+ jaar ervaring" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl px-4 py-3">
                  <item.icon className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>Waarom DakZorg</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Waarom kiezen voor{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">schoorsteen renovatie</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Een gerenoveerde schoorsteen werkt beter, ziet er mooier uit en verhoogt de waarde van uw woning.
            </p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="group bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Neem contact op</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-500/20">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Specialisaties Section */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Wrench className="w-4 h-4" />
              <span>Onze Specialisaties</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Onze{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Renovatie Specialisaties</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Van kleine reparaties tot complete renovatie. Met behoud van het karakter van uw woning.
            </p>
          </div>

          <div className="space-y-12">
            {renovationTypes.map((type, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-brand-500/20">
                      <type.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
                      <p className="text-stone-600 text-lg">{type.description}</p>
                    </div>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{type.details}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
                    <h4 className="font-bold text-slate-900 mb-4">Wat is inbegrepen:</h4>
                    <ul className="space-y-3">
                      {["Gratis inspectie vooraf", "Vaste prijs, geen verrassingen", "Hoogwaardige materialen", "10 jaar garantie"].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-stone-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-400/30 mb-6">
              <Award className="w-4 h-4" />
              <span>Onze Diensten</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compleet{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">Renovatie Aanbod</span>
            </h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto">
              Van kleine reparaties tot complete renovatie. Altijd met garantie en vakkundige uitvoering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {renovationServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-stone-800/50 backdrop-blur-sm rounded-xl px-5 py-4 border border-stone-700/50">
                <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-white/90 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
              <h3 className="text-xl font-bold text-white mb-3">Verhoog de waarde van uw woning</h3>
              <p className="text-stone-300 mb-6 leading-relaxed">
                Een gerenoveerde schoorsteen verhoogt de waarde van uw woning
                en bespaart op energiekosten en onderhoud.
              </p>
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="group bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Vraag een offerte aan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
              <h3 className="text-xl font-bold text-white mb-4">Direct voordeel</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Behoud authentiek karakter", "Waardeverhoging woning", "Energiebesparing", "Veilig & betrouwbaar", "10 jaar garantie"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    <span className="text-stone-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Wrench className="w-4 h-4" />
              <span>Ons Werkproces</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hoe wij uw{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">schoorsteen renoveren</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              In 4 stappen naar een als nieuwe schoorsteen. Professioneel en betrouwbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-6 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Start uw renovatie</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>06 57 01 08 61</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renovationProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-brand-500/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 mb-4">{item.description}</p>
                <p className="text-stone-500 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability & Emergency Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20"></div>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-400/30 mb-6">
              <Clock className="w-4 h-4" />
              <span>24/7 Beschikbaar</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Altijd bereikbaar voor uw{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">schoorsteen</span>
            </h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Problemen met uw schoorsteen? Onze specialisten staan voor u klaar.
              Preventief onderhoud voorkomt kostbare reparaties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {emergencyServices.map((emergency, index) => (
              <div key={index} className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 hover:border-brand-500/30 transition-all duration-300 text-center">
                <div className="text-white font-semibold mb-2">{emergency.service}</div>
                <div className="text-stone-300 text-sm mb-2">{emergency.description}</div>
                <div className="text-brand-400 font-medium text-sm">{emergency.available}</div>
              </div>
            ))}
          </div>

          <div className="relative bg-stone-800 rounded-3xl p-8 md:p-10 overflow-hidden border border-stone-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Direct hulp nodig?
                </h3>
                <p className="text-stone-400 max-w-lg">
                  Onze specialisten staan voor u klaar bij schoorsteenproblemen.
                </p>
              </div>
              <a
                href="tel:0657010861"
                className="group flex items-center gap-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-900 font-bold px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-brand-500/20"
              >
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs font-semibold opacity-80">Bel direct</div>
                  <div className="text-xl">06 57 01 08 61</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer>
        <Contact standalone={false} />
      </Footer>

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service="Schoorsteen Renovatie"
        title="Gratis Renovatie Inspectie"
      />
    </div>
  );
};

export default ChimneyRenovationPage;
