import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone className="w-4 h-4" />
              <span>066 053 9993</span>
            </div>
            <div className={styles.contactItem}>
              <Mail className="w-4 h-4" />
              <span>crystalfaithprojects@gmail.com</span>
            </div>
          </div>
          <div className={styles.tagline}>
            <span>Professional Carpentry & Paiting Service</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerDefault}`}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <img src={Logo} alt="Logo" className={styles.logo} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <button onClick={() => scrollToSection('home')} className={styles.navButton}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={styles.navButton}>
              About
            </button>
            <button onClick={() => scrollToSection('services')} className={styles.navButton}>
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className={styles.navButton}>
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.navButton}>
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={styles.ctaButton}
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <button onClick={() => scrollToSection('home')} className={styles.mobileNavButton}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className={styles.mobileNavButton}>
                About
              </button>
              <button onClick={() => scrollToSection('services')} className={styles.mobileNavButton}>
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className={styles.mobileNavButton}>
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className={styles.mobileNavButton}>
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={styles.mobileCta}
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;