import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import Logo from '../../assets/Logo.png';

interface NavigationItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section
      const sections = ['home', 'about', 'how-we-work', 'team', 'services', 'products', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2 border-b border-neutral-200/80'
          : 'bg-white/90 backdrop-blur-xs py-2.5 sm:py-3 border-b border-neutral-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand / Logo */}
        <a
          id="brand-logo-link"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
        >
          <img
            src={Logo}
            alt="Crystal Faith Projects Logo"
            className="h-16 sm:h-23 w-auto max-w-[200px] sm:max-w-[250px] object-contain group-hover:scale-105 transition-transform duration-200"
          />

        </a>

        {/* Desktop Navigation - Compact, responsive & refined */}
        <nav
          id="desktop-navigation"
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-neutral-100/70 p-1 rounded-full border border-neutral-200/60"
        >
          {navigationItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                id={`nav-${sectionId}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2.5 xl:px-3 py-1 text-xs xl:text-[13px] font-medium rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-neutral-950 font-semibold bg-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-white/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action CTA */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
          <a
            id="header-phone-cta"
            href="tel:+27660539993"
            className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 px-2.5 py-1.5 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>+27 66 053 9993</span>
          </a>

          <a
            id="header-book-now-cta"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs hover:shadow-sm transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3 h-3 text-amber-400" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 lg:hidden shrink-0">
          <a
            id="mobile-book-header-btn"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-2xs active:scale-95 transition-all whitespace-nowrap sm:hidden"
          >
            <span>Book</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-amber-400" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 sm:p-1.5 rounded-lg text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[53px] sm:top-[57px] bg-white/98 backdrop-blur-lg border-b border-neutral-200 shadow-xl px-6 py-6 transition-all animate-fadeIn text-center max-h-[calc(100vh-60px)] overflow-y-auto"
        >
          <div className="flex flex-col items-center gap-1.5 max-w-xs mx-auto">
            {navigationItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-${sectionId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`w-full text-center px-4 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-neutral-900 text-white font-bold shadow-xs'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 font-medium'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col items-center gap-2.5 max-w-xs mx-auto">
            <a
              href="tel:+27660539993"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call +27 66 053 9993</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-sm transition active:scale-[0.99]"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

