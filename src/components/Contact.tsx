import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, Clock, Send, User, 
  MessageCircle, Calendar, Home, Building2, MapPin 
} from 'lucide-react';
import { sendEmail } from '../utils/emailService';

interface ContactProps {
  standalone?: boolean;
}

const Contact = ({ standalone = true }: ContactProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    stad: '',
    address: '',
    provincie: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail(formData);
      
      if (success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          stad: '',
          address: '',
          provincie: '',
          timeline: ''
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


  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = (
    <>
      <div className={standalone ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 border border-brand-400/30 text-brand-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Mail className="w-4 h-4" />
            <span>Neem Contact Op</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Uw Dakproject
            <span className="block bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 bg-clip-text text-transparent">Begint Hier</span>
          </h2>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Klaar om uw dakproject te realiseren? Neem contact met ons op
            voor een vrijblijvende dakinspectie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-brand-400 to-brand-600 rounded-full"></div>
              Contactgegevens
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 bg-stone-800/50 backdrop-blur-sm rounded-xl p-4 border border-stone-700/50 hover:border-brand-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-500/20">
                    <info.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-stone-400 text-sm">
                        {info.action && detailIndex === 0 ? (
                          <a
                            href={info.action}
                            className="hover:text-brand-400 transition-colors font-medium"
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

            {/* Company Info */}
            <div className="mt-6 p-5 bg-gradient-to-br from-stone-800 to-stone-800/50 rounded-2xl border border-stone-700/50">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-400" />
                Bedrijfsgegevens
              </h4>
              <div className="space-y-2 text-stone-400 text-sm">
                <p className="flex justify-between"><span>KvK</span><span className="text-white font-medium">96885904</span></p>
                <p className="flex justify-between"><span>Vestiging</span><span className="text-white font-medium">Waalwijk</span></p>
                <p className="flex justify-between"><span>Ervaring</span><span className="text-brand-400 font-medium">7+ jaar</span></p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-5 bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
                <h4 className="text-brand-400 font-bold">24/7 Spoedservice</h4>
              </div>
              <p className="text-stone-400 text-sm mb-3">Direct hulp bij dakproblemen</p>
              <a
                href="tel:0657010861"
                className="inline-flex items-center gap-2 text-white bg-brand-500/20 hover:bg-brand-500/30 px-4 py-2 rounded-lg font-semibold transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                06 57 01 08 61
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Stuur ons een bericht</h3>
                  <p className="text-stone-500 text-sm">Reactie binnen 24 uur</p>
                </div>
              </div>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
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
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
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
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
                        placeholder="uw.email@example.nl"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Telefoon
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
                        placeholder="0488 234 625"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Stad
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <input
                        type="text"
                        value={formData.stad}
                        onChange={(e) => handleInputChange('stad', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
                        placeholder="Bijv. Waalwijk"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Straatnaam + Huisnummer
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
                      placeholder="Bijv. Villa gagel 9"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Provincie
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <input
                        type="text"
                        value={formData.provincie}
                        onChange={(e) => handleInputChange('provincie', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
                        placeholder="Bijv. Gelderland"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Gewenste startdatum
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-stone-900"
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
                </div>

                {/* Message */}
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
                      className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-none text-stone-900"
                      placeholder="Beschrijf uw project, wensen en eventuele specifieke vragen..."
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      isSubmitting
                        ? 'bg-stone-400 cursor-not-allowed'
                        : 'bg-brand-500 hover:bg-brand-600 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900"></div>
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
                  Wij nemen binnen 24 uur contact met u op.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="relative bg-stone-800 rounded-3xl p-8 md:p-10 overflow-hidden border border-stone-700">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
                  24/7 Beschikbaar
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Direct hulp nodig?
                </h3>
                <p className="text-stone-400 max-w-lg">
                  Onze dakspecialisten staan dag en nacht voor u klaar bij spoedeisende situaties.
                </p>
              </div>
              <a
                href="tel:0657010861"
                className="group flex items-center gap-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-900 font-bold px-8 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-brand-500/20"
              >
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="text-xs font-semibold opacity-80">Bel direct</div>
                  <div className="text-xl">06 57 01 08 61</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (standalone) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        {content}
      </section>
    );
  }

  return (
    <section id="contact">
      {content}
    </section>
  );
};

export default Contact;