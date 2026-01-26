import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin,
  Youtube, Clock, Award, Shield, CheckCircle, Star, Euro, Timer, FileText
} from 'lucide-react';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Dakwerk & Dakdekken", href: "/dakwerk-dakdekken" },
    { name: "Schoorsteen Verwijderen", href: "/schoorsteen-verwijderen" },
    { name: "Schoorsteen Renovatie", href: "/schoorsteen-renovatie" },
    { name: "Nokvorsten", href: "/nokvorsten" },
    { name: "Loodreparaties", href: "/loodreparaties" },
    { name: "Spoed Service", href: "/spoed" },
    { name: "Dakinspectie", href: "/dakinspectie" },
    { name: "Daklekkage", href: "/daklekkage" },
    { name: "Dakgoot Reiniging", href: "/dakgootreiniging" },
  ];

  const quickLinks = [
    { name: "Over Ons", href: "/#about" },
    { name: "Kostencalculator", href: "/#cost-calculator" },
    { name: "Contact", href: "/#contact" }
  ];

  const certifications = [
    "KvK Geregistreerd (96885904)",
    "Verzekerd & Gebonden",
    "7+ Jaar Ervaring",
    "Kwaliteitsgarantie",
    "Veilig Werken",
    "Milieubewust Bouwen"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  const handleAnchorClick = (href) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);

      if (window.location.pathname !== '/') {
        navigate('/', { state: { scrollToId: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-stone-900 via-stone-950 to-black text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.1),transparent_40%)]"></div>
      </div>

      {/* Contact Content (if provided) */}
      {children && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {children}
        </div>
      )}

      {/* Main Footer Content - Elegant Design */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <Link to="/" className="block max-w-xs">
              <div className="w-44 h-20 flex items-center justify-center">
                <img
                  src="https://imgur.com/kocXYo5.png"
                  alt="DakZorg Nederland Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-stone-400 leading-relaxed text-base max-w-prose">
              Al meer dan 7 jaar uw betrouwbare partner voor hoogwaardig dakonderhoud en renovatieprojecten in Nederland.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a href="tel:0657010861" className="group flex items-center space-x-4 p-4 bg-stone-800/20 rounded-lg hover:bg-stone-800/30 transition-all duration-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium">06 57 01 08 61</div>
                  <div className="text-sm text-stone-500">24/7 bereikbaar</div>
                </div>
                <div className="text-stone-600 group-hover:translate-x-1 transition-transform">→</div>
              </a>

              {/* Email */}
              <a href="mailto:info@dakzorgnederland.nl" className="group flex items-center space-x-4 p-4 bg-stone-800/20 rounded-lg hover:bg-stone-800/30 transition-all duration-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium">info@dakzorgnederland.nl</div>
                  <div className="text-sm text-stone-500">Binnen 24 uur reactie</div>
                </div>
                <div className="text-stone-600 group-hover:translate-x-1 transition-transform">→</div>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 p-4 bg-stone-800/10 rounded-lg">
              <div className="w-10 h-10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Waalwijk</div>
                <div className="text-stone-400 text-sm">Villa Gagel 9, 5146AC</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Diensten</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="group flex items-center space-x-2 py-2 text-stone-400 hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-600 group-hover:bg-blue-400 transition-colors"></div>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/diensten"
              className="inline-flex items-center space-x-2 mt-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group"
            >
              <span>Alle diensten</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Emergency */}
            <div className="mt-8 p-4 bg-red-900/10 border border-red-800/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-medium text-sm">24/7 Spoedservice</span>
              </div>
              <a href="tel:0657010861" className="text-red-300 hover:text-red-200 text-sm font-medium block">
                06 57 01 08 61
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Snel naar</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault();
                      handleAnchorClick(link.href);
                    }
                  }}
                  className="block py-2 text-stone-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Certifications */}
            <div className="mt-8 space-y-3">
              <h5 className="text-sm font-semibold text-stone-300 mb-2">Certificeringen</h5>
              {/* Only show first 3 certs */}
              {certifications.slice(0, 3).map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-stone-500">
                  <Award className="w-3 h-3 text-blue-400" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Garanties</h4>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "100% Verzekerd", color: "green-400" },
                { icon: Timer, text: "Binnen 3 uur ter pleatse", color: "blue-400" },
                { icon: Euro, text: "Gratis offertes", color: "yellow-400" },
                { icon: Star, text: "7+ jaar ervaring", color: "yellow-400" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-6 h-6 flex items-center justify-center text-${item.color}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-stone-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-sm text-stone-400 mb-3">Volg ons</p>
              <div className="flex space-x-2">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-stone-800/20 hover:bg-stone-800/40 rounded flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-16 pt-8 border-t border-stone-800">
          {/* Bottom navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-stone-500">
              <span>© {currentYear} DakZorg Nederland</span>
              <span className="hidden md:block">•</span>
              <span>KvK: 96885904</span>
              <span className="hidden md:block">•</span>
              <span>Waalwijk, Nederland</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-green-400">
                <Shield className="w-3 h-3" />
                <span>SSL Secured</span>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <Link to="/privacybeleid" className="text-stone-500 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link to="/algemene-voorwaarden" className="text-stone-500 hover:text-white transition-colors">
                  Voorwaarden
                </Link>
                <Link to="/cookiebeleid" className="text-stone-500 hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-stone-600">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;