import React, { useState } from 'react';
import {
  CheckCircle, Phone, ArrowRight,
  Shield, Clock, Eye, Bird, Bug
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactPopup from '../components/ContactPopup';
import Testimonials from '../components/Testimonials';

const VogelWeringPage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const services = [
    "Vogel wering plaatsen",
    "Ongedierte wering plaatsen",
    "Dakrand bescherming",
    "Mussennet plaatsen",
    "Duivenwering installeren",
    "Preventieve dakbescherming",
    "Marterwering installeren",
    "Inspectie en onderhoud wering"
  ];

  const types = [
    {
      title: "Vogel Wering",
      description: "Vogels zoals mussen en duiven kunnen ernstige schade veroorzaken aan uw dak. Wij plaatsen professionele vogelwering die uw dak beschermt zonder de dieren te schaden.",
      icon: Bird
    },
    {
      title: "Ongedierte Wering",
      description: "Ongedierte zoals marters, ratten en muizen kunnen uw dakisolatie en bekabeling beschadigen. Wij zorgen voor effectieve wering en preventie.",
      icon: Bug
    },
    {
      title: "Dakrand Bescherming",
      description: "Dakranden zijn kwetsbare plekken waar vogels en ongedierte graag nestelen. Wij beschermen uw dakranden met duurzame materialen.",
      icon: Shield
    }
  ];

  const features = [
    {
      title: "Diervriendelijk",
      description: "Effectieve wering zonder dieren te schaden, met gecertificeerde methoden",
      icon: Bird
    },
    {
      title: "Duurzame Materialen",
      description: "Hoogwaardige wering die jarenlang meegaat en bestand is tegen weer en wind",
      icon: Shield
    },
    {
      title: "Snelle Plaatsing",
      description: "Professionele installatie met minimale overlast voor u en uw omgeving",
      icon: Clock
    }
  ];

  const process = [
    {
      step: 1,
      title: "Inspectie & Advies",
      description: "Grondige inspectie en advies over de beste oplossing"
    },
    {
      step: 2,
      title: "Offerte & Planning",
      description: "Transparante offerte op maat met realistische planning"
    },
    {
      step: 3,
      title: "Materialen",
      description: "Duurzame, diervriendelijke materialen op maat"
    },
    {
      step: 4,
      title: "Vakkundige Plaatsing",
      description: "Professionele installatie met nette afwerking"
    }
  ];

  const emergencyServices = [
    { service: "Vogelnest verwijderen", description: "Veilige en diervriendelijke verwijdering", available: "Op afspraak" },
    { service: "Acute ongedierte overlast", description: "Directe hulp bij overlast situaties", available: "24/7 bereikbaar" },
    { service: "Beschadigde wering", description: "Snelle reparatie van bestaande wering", available: "Op afspraak" },
    { service: "Preventieve inspectie", description: "Controle en onderhoud van wering", available: "Op afspraak" }
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
              <Bird className="w-4 h-4 text-brand-400" />
              <span>Specialist in Vogel- en Ongedierte Wering</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="text-brand-400">Vogel & Ongedierte</span> Wering
            </h1>
            <p className="text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Voorkom schade door vogels en ongedierte aan uw dak met professionele,
              diervriendelijke wering. Gratis inspectie en garantie op al ons werk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-stone-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis offerte aanvragen
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
              {["Gratis inspectie", "Diervriendelijk", "Geen voorrijkosten", "Duurzame materialen"].map((item, i) => (
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
              <Shield className="w-4 h-4" />
              <span>Waarom DakZorg Nederland</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Waarom kiezen voor onze wering service
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Professionele, diervriendelijke bescherming voor uw dak
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
              <Bird className="w-4 h-4" />
              <span>Onze specialisaties</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Wering specialisaties
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Complete bescherming tegen vogels en ongedierte
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
              <span>Service en onderhoud</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wering service
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Van plaatsing tot onderhoud van uw wering
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
              <span>Ons werkproces</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Hoe wij uw dak beschermen
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Vakkundig en diervriendelijk in 4 stappen
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
              <Bird className="w-4 h-4 text-brand-400" />
              <span>Onze diensten</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete wering oplossingen
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
                <h3 className="text-white font-semibold text-lg">Garantie op het werk</h3>
              </div>
              <p className="text-stone-400">Op al onze weringswerkzaamheden bieden wij uitgebreide garantie. Diervriendelijke bescherming waar u op kunt vertrouwen.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Gratis inspectie</h3>
              </div>
              <p className="text-stone-400">Wij komen geheel vrijblijvend langs om de situatie te beoordelen en u te adviseren over de beste wering.</p>
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

export default VogelWeringPage;
