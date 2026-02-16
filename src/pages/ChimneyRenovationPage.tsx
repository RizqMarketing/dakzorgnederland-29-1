import React, { useState } from 'react';
import {
  CheckCircle, Phone, ArrowRight,
  Award, Shield, Clock, Wrench,
  ChevronDown, Star, Hammer, Flame
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactPopup from '../components/ContactPopup';
import SEOHead from '../components/SEOHead';

const ChimneyRenovationPage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [popupService, setPopupService] = useState("Schoorsteen Renovatie");
  const [popupTitle, setPopupTitle] = useState("Gratis Inspectie & Offerte Aanvragen");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openPopup = (service: string, title: string) => {
    setPopupService(service);
    setPopupTitle(title);
    setIsContactPopupOpen(true);
  };

  const diensten = [
    {
      title: "Schoorsteen Voegen",
      icon: Hammer,
      description: "Voegen van uw schoorsteen herstellen of volledig opnieuw voegen. Slecht voegwerk is de meest voorkomende oorzaak van lekkage en vochtproblemen. Wij verwijderen het oude voegwerk en brengen nieuw, waterdicht voegwerk aan.",
      includes: ["Oud voegwerk verwijderen", "Nieuw voegwerk aanbrengen", "Waterdicht resultaat", "Behoud authentiek karakter"],
      popupService: "Schoorsteen Voegen"
    },
    {
      title: "Schoorsteen Repareren",
      icon: Wrench,
      description: "Scheuren, lekkage of loskomend metselwerk? Wij repareren uw schoorsteen vakkundig. Van kleine reparaties tot uitgebreid herstel — altijd met duurzame materialen en garantie op het resultaat.",
      includes: ["Scheuren & metselwerk herstellen", "Lekkage verhelpen", "Waterdicht maken", "10 jaar garantie"],
      popupService: "Schoorsteen Repareren"
    },
    {
      title: "Rookkanaal Vernieuwen",
      icon: Flame,
      description: "Rookkanaal renoveren met een nieuwe RVS voering of flexibele liner. Verbetert de trek, verhoogt de veiligheid en is verplicht bij het plaatsen van een nieuwe kachel. Wij verzorgen het complete traject.",
      includes: ["RVS voering plaatsen", "Betere trek realiseren", "Veiligheidscontrole", "Geschikt voor alle kachels"],
      popupService: "Rookkanaal Vernieuwen"
    },
    {
      title: "Kachel Plaatsen & Afbouwen",
      icon: Shield,
      description: "Houtkachel of pelletkachel laten plaatsen? Wij verzorgen de complete installatie: van rookkanaal aansluiting tot afbouwen en veiligheidskeuring. Geniet weer veilig van uw open haard of kachel.",
      includes: ["Kachel installatie", "Rookkanaal aansluiten", "Afbouwen & afwerken", "Veiligheidskeuring"],
      popupService: "Kachel Plaatsen"
    }
  ];

  const werkproces = [
    {
      step: "1",
      title: "Gratis Inspectie & Advies",
      description: "Wij komen vrijblijvend langs om uw schoorsteen grondig te inspecteren. U krijgt eerlijk advies over de noodzakelijke werkzaamheden en de beste aanpak."
    },
    {
      step: "2",
      title: "Renovatieplan & Vaste Prijs",
      description: "Binnen 48 uur ontvangt u een gedetailleerd renovatieplan met vaste prijs. Alle werkzaamheden en materialen inbegrepen — geen verrassingen achteraf."
    },
    {
      step: "3",
      title: "Vakkundige Renovatie",
      description: "Onze vakmensen renoveren uw schoorsteen met oog voor detail. Wij werken met A-kwaliteit materialen en behouden het authentieke karakter van uw woning."
    },
    {
      step: "4",
      title: "Oplevering & Garantie",
      description: "Na afronding voeren wij een uitgebreide kwaliteitscontrole uit. U ontvangt tot 10 jaar garantie op alle werkzaamheden, schriftelijk vastgelegd."
    }
  ];

  const faqItems = [
    {
      question: "Wat kost schoorsteen renovatie?",
      answer: "De kosten voor schoorsteen renovatie zijn afhankelijk van de staat van de schoorsteen, het type werkzaamheden (voegen, metselwerk, rookkanaal) en de omvang. Bij DakZorg Nederland ontvangt u altijd een gratis inspectie en een vaste prijsofferte zonder verrassingen. Neem contact op voor een vrijblijvende prijsopgave."
    },
    {
      question: "Hoe weet ik of mijn schoorsteen gerenoveerd moet worden?",
      answer: "Tekenen dat renovatie nodig is: loskomend of verpoederd voegwerk, scheuren in het metselwerk, vochtplekken binnenshuis, witte uitslag (effloresentie), of een slechte trek van uw kachel. Bij twijfel komen wij gratis langs voor een inspectie en eerlijk advies."
    },
    {
      question: "Hoe lang duurt schoorsteen renovatie?",
      answer: "Eenvoudig voegwerk duurt 1-2 dagen. Een complete renovatie inclusief metselwerk en rookkanaal duurt gemiddeld 3-5 werkdagen. Wij informeren u vooraf over de exacte planning en zorgen voor minimale overlast."
    },
    {
      question: "Kan ik na renovatie weer stoken in mijn schoorsteen?",
      answer: "Ja, na renovatie van het rookkanaal en een veiligheidskeuring kunt u weer veilig stoken. Wij adviseren u over de juiste kachel en rookkanaalvoering. Bij alleen voegwerk of metselwerk herstel kunt u vaak dezelfde dag nog stoken."
    },
    {
      question: "Wat is het verschil tussen voegen en renoveren?",
      answer: "Voegen is het herstellen of vernieuwen van alleen het voegwerk tussen de stenen. Renoveren is een breder begrip dat ook metselwerk herstel, rookkanaal vernieuwing en waterdicht maken kan omvatten. Wij adviseren na inspectie welke aanpak het beste is voor uw situatie."
    },
    {
      question: "Moet mijn rookkanaal ook vernieuwd worden?",
      answer: "Niet altijd. Een rookkanaal moet vernieuwd worden als er scheuren in zitten, als er condensproblemen zijn, of als u een nieuwe kachel laat plaatsen. Wij controleren het rookkanaal tijdens de inspectie en adviseren eerlijk of vernieuwing nodig is."
    },
    {
      question: "Mijn schoorsteen lekt — kan dit gerepareerd worden?",
      answer: "In de meeste gevallen wel. Een lekkende schoorsteen wordt vaak veroorzaakt door slecht voegwerk, kapotte loodslabben of scheuren in het metselwerk. Bel ons op 06 57 01 08 61 — wij zijn 24/7 bereikbaar en komen zo snel mogelijk langs om de lekkage te verhelpen."
    },
    {
      question: "Geeft DakZorg garantie op schoorsteen renovatie?",
      answer: "Ja, wij geven tot 10 jaar garantie op onze renovatiewerkzaamheden. Dit geldt voor voegwerk, metselwerk, rookkanaal en waterdichtheid. U krijgt de garantievoorwaarden altijd schriftelijk bij de offerte."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20 lg:pb-0">
      <SEOHead
        title="Schoorsteen Renoveren | Gratis Inspectie | DakZorg Nederland"
        description="Schoorsteen laten renoveren, voegen of repareren? DakZorg Nederland: specialist in schoorsteen renovatie, rookkanaal vernieuwing en kachel plaatsen. Gratis inspectie & vaste prijs offerte."
        keywords="schoorsteen renoveren, schoorsteen voegen, schoorsteen repareren, rookkanaal vernieuwen, kachel plaatsen, schoorsteen laten renoveren, schoorsteen voegwerk, schoorsteen waterdicht maken, schoorsteen renovatie kosten"
        canonicalUrl="https://dakzorgnederland.nl/schoorsteen-renovatie"
        structuredData={faqStructuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20 pt-32 lg:pt-48">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/house2-new.jpg)' }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-400/30 mb-8">
              <Award className="w-4 h-4" />
              <span>Specialist in Schoorsteen Renovatie</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Schoorsteen Laten
              <span className="block text-brand-400 mt-2">Renoveren?</span>
            </h1>

            <p className="text-lg text-stone-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              Voegen herstellen | Metselwerk repareren | Rookkanaal vernieuwen | 10 jaar garantie
            </p>

            <p className="text-2xl sm:text-3xl font-bold text-brand-400 mb-10">
              Gratis inspectie & vaste prijs offerte
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                onClick={() => openPopup("Schoorsteen Renovatie", "Gratis Offerte Binnen 24 Uur")}
                className="bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Gratis Offerte Binnen 24 Uur</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-stone-800 hover:bg-stone-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Bel Direct: 06 57 01 08 61</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: CheckCircle, text: "310+ tevreden klanten" },
                { icon: CheckCircle, text: "Gratis inspectie" },
                { icon: Shield, text: "Tot 10 jaar garantie" },
                { icon: Clock, text: "Binnen 48 uur reactie" }
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

      {/* Social Proof Bar */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { label: "Google Rating", value: "4.9/5", icon: Star },
              { label: "Ervaring", value: "7+ Jaar", icon: Award },
              { label: "KvK", value: "96885904", icon: Shield },
              { label: "Status", value: "Volledig Verzekerd", icon: CheckCircle }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center">
                <item.icon className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide">{item.label}</div>
                  <div className="text-sm font-bold text-stone-900">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Wrench className="w-4 h-4" />
              <span>Onze Specialisaties</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Onze{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Renovatie Diensten</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Van voegwerk herstellen tot complete schoorsteen renovatie en kachel plaatsen.
              Altijd met vaste prijs en garantie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diensten.map((dienst, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-brand-500/20">
                      <dienst.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{dienst.title}</h3>
                    </div>
                  </div>
                  <p className="text-stone-600 mb-6 leading-relaxed text-sm">{dienst.description}</p>
                  <ul className="space-y-2 mb-6">
                    {dienst.includes.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <button
                    onClick={() => openPopup(dienst.popupService, `Offerte ${dienst.title}`)}
                    className="w-full group bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Gratis Offerte</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom DakZorg + Foto's */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>Waarom DakZorg</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Waarom kiezen voor{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">DakZorg Nederland</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Al meer dan 7 jaar de specialist in schoorsteen renovatie en dakwerk in de regio Rotterdam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Behoud van Karakter",
                description: "7+ jaar ervaring in schoorsteen renovatie. Wij herstellen uw schoorsteen met respect voor het authentieke karakter van uw woning en gebruiken passende materialen.",
                icon: Award
              },
              {
                title: "10 Jaar Garantie",
                description: "Langdurig resultaat gegarandeerd. Wij gebruiken uitsluitend A-kwaliteit materialen en geven tot 10 jaar garantie op voegwerk, metselwerk en waterdichtheid.",
                icon: Shield
              },
              {
                title: "Eerlijke Vaste Prijs",
                description: "Geen verrassingen achteraf. Alles inbegrepen: inspectie, materialen, arbeid en opruimen. Wat wij afspreken, is wat u betaalt.",
                icon: CheckCircle
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-500/20">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4394224/pexels-photo-4394224.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Schoorsteen renovatie door DakZorg Nederland"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Schoorsteen Voegen</h4>
                <p className="text-sm text-white/80">Vakkundig voegwerk</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Schoorsteen repareren en metselwerk herstellen"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Metselwerk Herstellen</h4>
                <p className="text-sm text-white/80">Duurzame reparatie</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/15271851/pexels-photo-15271851.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Rookkanaal vernieuwen en kachel plaatsen"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Rookkanaal Vernieuwen</h4>
                <p className="text-sm text-white/80">Veilig & efficiënt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werkproces */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Wrench className="w-4 h-4" />
              <span>Ons Werkproces</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              In 4 stappen naar een{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">gerenoveerde schoorsteen</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Van inspectie tot oplevering — vakkundig en met behoud van karakter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {werkproces.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-brand-500/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA Banner */}
          <div className="bg-stone-900 rounded-3xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ontvang een gratis offerte binnen 48 uur
            </h3>
            <p className="text-stone-400 mb-6 max-w-lg mx-auto">
              Vrijblijvend en zonder verplichtingen. Inclusief gratis inspectie bij u thuis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Schoorsteen Renovatie", "Gratis Offerte Binnen 48 Uur")}
                className="bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Gratis Offerte Aanvragen</span>
              </button>
              <a
                href="tel:0657010861"
                className="bg-stone-800 hover:bg-stone-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>06 57 01 08 61</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews + Statistieken */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              <span>Klantervaringen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Wat onze klanten zeggen over{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">ons dakwerk</span>
            </h2>
          </div>

          {/* Statistieken */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            {[
              { value: "4.9/5", label: "Google beoordeling", icon: Star },
              { value: "10 jaar", label: "Garantie op werk", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-100">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/20">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-stone-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed italic">
                "Ik had een kleine lekkage omdat de sneeuw aan het smelten was. Er kwamen vandaag 2 aardige mannen en ze hebben het meteen gemaakt voor een correcte prijs. Superblij mee. Aanrader."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold">LG</div>
                <div>
                  <div className="font-semibold text-slate-900">Lucienne Gringhuis</div>
                  <div className="text-sm text-stone-500">Recente klant</div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed italic">
                "Lang opzoek geweest naar een betrouwbare dakdekker. Toen hebben ze mij Dakzorg Nederland aanbevolen. Heb een contact moment ingepland, reageerde snel en dachten echt met mij mee! Alles netjes afgewerkt tot in de details. Vakmannen zijn het!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold">JV</div>
                <div>
                  <div className="font-semibold text-slate-900">Jennety Vangulik</div>
                  <div className="text-sm text-stone-500">Recente klant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spoedbanner */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Lekkage of schade aan uw schoorsteen?
                </h3>
                <p className="text-stone-400">
                  24/7 bereikbaar voor spoedgevallen. Direct hulp van onze specialisten.
                </p>
              </div>
            </div>
            <a
              href="tel:0657010861"
              className="group flex items-center gap-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex-shrink-0"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Direct: 06 57 01 08 61</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Hammer className="w-4 h-4" />
              <span>Veelgestelde Vragen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Alles over{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">schoorsteen renovatie</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Antwoord op de meest gestelde vragen over onze renovatie diensten.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer>
        <Contact standalone={false} />
      </Footer>

      {/* Sticky Mobiele CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-stone-700 p-3 flex items-center justify-between gap-3 z-50 lg:hidden">
        <a
          href="tel:0657010861"
          className="flex-1 flex items-center justify-center space-x-2 bg-stone-800 text-white font-bold py-3 rounded-xl transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">Bel Direct</span>
        </a>
        <button
          onClick={() => openPopup("Schoorsteen Renovatie", "Gratis Offerte Aanvragen")}
          className="flex-1 flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold py-3 rounded-xl transition-all duration-300"
        >
          <ArrowRight className="w-5 h-5" />
          <span className="text-sm">Gratis Offerte</span>
        </button>
      </div>

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service={popupService}
        title={popupTitle}
      />
    </div>
  );
};

export default ChimneyRenovationPage;
