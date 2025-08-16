import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import styles from './Header.module.css';

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
            <span>Professional Carpentry & Interior Solutions</span>
          </div>
        </div>
      </div>
        
        </>
    )
}

export default Header 