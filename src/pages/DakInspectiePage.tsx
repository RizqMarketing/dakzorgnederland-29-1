import React, { useState } from 'react';
import {
  CheckCircle, Phone, ArrowRight,
  Award, Shield, Clock, Eye, Search, FileText, Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactPopup from '../components/ContactPopup';
import Testimonials from '../components/Testimonials';

const DakInspectiePage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const services = [
    "Uitgebreide dakconditie beoordeling",
    "Preventieve controle op schade",
    "Professioneel inspectie rapport",
    "Onderhoudsadvies en planning",
    "Thermografisch onderzoek",
    "Verzekerings inspecties",
    "Koop/verkoop inspectie woningen",
    "Garantie en periodieke controles"
  ];

  const types = [
    {
      title: "Basis Dakinspectie",
      description: "Grondige controle van dakbedekking, afvoer, aansluitingen en algemene dakveiligheid. Direct mondeling advies over de staat van uw dak.",
      icon: Eye
    },
    {
      title: "Uitgebreide Inspectie",
      description: "Inclusief thermografie, vochtmetingen en technische beoordeling met uitgebreid adviesrapport en foto's.",
      icon: Search
    },
    {
      title: "Onderhoudsinspectie",
      description: "Jaarlijkse of periodieke inspectie om problemen vroegtijdig te signaleren en onderhoud te plannen.",
      icon: Calendar
    }
  ];

  const features = [
    {
      title: "Gecertificeerde Inspecteurs",
      description: "Ervaren specialisten met officiële certificering en jarenlange ervaring",
      icon: Award
    },
    {
      title: "Uitgebreid Rapport",
      description: "Gedetailleerd rapport met foto's, bevindingen en concreet advies",
      icon: FileText
    },
    {
      title: "Preventief Advies",
      description: "Voorkom grote kosten door tijdig onderhoud en preventieve maatregelen",
      icon: Shield
    }
  ];

  const process = [
    {
      step: 1,
      title: "Afspraak",
      description: "Planning van de inspectie op een geschikt moment"
    },
    {
      step: 2,
      title: "Visuele Controle",
      description: "Grondige inspectie van alle dakonderdelen"
    },
    {
      step: 3,
      title: "Technische Metingen",
      description: "Gebruik van meetapparatuur indien nodig"
    },
    {
      step: 4,
      title: "Rapport & Advies",
      description: "Uitgebreid rapport met bevindingen en aanbevelingen"
    }
  ];

  const emergencyServices = [
    { service: "Lekkage inspectie", description: "Directe controle bij vermoeden van lekkage", available: "24/7 bereikbaar" },
    { service: "Stormschade controle", description: "Snelle beoordeling na extreme weersomstandigheden", available: "24/7 bereikbaar" },
    { service: "Koop/verkoop keuring", description: "Onafhankelijke dakbeoordeling bij woningtransactie", available: "Op afspraak" },
    { service: "Periodieke controle", description: "Jaarlijkse preventieve dakinspectie", available: "Op afspraak" }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 bg-stone-900">
        <div className="absolute inset-0 bg-[url('/house2-new.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Eye className="w-4 h-4 text-brand-400" />
              <span>Gecertificeerde Dakinspectie</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="text-brand-400">Dakinspectie</span>
            </h1>
            <p className="text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Voorkom grote schade en kosten. Onze gecertificeerde inspecteurs controleren
              uw dak grondig en adviseren over onderhoud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-stone-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan gratis inspectie
              </button>
              <a
                href="tel:0657010861"
                className="bg-stone-800 hover:bg-stone-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center border border-stone-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 57 01 08 61
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["Gratis inspectie", "Uitgebreid rapport", "Gecertificeerd", "Preventief advies"].map((item, i) => (
                <div key={i} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{item}</span>
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
            <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Waarom DakZorg Nederland</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Waarom kiezen voor onze dakinspectie
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Professionele inspectie voor een veilig en onderhouden dak
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              <span>Onze inspectie types</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Inspectie mogelijkheden
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Van basis controle tot uitgebreide technische inspectie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{type.title}</h3>
                <p className="text-stone-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Clock className="w-4 h-4 text-brand-400" />
              <span>Altijd bereikbaar</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Inspectie service
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Voor elke situatie de juiste inspectie
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-white font-semibold text-lg mb-2">{item.service}</h3>
                <p className="text-stone-400 text-sm mb-4">{item.description}</p>
                <span className="inline-flex items-center text-brand-400 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {item.available}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="tel:0657010861"
              className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-stone-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Direct bellen: 06 57 01 08 61
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Eye className="w-4 h-4" />
              <span>Ons inspectie proces</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Van afspraak tot uitgebreid rapport
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Gestructureerd proces voor een grondige dakinspectie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-stone-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <FileText className="w-4 h-4 text-brand-400" />
              <span>Wat wij controleren</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete dakinspectie
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-stone-800/50 backdrop-blur-sm rounded-xl px-5 py-4 border border-stone-700/50">
                <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-white/90 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">100% gratis inspectie</h3>
              </div>
              <p className="text-stone-400">Onze basis dakinspectie is geheel gratis en vrijblijvend. Geen verborgen kosten, geen verplichtingen.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Uitgebreid rapport</h3>
              </div>
              <p className="text-stone-400">Ontvang een gedetailleerd rapport met foto's, bevindingen en concrete aanbevelingen voor onderhoud.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer>
        <Contact standalone={false} />
      </Footer>
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </div>
  );
};

export default DakInspectiePage;
