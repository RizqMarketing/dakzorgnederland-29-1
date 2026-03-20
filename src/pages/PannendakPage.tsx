import React, { useState } from 'react';
import {
  Home, CheckCircle, Phone, ArrowRight,
  Award, Shield, Clock, Wrench, Layers
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactPopup from '../components/ContactPopup';
import Testimonials from '../components/Testimonials';

const PannendakPage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const services = [
    "Dakpannen vervangen",
    "Pannendak renoveren",
    "Pannendak repareren",
    "Gebroken pannen vervangen",
    "Nokvorsten vernieuwen",
    "Pannendak onderhoud"
  ];

  const specialisaties = [
    {
      title: "Dakpannen Vervangen",
      description: "Vervanging van beschadigde of verouderde dakpannen",
      icon: Layers,
      details: "Losse, gebroken of versleten dakpannen vormen een direct risico op lekkage. Wij vervangen snel en vakkundig alle typen dakpannen — van betondakpannen tot keramische pannen — en zorgen voor een waterdicht resultaat met garantie."
    },
    {
      title: "Volledige Dakrenovatie",
      description: "Complete renovatie van uw pannendak",
      icon: Home,
      details: "Is uw dak meer dan 25 jaar oud of zijn er meerdere probleemplekken? Dan is een volledige dakrenovatie vaak voordeliger dan losse reparaties. Wij vernieuwen het complete dakpakket inclusief onderdak, nokvorsten en dakpannen."
    },
    {
      title: "Nokvorsten & Afdichting",
      description: "Nokvorsten, hoekafdichting en voegwerk",
      icon: Shield,
      details: "Aangetaste nokvorsten zijn de meest voorkomende oorzaak van lekkages bij pannendaken. Wij vernieuwen de nokvorsten, herstellen het voegwerk en zorgen voor een perfecte afdichting op alle kwetsbare punten."
    }
  ];

  const features = [
    {
      title: "Waterdichte Garantie",
      description: "Garantie op al onze pannendak werkzaamheden",
      icon: Shield
    },
    {
      title: "7+ Jaar Ervaring",
      description: "Specialist in hellende daken en pannendaken",
      icon: Award
    },
    {
      title: "Snelle Service",
      description: "Bij lekkage snel ter plaatse voor inspectie",
      icon: Clock
    }
  ];

  const process = [
    {
      step: "1",
      title: "Inspectie & Advies",
      description: "Grondige inspectie van uw pannendak",
      details: "We beoordelen de staat van uw dakpannen, nokvorsten en onderdak, en adviseren de meest kosteneffectieve aanpak."
    },
    {
      step: "2",
      title: "Offerte & Planning",
      description: "Transparante offerte zonder verrassingen",
      details: "Heldere prijsopgave met alle kosten inclusief en een realistische planning zonder onnodige vertraging."
    },
    {
      step: "3",
      title: "Materialen & Voorbereiding",
      description: "Kwalitatieve dakpannen voor uw dak",
      details: "Wij werken uitsluitend met A-kwaliteit dakpannen die passen bij de stijl en kleur van uw woning."
    },
    {
      step: "4",
      title: "Vakkundige Uitvoering",
      description: "Professionele plaatsing met garantie",
      details: "Vakkundige uitvoering door ervaren dakdekkers met garantie op het werk en volledige opruiming achteraf."
    }
  ];

  const emergencyServices = [
    { service: "Acute daklekkage", description: "Directe hulp bij waterschade via het dak", available: "24/7 bereikbaar" },
    { service: "Stormschade pannen", description: "Snelle beoordeling en reparatie", available: "24/7 bereikbaar" },
    { service: "Gebroken dakpannen", description: "Tijdelijke afdekking & vervanging", available: "24/7 bereikbaar" },
    { service: "Nokvorst losgeraakt", description: "Preventieve noodreparatie", available: "Op afspraak" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20 pt-32 lg:pt-48">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url(/pannendak-hero.jpg)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-400/30 mb-8">
              <Award className="w-4 h-4" />
              <span>Specialist in Pannendaken</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Pannendak Renoveren
              <span className="block text-brand-400 mt-2">& Repareren</span>
            </h1>

            <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Van losse dakpannen tot complete dakrenovatie. DakZorg Nederland zorgt voor een
              waterdicht pannendak met gratis inspectie en garantie op al het werk.
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
                { icon: Shield, text: "Volledig verzekerd" },
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
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">ons pannendakwerk</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Een goed onderhouden pannendak beschermt uw woning tientallen jaren.
              Wij zorgen voor vakkundige reparaties en renovaties met garantie.
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
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Pannendak Specialisaties</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Complete pannendak werkzaamheden van A tot Z.
              Van losse pannen tot volledige dakrenovatie, inclusief garantie.
            </p>
          </div>

          <div className="space-y-12">
            {specialisaties.map((type, index) => (
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
                      {[
                        "Grondige dakinspectie",
                        "Kwalitatieve dakpannen",
                        "Vakkundige uitvoering",
                        "Garantie op het werk"
                      ].map((item, i) => (
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
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">Pannendak Aanbod</span>
            </h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto">
              Van kleine reparaties tot complete renovatie. Altijd met garantie en vakkundige uitvoering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
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
                Een gerenoveerd pannendak verbetert niet alleen de uitstraling van uw woning,
                maar verhoogt ook de verkoopwaarde. Wij zorgen voor een resultaat om trots op te zijn.
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
                {["Waterdichte garantie", "Langere levensduur dak", "Garantie op het werk", "Transparante prijzen", "Hogere woningwaarde"].map((item, index) => (
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
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">pannendak aanpakken</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              In 4 stappen naar een waterdicht pannendak. Vakkundig en zonder zorgen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-6 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Start uw project</span>
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
            {process.map((item, index) => (
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
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">pannendak</span>
            </h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Lekkage of stormschade aan uw pannendak? Onze specialisten staan dag en nacht voor u klaar.
              Snel ingrijpen voorkomt kostbare schade aan uw woning.
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
                  Onze dakdekkers staan voor u klaar bij spoedeisende situaties aan uw pannendak.
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
        service="Pannendak Renovatie & Reparatie"
        title="Gratis Offerte & Dakinspectie Aanvragen"
      />
    </div>
  );
};

export default PannendakPage;
