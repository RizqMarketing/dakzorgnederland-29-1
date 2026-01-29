import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home, CheckCircle, Phone, Mail, ArrowRight,
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, MessageCircle, Calendar, Building2, MapPin, Building, Square
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';
import Testimonials from '../components/Testimonials';

const DakkapelPage = () => {
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

  const dakkapelServices = [
    "Dakkapel timmeren of plaatsen",
    "Dakkapel repareren",
    "Dakkapel bekleden",
    "Dakbedekking dakkapel vervangen",
    "Lood vervangen bij dakkapel",
    "Dakramen plaatsen en/of repareren"
  ];

  const dakkapelTypes = [
    {
      title: "Dakkapel Plaatsen",
      description: "Meer ruimte en licht in uw woning",
      icon: Home,
      details: "Wij timmeren en plaatsen dakkapellen die perfect bij uw woning passen. Meer leefruimte en natuurlijk daglicht gegarandeerd."
    },
    {
      title: "Dakkapel Renoveren",
      description: "Uw dakkapel weer als nieuw",
      icon: Hammer,
      details: "Van reparatie en bekleden tot complete dakbedekking vervanging. Wij maken uw dakkapel weer waterdicht en mooi."
    },
    {
      title: "Dakramen",
      description: "Professionele plaatsing en reparatie van dakramen",
      icon: Sun,
      details: "Dakramen zorgen voor extra licht en ventilatie. Wij plaatsen en repareren alle merken dakramen vakkundig."
    }
  ];

  const features = [
    {
      title: "Vakkundig Timmerwerk",
      description: "Ervaren timmerlieden voor uw dakkapel",
      icon: Hammer
    },
    {
      title: "Waterdichte Afwerking",
      description: "Garantie op waterdichtheid en afwerking",
      icon: Shield
    },
    {
      title: "Snelle Plaatsing",
      description: "Efficiënte plaatsing met minimale overlast",
      icon: Clock
    }
  ];

  const dakkapelProcess = [
    {
      step: "1",
      title: "Inmeting & Advies",
      description: "Nauwkeurige inmeting en persoonlijk advies",
      details: "We komen langs voor een grondige inmeting en bespreken uw wensen en mogelijkheden."
    },
    {
      step: "2",
      title: "Ontwerp & Offerte",
      description: "Op maat gemaakt ontwerp met heldere offerte",
      details: "U ontvangt een gedetailleerd ontwerp en transparante offerte zonder verrassingen."
    },
    {
      step: "3",
      title: "Fabricage & Voorbereiding",
      description: "Uw dakkapel wordt op maat gemaakt",
      details: "Wij zorgen voor de fabricage en bereiden de plaatsing zorgvuldig voor."
    },
    {
      step: "4",
      title: "Plaatsing & Afwerking",
      description: "Vakkundige plaatsing en nette afwerking",
      details: "Uw dakkapel wordt geplaatst en netjes afgewerkt, inclusief binnen- en buitenzijde."
    }
  ];

  const emergencyServices = [
    { service: "Lekkage dakkapel", response: "Binnen 2 uur", available: "24/7" },
    { service: "Stormschade dakkapel", response: "Binnen 4 uur", available: "24/7" },
    { service: "Kapot dakraam", response: "Zelfde dag", available: "24/7" },
    { service: "Noodreparatie bekleden", response: "Binnen 1 dag", available: "24/7" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const success = await sendEmail({
        ...formData,
        service: 'Dakkapel & Dakramen'
      });

      if (success) {
        // Reset form
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

        // Redirect to thank you page
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
      details: ["24/7 Bereikbaar", "Voor al uw bouwprojecten"],
      action: null
    }
  ];

  const projectTypes = [
    { id: 'dakkapel-plaatsen', label: 'Dakkapel Plaatsen', icon: Home },
    { id: 'dakkapel-renoveren', label: 'Dakkapel Renoveren', icon: Hammer },
    { id: 'dakramen', label: 'Dakramen', icon: Sun },
    { id: 'anders', label: 'Anders', icon: Wrench }
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
            backgroundImage: 'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="bg-gradient-to-r from-white/20 to-brand-400/30 backdrop-blur-sm rounded-full px-6 py-3 border border-brand-400/40 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-400 rounded-full shadow-lg"></div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    Gecertificeerd Specialist in Dakkapellen & Dakramen
                  </span>
                  <div className="w-3 h-3 bg-brand-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professioneel <span className="text-brand-400">Dakkapel & Dakramen</span>
              <br />
              <span className="text-brand-400">Meer Ruimte, Meer Licht!</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto">
              Van dakkapel plaatsen tot reparatie en dakramen - wij zorgen voor vakkundig werk!
              <span className="text-brand-400 font-bold"> Problemen met uw dakkapel? Wij helpen snel!</span>
              {' '}Gratis inmeting & garantie op al ons werk.
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
                  <span>Gratis Inmeting</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Waterdichte Garantie</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Geen Voorrijkosten</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Vakkundig Timmerwerk</span>
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
              Waarom Een <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Dakkapel Plaatsen?</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Een dakkapel vergroot uw woonruimte en brengt extra daglicht in huis.
              Wij zorgen voor vakkundige plaatsing met waterdichte garantie!
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
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Dakkapel plaatsing"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Dakkapel Plaatsen</h4>
                <p className="text-sm">Meer ruimte en licht</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Dakkapel renovatie"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Dakkapel Renoveren</h4>
                <p className="text-sm">Vakkundige renovatie</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Dakramen plaatsen"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Dakramen</h4>
                <p className="text-sm">Extra licht en ventilatie</p>
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
              Onze <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Dakkapel Specialisaties</span>
            </h2>
            <p className="text-xl text-stone-700 font-semibold max-w-3xl mx-auto mb-2">
              Complete dakkapel diensten van A tot Z
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Van nieuwe dakkapellen tot renovatie en dakramen.
              Inclusief waterdichte garantie en vakkundige afwerking!
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
            {dakkapelTypes.map((type, index) => (
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
                        <span className="text-stone-700">Kwaliteitsvolle materialen</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-stone-700">Vakkundige uitvoering</span>
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
              <span className="text-red-600">Dakkapel Problemen Wachten Niet!</span>
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto mb-4">
              <strong>Elke dag uitstellen kost u geld!</strong> Lekkages veroorzaken snel waterschade.
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Urgente dakkapel problemen? Wij zijn snel ter plaatse! Preventief onderhoud bespaart duizenden euro's.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-red-500 text-white">
              <h3 className="text-xl font-bold">Herkenbare Dakkapel Problemen</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Lekkende dakkapel</div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Gevolg</div>
                  <div className="font-bold text-red-600">Waterschade aan plafonds</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Actie</div>
                  <div className="font-bold text-green-600">Direct Repareren</div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Rottend houtwerk</div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Gevolg</div>
                  <div className="font-bold text-red-600">Structurele schade</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Actie</div>
                  <div className="font-bold text-green-600">Urgent Vervangen</div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Kapot dakraam</div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Gevolg</div>
                  <div className="font-bold text-red-600">Warmteverlies & tocht</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-stone-600">Actie</div>
                  <div className="font-bold text-green-600">Snel Herstellen</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg font-semibold text-stone-700">
              Waarom langer wachten? Elk lek dat u uitstelt wordt duurder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
              >
                <Calculator className="w-6 h-6" />
                <span>BEREKEN UW SCHADE</span>
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

      {/* Emergency Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Wrench className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-red-500">24/7 Spoedservice</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Lekkage of stormschade aan uw dakkapel? Wij zijn 24/7 bereikbaar voor
              spoedgevallen en acute dakkapel problemen.
            </p>
            <a
              href="tel:0657010861"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Nu: 06 57 01 08 61</span>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-red-500 text-white">
              <h3 className="text-xl font-bold">24/7 Spoedservice Response Tijden</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {emergencyServices.map((emergency, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <div className="font-medium text-slate-900">{emergency.service}</div>
                  <div className="text-center">
                    <div className="text-sm text-stone-600">Response tijd</div>
                    <div className="font-bold text-red-500">{emergency.response}</div>
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
              Hoe Wij Uw <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Dakkapel Plaatsen</span>
            </h2>
            <p className="text-xl text-stone-700 font-semibold max-w-3xl mx-auto mb-2">
              In 4 Simpele Stappen Naar Uw Nieuwe Dakkapel!
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Snel, vakkundig en zonder zorgen - wij regelen alles voor u
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
                <span>BINNEN 24 UUR INMETING</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dakkapelProcess.map((item, index) => (
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
                Onze <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Dakkapel Diensten</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dakkapelServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-stone-100">
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-stone-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="p-6 bg-gradient-to-br from-brand-50 to-brand-50 border-2 border-brand-400 rounded-lg mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">
                    Meer Ruimte In Uw Woning!
                  </h4>
                  <p className="text-stone-700 mb-4">
                    Een dakkapel zorgt voor <strong>extra leefruimte en meer daglicht</strong> in uw woning.
                    Verhoog de waarde van uw huis met een prachtige dakkapel!
                  </p>
                  <button
                    onClick={() => setIsContactPopupOpen(true)}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    VRAAG GRATIS INMETING AAN →
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-stone-200">
                  <h5 className="font-bold text-slate-900 mb-3 text-lg">Direct Voordeel:</h5>
                  <div className="space-y-2 text-stone-700">
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Meer woonruimte</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Meer daglicht</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Hogere woningwaarde</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Waterdichte garantie</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Vakkundige afwerking</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Dakkapel werkzaamheden"
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
              Laten We Uw Dakkapel
              <span className="text-brand-400"> Inmeten</span>
            </h2>
            <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Klaar voor meer ruimte en licht? Neem contact met ons op
              voor een gratis inmeting en vrijblijvende offerte.
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

              <div className="mt-8 p-6 bg-red-900/20 border border-red-900/50 rounded-xl">
                <h4 className="text-red-400 font-bold mb-2">24/7 Spoedservice</h4>
                <p className="text-stone-300 mb-3">Voor acute dakkapel problemen</p>
                <a
                  href="tel:0657010861"
                  className="text-red-400 font-semibold hover:text-red-300 transition-colors"
                >
                  06 57 01 08 61
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Vraag uw gratis offerte aan</h3>

                <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">✓ Gratis inmeting</h4>
                  <h4 className="font-bold text-slate-900 mb-2">✓ Vrijblijvende offerte</h4>
                  <h4 className="font-bold text-slate-900">✓ Persoonlijk advies</h4>
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
                        placeholder="Beschrijf uw dakkapel project of probleem..."
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
                    Wij nemen binnen 24 uur contact met u op voor uw gratis inmeting en offerte.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-400 to-brand-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Acute Dakkapel Problemen?
              </h3>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Voor lekkages, stormschade of andere spoedgevallen kunt u ons 24/7 bellen.<br/>
                Onze vakmensen staan voor u klaar. Vraag ook een gratis offerte aan!
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
        service="Dakkapel & Dakramen"
        title="Gratis Offerte & Inmeting Aanvragen"
      />
    </div>
  );
};

export default DakkapelPage;
