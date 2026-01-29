import React, { useState } from 'react';
import { 
  Home, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  AlertTriangle, Droplets
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const NokVorstenPage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const nokVorstenServices = [
    "Nokvorsten vervangen en repareren",
    "Waterdichte nokvorstafwerking",
    "Mortelresten verwijderen",
    "Nieuwe nokvorsten plaatsen",
    "Droge nokvorst systemen",
    "Geventileerde nokvorsten",
    "Nokvorst onderhoud en inspectie",
    "Stormschade herstel nokvorsten"
  ];

  const nokVorstenTypes = [
    {
      title: "Nokvorst Vervanging",
      description: "Complete vervanging van beschadigde of verouderde nokvorsten",
      icon: Home,
      details: "Professionele vervanging van nokvorsten met hoogwaardige materialen voor langdurige bescherming."
    },
    {
      title: "Droge Nokvorsten",
      description: "Moderne droge nokvorst systemen zonder mortel",
      icon: Sun,
      details: "Ventilerende nokvorsten die uw dak laten ademen en condensatie voorkomen."
    },
    {
      title: "Nokvorst Reparatie",
      description: "Snelle reparatie van losgeraakte of beschadigde nokvorsten",
      icon: Wrench,
      details: "Directe reparatie om lekkages en verdere schade te voorkomen."
    }
  ];

  const features = [
    {
      title: "Waterdichte Garantie",
      description: "100% waterdichte afwerking van alle nokvorsten",
      icon: Droplets
    },
    {
      title: "Vakkundig Herstel",
      description: "Ervaren specialisten in nokvorst renovatie",
      icon: Award
    },
    {
      title: "Preventief Onderhoud",
      description: "Voorkom grote schade door tijdig onderhoud",
      icon: Shield
    }
  ];


  const nokVorstenProcess = [
    {
      step: 1,
      title: "Inspectie",
      description: "Grondige inspectie van alle nokvorsten en de staat van het dak",
      icon: Eye
    },
    {
      step: 2,
      title: "Offerte",
      description: "Duidelijke offerte met alle werkzaamheden en materialen",
      icon: Calculator
    },
    {
      step: 3,
      title: "Uitvoering",
      description: "Professionele uitvoering volgens planning",
      icon: Hammer
    },
    {
      step: 4,
      title: "Oplevering",
      description: "Controle en garantie op uitgevoerd werk",
      icon: CheckCircle
    }
  ];


  const projectTypes = [
    { id: 'nokvorst-vervanging', label: 'Nokvorst Vervanging', icon: Home },
    { id: 'nokvorst-reparatie', label: 'Nokvorst Reparatie', icon: Wrench },
    { id: 'nokvorst-inspectie', label: 'Nokvorst Inspectie', icon: Eye }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Nokvorst</span> Renovatie
            </h1>
            <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialist in nokvorst reparatie en vervanging. Voorkom lekkages en schade met vakkundig nokvorst onderhoud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Contact
              </button>
              <a 
                href="tel:0657010861"
                className="bg-white hover:bg-stone-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel: 06 57 01 08 61
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2 text-red-700">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">Lekkage door losse nokvorsten?</span>
            <span>24/7 Spoedservice beschikbaar!</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Onze <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Nokvorst</span> Diensten
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Complete oplossingen voor al uw nokvorst problemen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nokVorstenTypes.map((type, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-stone-600 mb-4">{type.description}</p>
                <p className="text-stone-700">{type.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Waarom Kiezen voor Onze <span className="text-brand-400">Nokvorst Service</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-stone-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Complete <span className="text-brand-500">Nokvorst</span> Oplossingen
              </h2>
              <div className="space-y-4">
                {nokVorstenServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/EpkiUfm.jpg"
                alt="Nokvorst werkzaamheden"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">7+</div>
                <div className="text-sm">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ons <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Werkproces</span>
            </h2>
            <p className="text-xl text-stone-600">Van inspectie tot oplevering</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {nokVorstenProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
                {index < nokVorstenProcess.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-stone-300" />
                )}
              </div>
            ))}
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

export default NokVorstenPage;