import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Clock, CheckCircle, Phone, Shield, Send, User, Mail, MessageSquare, Star, MapPin, Home } from 'lucide-react';
import { sendEmail } from '../utils/emailService';

const backgroundImages = [
  'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  '/house3-new.jpg',
  'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    postcode: '',
    stad: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await sendEmail({
        ...formData,
        source: 'Hero Formulier'
      });

      if (window.fbq) {
        window.fbq('track', 'Lead', { content_name: 'Hero Form' });
      }
      if (window.gtag) {
        window.gtag('event', 'generate_lead', { event_category: 'form', event_label: 'hero_form' });
      }

      navigate('/bedankt');
    } catch (err) {
      setError('Er ging iets mis. Probeer het opnieuw of bel ons direct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all ease-out ${
              index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
            style={{ transitionDuration: '2s' }}
          >
            <img
              src={image}
              alt={`Professioneel dakwerk ${index + 1}`}
              className={`w-full h-full object-cover transition-transform ease-out ${
                index === currentImageIndex ? 'scale-110' : 'scale-100'
              }`}
              style={{ transitionDuration: '8s' }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/75"></div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div
            key={currentImageIndex}
            className="h-full bg-brand-500 animate-progress-bar"
            style={{
              animation: 'progressBar 6s linear forwards'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-24 pt-36 lg:pt-44">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column - Text Content */}
            <div className="text-white order-2 lg:order-1">
              {/* Rating Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 text-sm font-medium">Uitstekend beoordeeld</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                Vakkundig Dakwerk
                <span className="block text-brand-400 mt-2">Met Garantie</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-stone-300 mb-10 max-w-lg leading-relaxed">
                Van dakreparatie tot complete renovatie. DakZorg Nederland staat voor kwaliteit,
                betrouwbaarheid en vakmanschap.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: CheckCircle, text: "Gratis inspectie & offerte" },
                  { icon: Clock, text: "24/7 bereikbaar" },
                  { icon: Shield, text: "Volledig verzekerd" },
                  { icon: Award, text: "7+ jaar ervaring" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-xl px-4 py-3">
                    <item.icon className="w-5 h-5 text-brand-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <a
                href="tel:0657010861"
                className="inline-flex items-center space-x-4 group"
              >
                <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
                  <Phone className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Bel direct</div>
                  <div className="text-white text-xl font-bold group-hover:text-brand-400 transition-colors">06 57 01 08 61</div>
                </div>
              </a>
            </div>

            {/* Right Column - Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden bg-stone-800/60 backdrop-blur-sm">
                <div className="p-6">
                  {/* Header - matching left side style */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                      <Send className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Gratis Offerte</h2>
                      <p className="text-white/60 text-sm">Reactie binnen 24 uur</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Naam *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Telefoon *"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none text-sm"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="E-mailadres"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none text-sm"
                    />

                    <input
                      type="text"
                      placeholder="Straat + huisnummer"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none text-sm"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Postcode"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Plaats"
                        value={formData.stad}
                        onChange={(e) => setFormData({ ...formData, stad: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none text-sm"
                      />
                    </div>

                    <textarea
                      placeholder="Omschrijf uw situatie..."
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:border-brand-500 focus:bg-white/15 transition-all text-white placeholder-white/50 outline-none resize-none text-sm"
                    />

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-500 hover:bg-brand-400 text-stone-900 font-bold py-3 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? <span>Verzenden...</span> : <><span>Verstuur</span><Send className="w-4 h-4" /></>}
                    </button>

                    <div className="flex justify-center gap-4 text-white/40 text-xs">
                      <span>✓ 24u reactie</span>
                      <span>✓ Geen verplichtingen</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
