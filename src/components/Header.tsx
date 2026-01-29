import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current page is a legal page or thank you page
  const isLegalPage = ['/privacybeleid', '/algemene-voorwaarden', '/cookiebeleid'].includes(location.pathname);
  const isThankYouPage = location.pathname === '/bedankt';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Over Ons', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

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

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    
    // Handle anchor links for home page sections
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        navigate('/', { state: { scrollToId: sectionId } });
      } else {
        // If on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Determine header background class
  const getHeaderClass = () => {
    if (isLegalPage || isThankYouPage) {
      // Always dark background for legal pages and thank you page
      return 'bg-stone-900 shadow-xl';
    } else {
      // Original behavior for other pages
      return isScrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent';
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getHeaderClass()}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo - Simplified for mobile */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-28 h-20 sm:w-36 sm:h-28 lg:w-44 lg:h-36 flex items-center justify-center">
                <img
                  src="https://imgur.com/kocXYo5.png"
                  alt="DakZorg Nederland Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
              {/* Only show company name on larger screens */}
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-base sm:text-lg lg:text-xl">DakZorg Nederland</h1>
                <p className="text-brand-500 text-xs lg:text-sm font-medium">
                  Uw specialist in dakonderhoud
                </p>
              </div>
              {/* Hide text on homepage mobile, show on other pages */}
              {!isHomePage && (
                <div className="block sm:hidden">
                  <h1 className="text-white font-bold text-base">DakZorg</h1>
                  <p className="text-stone-300 text-xs">Dakspecialist</p>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center">
                {navigation.map((item) => (
                  item.href.startsWith('/#') ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-white hover:bg-brand-500 hover:text-slate-900 px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white hover:bg-brand-500 hover:text-slate-900 px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm"
                    >
                      {item.name}
                    </Link>
                  )
                ))}

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="flex items-center space-x-1 text-white hover:bg-brand-500 hover:text-slate-900 px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm"
                  >
                    <span>Diensten</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-stone-100 transition-all duration-200 ${
                      isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-3 max-h-96 overflow-y-auto">
                      {services.map((service, index) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-5 py-3 text-stone-700 hover:bg-brand-50 hover:text-brand-600 transition-colors duration-200 mx-2 rounded-xl"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="font-medium text-sm">{service.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Contact Info - Desktop only */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="mailto:info@dakzorgnederland.nl"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 mr-6"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">info@dakzorgnederland.nl</span>
              </a>
              <a
                href="tel:0657010861"
                className="group flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-stone-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 hover:scale-105"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="text-sm">06 57 01 08 61</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 top-[80px] z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative bg-white shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300">
            {/* Main Navigation */}
            <div className="space-y-1 mb-6">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-slate-900 hover:bg-stone-50 rounded-lg transition-colors duration-200 font-medium text-base"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-slate-900 hover:bg-stone-50 rounded-lg transition-colors duration-200 font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            
            {/* Services Section */}
            <div className="border-t border-stone-200 pt-4">
              <button 
                onClick={toggleMobileServices}
                className="w-full flex items-center justify-between px-4 py-3 text-slate-900 hover:bg-stone-50 rounded-lg transition-colors duration-200 font-medium text-base"
              >
                <span>Onze Diensten</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                  isMobileServicesOpen ? 'rotate-90' : ''
                }`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-2 pt-2 space-y-1 max-h-[500px] overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors duration-200 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="border-t border-stone-200 pt-4 mt-4">
              <div className="space-y-3">
                <a
                  href="tel:0657010861"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-900 hover:bg-stone-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Bel Direct</div>
                    <div className="text-xs text-stone-600">06 57 01 08 61 - 24/7</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@dakzorgnederland.nl"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-900 hover:bg-stone-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Email Ons</div>
                    <div className="text-xs text-stone-600">info@dakzorgnederland.nl</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;