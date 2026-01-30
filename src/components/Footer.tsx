import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Dakwerk & Dakdekken', href: '/dakwerk-dakdekken' },
    { name: 'Bitumen & EPDM Daken', href: '/bitumen-epdm' },
    { name: 'Dakkapel & Dakramen', href: '/dakkapel' },
    { name: 'Schoorsteen Verwijderen', href: '/schoorsteen-verwijderen' },
    { name: 'Schoorsteen Renovatie', href: '/schoorsteen-renovatie' },
    { name: 'Nokvorsten', href: '/nokvorsten' },
    { name: 'Loodreparaties', href: '/loodreparaties' },
    { name: 'Daklekkage', href: '/daklekkage' },
    { name: 'Dakgoten', href: '/dakgootreiniging' },
    { name: 'Dakinspectie', href: '/dakinspectie' },
    { name: 'Vogel & Ongedierte Wering', href: '/vogel-ongedierte-wering' },
    { name: 'Spoed Service', href: '/spoed' },
  ];

  const handleAnchorClick = (href: string) => {
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
    <footer className="bg-stone-900 text-white">
      {/* Top Accent */}
      <div className="h-0.5 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600"></div>

      {/* Contact Content (if provided) */}
      {children && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      )}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & Info */}
          <div>
            <Link to="/" className="inline-block mb-4 group">
              <img
                src="https://imgur.com/kocXYo5.png"
                alt="DakZorg Nederland"
                className="h-36 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Uw specialist voor vakkundig dakonderhoud en renovatie.
            </p>
            <a href="tel:0657010861" className="group inline-flex items-center gap-2 text-brand-500 text-sm hover:text-brand-400 transition-all duration-300">
              <Clock className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium group-hover:translate-x-0.5 transition-transform duration-300">24/7 Spoedservice</span>
            </a>
          </div>

          {/* Diensten Kolom 1 */}
          <div>
            <h4 className="text-brand-500 font-semibold mb-4 text-sm uppercase tracking-wider">Diensten</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-stone-500 hover:text-white text-sm inline-block transition-all duration-300 hover:translate-x-1.5 hover:pl-2 border-l-2 border-transparent hover:border-brand-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten Kolom 2 */}
          <div>
            <h4 className="text-brand-500 font-semibold mb-4 text-sm uppercase tracking-wider">Meer Diensten</h4>
            <ul className="space-y-2">
              {services.slice(6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-stone-500 hover:text-white text-sm inline-block transition-all duration-300 hover:translate-x-1.5 hover:pl-2 border-l-2 border-transparent hover:border-brand-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-500 font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a href="tel:0657010861" className="group flex items-center gap-3 text-stone-500 hover:text-white transition-all duration-300 text-sm">
                <span className="w-8 h-8 rounded-lg bg-stone-900 group-hover:bg-brand-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-4 h-4 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">06 57 01 08 61</span>
              </a>
              <a href="mailto:info@dakzorgnederland.nl" className="group flex items-center gap-3 text-stone-500 hover:text-white transition-all duration-300 text-sm">
                <span className="w-8 h-8 rounded-lg bg-stone-900 group-hover:bg-brand-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-4 h-4 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">info@dakzorgnederland.nl</span>
              </a>
              <div className="flex items-center gap-3 text-stone-500 text-sm">
                <span className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-500" />
                </span>
                <span>Waalwijk, Nederland</span>
              </div>
            </div>

            {/* Quick Nav */}
            <div className="mt-6 pt-4 border-t border-stone-900">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <Link to="/" className="text-stone-600 hover:text-brand-400 transition-all duration-300 text-xs hover:-translate-y-0.5">Home</Link>
                <button onClick={() => handleAnchorClick('/#about')} className="text-stone-600 hover:text-brand-400 transition-all duration-300 text-xs hover:-translate-y-0.5">Over Ons</button>
                <button onClick={() => handleAnchorClick('/#contact')} className="text-stone-600 hover:text-brand-400 transition-all duration-300 text-xs hover:-translate-y-0.5">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
            <span>© {currentYear} DakZorg Nederland • KvK: 96885904</span>
            <div className="flex items-center gap-4">
              <Link to="/privacybeleid" className="hover:text-brand-400 transition-all duration-300 hover:-translate-y-0.5">Privacy</Link>
              <Link to="/algemene-voorwaarden" className="hover:text-brand-400 transition-all duration-300 hover:-translate-y-0.5">Voorwaarden</Link>
              <Link to="/cookiebeleid" className="hover:text-brand-400 transition-all duration-300 hover:-translate-y-0.5">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
