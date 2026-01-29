import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home, CheckCircle, Phone, Mail, ArrowRight,
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, MessageCircle, Calendar, Building2, MapPin, Building, Bird, Bug
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';
import Testimonials from '../components/Testimonials';

const VogelWeringPage = () => {
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stad: '',
    address: '',
    provincie: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const vogelWeringServices = [
    "Vogel wering plaatsen",
    "Ongedierte wering plaatsen",
    "Dakrand bescherming",
    "Mussennet plaatsen",
    "Duivenwering installeren",
    "Preventieve dakbescherming"
  ];

  const vogelWeringTypes = [
    {
      title: "Vogel Wering",
      description: "Bescherm uw dak tegen vogels en nesten",
      icon: Bird,
      details: "Vogels zoals mussen en duiven kunnen ernstige schade veroorzaken aan uw dak. Wij plaatsen professionele vogelwering die uw dak beschermt zonder de dieren te schaden."
    },
    {
      title: "Ongedierte Wering",
      description: "Voorkom schade door ongedierte aan uw dak",
      icon: Bug,
      details: "Ongedierte zoals marters, ratten en muizen kunnen uw dakisolatie en bekabeling beschadigen. Wij zorgen voor effectieve wering en preventie."
    },
    {
      title: "Dakrand Bescherming",
      description: "Complete bescherming van uw dakranden",
      icon: Shield,
      details: "Dakranden zijn kwetsbare plekken waar vogels en ongedierte graag nestelen. Wij beschermen uw dakranden met duurzame materialen."
    }
  ];

  const features = [
    {
      title: "Diervriendelijk",
      description: "Effectieve wering zonder dieren te schaden",
      icon: Bird
    },
    {
      title: "Duurzame Materialen",
      description: "Hoogwaardige wering die jarenlang meegaat",
      icon: Shield
    },
    {
      title: "Snelle Plaatsing",
      description: "Professionele installatie met minimale overlast",
      icon: Clock
    }
  ];

  const vogelWeringProcess = [
    {
      step: "1",
      title: "Inspectie & Advies",
      description: "Grondige inspectie van uw dak",
      details: "We inventariseren de problematiek en adviseren de beste oplossing voor uw situatie."
    },
    {
      step: "2",
      title: "Offerte & Planning",
      description: "Transparante offerte op maat",
      details: "U ontvangt een heldere offerte met alle kosten en een realistische planning."
    },
    {
      step: "3",
      title: "Materialen & Voorbereiding",
      description: "Kwalitatieve wering materialen",
      details: "Wij werken uitsluitend met duurzame, diervriendelijke materialen."
    },
    {
      step: "4",
      title: "Vakkundige Plaatsing",
      description: "Professionele installatie",
      details: "Onze vakmensen plaatsen de wering zorgvuldig en netjes af."
    }
  ];

  const emergencyServices = [
    { service: "Vogelnest verwijderen", response: "Binnen 24 uur", available: "Ma-Za" },
    { service: "Acute ongedierte overlast", response: "Zelfde dag", available: "24/7" },
    { service: "Beschadigde wering", response: "Binnen 48 uur", available: "Ma-Za" },
    { service: "Preventieve inspectie", response: "Op afspraak", available: "Ma-Vr" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const success = await sendEmail({
        ...formData,
        service: 'Vogel & Ongedierte Wering'
      });

      if (success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          stad: '',
          address: '',
          provincie: '',
          timeline: '',
          message: ''
        });
        navigate('/bedankt');
      } else {
        setError('Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of bel ons direct.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Er is een fout opgetreden. Probeer het opnieuw of bel ons direct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      details: ["06 57 01 08 61", "24/7 Bereikbaar"],
      action: "tel:0657010861"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dakzorgnederland.nl", "Reactie vaak binnen 2 uur"],
      action: "mailto:info@dakzorgnederland.nl"
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Villa gagel 9", "5146AC Waalwijk"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Beschikbaarheid",
      details: ["24/7 Bereikbaar", "Voor al uw dakprojecten"],
      action: null
    }
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
            backgroundImage: 'url(https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="bg-gradient-to-r from-white/20 to-brand-400/30 backdrop-blur-sm rounded-full px-6 py-3 border border-brand-400/40 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-400 rounded-full shadow-lg"></div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    Specialist in Vogel- en Ongedierte Wering
                  </span>
                  <div className="w-3 h-3 bg-brand-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professionele <span className="text-brand-400">Vogel & Ongedierte Wering</span>
              <br />
              <span className="text-brand-400">Bescherm Uw Dak!</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto">
              Voorkom schade door vogels en ongedierte aan uw dak met professionele wering.
              <span className="text-brand-400 font-bold"> Diervriendelijk en duurzaam!</span>
              Gratis inspectie & garantie op al ons werk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 text-lg animate-pulse"
              >
                <Calculator className="w-6 h-6" />
                <span>GRATIS OFFERTE AANVRAGEN</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>DIRECT BELLEN</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <CheckCircle className="w-6 h-6 text-brand-400" />
                <p className="text-lg font-semibold text-brand-400">Waarom kiezen voor ons?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Gratis Inspectie</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Diervriendelijk</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Geen Voorrijkosten</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Duurzame Materialen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Waarom <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Vogel & Ongedierte Wering?</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Vogels en ongedierte kunnen ernstige schade veroorzaken aan uw dak en isolatie.
              Wij bieden professionele, diervriendelijke oplossingen!
            </p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Vraag Nu Een Gratis Offerte Aan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Vogel wering op dak"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Vogel Wering</h4>
                <p className="text-sm">Bescherm uw dak</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Ongedierte wering"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Ongedierte Wering</h4>
                <p className="text-sm">Preventieve bescherming</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Dakrand bescherming"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Dakrand Bescherming</h4>
                <p className="text-sm">Complete afsluiting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Onze <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Wering Specialisaties</span>
            </h2>
            <p className="text-xl text-stone-700 font-semibold max-w-3xl mx-auto mb-2">
              ✅ Complete bescherming tegen vogels en ongedierte
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Van vogelwering tot complete dakrand bescherming.
              Altijd diervriendelijk en met duurzame materialen!
            </p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>VRAAG GRATIS OFFERTE AAN</span>
            </button>
          </div>

          <div className="space-y-12">
            {vogelWeringTypes.map((type, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mr-6">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
                      <p className="text-stone-600 text-lg">{type.description}</p>
                    </div>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{type.details}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-4">Wat is inbegrepen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-stone-700">Grondige inspectie</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-stone-700">Diervriendelijke materialen</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-stone-700">Vakkundige plaatsing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-stone-700">Garantie op het werk</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Wrench className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-red-600">Overlast Wacht Niet!</span>
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto mb-4">
              <strong>Elke dag uitstellen vergroot de schade!</strong> Vogels en ongedierte veroorzaken snel problemen.
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Preventieve wering bespaart u duizenden euro's aan schade aan isolatie en dakbedekking!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-red-500 text-white">
              <h3 className="text-xl font-bold">Herkenbare Problemen</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Vogelnesten in dakgoot</div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Gevolg</div>
                  <div className="font-bold text-red-600">Verstopte afvoer & lekkage</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Actie</div>
                  <div className="font-bold text-green-600">Wering plaatsen</div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Marters op zolder</div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Gevolg</div>
                  <div className="font-bold text-red-600">Beschadigde isolatie</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Actie</div>
                  <div className="font-bold text-green-600">Direct afsluiten</div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Duiven op dak</div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Gevolg</div>
                  <div className="font-bold text-red-600">Vervuiling & schade</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Actie</div>
                  <div className="font-bold text-green-600">Duivenwering</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg font-semibold text-stone-700">
              Voorkom verdere schade - neem nu actie!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
              >
                <Calculator className="w-6 h-6" />
                <span>GRATIS INSPECTIE</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>06 57 01 08 61 - BEL NU!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-brand-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-brand-500">Service & Onderhoud</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Wij bieden ook inspectie en onderhoud van bestaande wering.
              Neem contact op voor een afspraak.
            </p>
            <a
              href="tel:0657010861"
              className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Nu: 06 57 01 08 61</span>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-brand-500 text-slate-900">
              <h3 className="text-xl font-bold">Onze Service Mogelijkheden</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {emergencyServices.map((emergency, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <div className="font-medium text-slate-900">{emergency.service}</div>
                  <div className="text-center">
                    <div className="text-sm text-stone-600">Response tijd</div>
                    <div className="font-bold text-brand-500">{emergency.response}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-stone-600">Beschikbaarheid</div>
                    <div className="font-bold text-green-600">{emergency.available}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Hoe Wij <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Uw Dak Beschermen</span>
            </h2>
            <p className="text-xl text-stone-700 font-semibold max-w-3xl mx-auto mb-2">
              In 4 Simpele Stappen Naar Een Beschermd Dak!
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Snel, vakkundig en diervriendelijk - wij regelen alles voor u
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>START VANDAAG NOG!</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <Clock className="w-5 h-5" />
                <span>GRATIS INSPECTIE</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vogelWeringProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Services Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Onze <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Wering Diensten</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vogelWeringServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-stone-100">
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-stone-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="p-6 bg-gradient-to-br from-brand-50 to-brand-50 border-2 border-brand-400 rounded-lg mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">
                    🛡️ Bescherm Uw Investering!
                  </h4>
                  <p className="text-stone-700 mb-4">
                    Een goed beschermd dak voorkomt <strong>dure reparaties aan isolatie en dakbedekking</strong>.
                    Investeer nu in wering en bespaar later!
                  </p>
                  <button
                    onClick={() => setIsContactPopupOpen(true)}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    VRAAG GRATIS OFFERTE AAN →
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-stone-200">
                  <h5 className="font-bold text-slate-900 mb-3 text-lg">✅ Direct Voordeel:</h5>
                  <div className="space-y-2 text-stone-700">
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Geen vogels meer op dak</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Beschermde isolatie</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Diervriendelijke oplossing</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Duurzame materialen</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Garantie op het werk</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Vogel wering op dak"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer>
        {/* Contact Section */}
        <section id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent font-semibold text-lg tracking-wide uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Laten We Uw Dak
              <span className="text-brand-400"> Beschermen</span>
            </h2>
            <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Klaar voor een beschermd dak? Neem contact met ons op
              voor een gratis inspectie en vrijblijvende offerte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-8">Contactgegevens</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-stone-300">
                          {info.action && detailIndex === 0 ? (
                            <a
                              href={info.action}
                              className="hover:text-brand-400 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-stone-800 rounded-xl">
                <h4 className="text-white font-bold mb-4">Bedrijfsgegevens</h4>
                <div className="space-y-2 text-stone-300 text-sm">
                  <p><span className="font-medium">KvK:</span> 96885904</p>
                  <p><span className="font-medium">Vestiging:</span> Waalwijk</p>
                  <p><span className="font-medium">Ervaring:</span> 7+ jaar</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-900/20 border border-brand-900/50 rounded-xl">
                <h4 className="text-brand-400 font-bold mb-2">Snelle Service</h4>
                <p className="text-stone-300 mb-3">Voor acute overlast</p>
                <a
                  href="tel:0657010861"
                  className="text-brand-400 font-semibold hover:text-brand-300 transition-colors"
                >
                  06 57 01 08 61
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Vraag uw gratis offerte aan</h3>

                <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">✓ Gratis inspectie</h4>
                  <h4 className="font-bold text-slate-900 mb-2">✓ Vrijblijvende offerte</h4>
                  <h4 className="font-bold text-slate-900">✓ Diervriendelijk advies</h4>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Naam *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                          placeholder="Uw volledige naam"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                          placeholder="uw.email@example.nl"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Telefoon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                          placeholder="06 57 01 08 61"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Stad *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <input
                          type="text"
                          value={formData.stad}
                          onChange={(e) => handleInputChange('stad', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                          placeholder="Amsterdam"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Straatnaam + Huisnummer *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                          placeholder="Hoofdstraat 123"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Provincie *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <input
                          type="text"
                          value={formData.provincie}
                          onChange={(e) => handleInputChange('provincie', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                          placeholder="Noord-Holland"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Gewenste startdatum *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-stone-900"
                        required
                      >
                        <option value="">Selecteer timing</option>
                        <option value="asap">Zo snel mogelijk</option>
                        <option value="1-3months">1-3 maanden</option>
                        <option value="3-6months">3-6 maanden</option>
                        <option value="6-12months">6-12 maanden</option>
                        <option value="flexible">Flexibel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Bericht *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-stone-400" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-stone-900"
                        placeholder="Beschrijf uw probleem met vogels of ongedierte..."
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        isSubmitting
                          ? 'bg-stone-400 cursor-not-allowed text-white'
                          : 'bg-brand-500 hover:bg-brand-600 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Verzenden...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Verzend Bericht</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-stone-600 text-sm text-center">
                    Door dit formulier te verzenden gaat u akkoord met ons privacybeleid.
                    Wij nemen binnen 24 uur contact met u op voor uw gratis inspectie en offerte.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-400 to-brand-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Last Van Vogels Of Ongedierte?
              </h3>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Neem nu actie voordat de schade groter wordt!<br/>
                Onze vakmensen staan voor u klaar met diervriendelijke oplossingen.
              </p>
              <a
                href="tel:0657010861"
                className="inline-block bg-stone-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Bel Nu: 06 57 01 08 61
              </a>
            </div>
          </div>
        </div>
      </section>
      </Footer>

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service="Vogel & Ongedierte Wering"
        title="Gratis Offerte & Inspectie Aanvragen"
      />
    </div>
  );
};

export default VogelWeringPage;
