import { Mail, Phone, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href === '#home') {
      scrollToTop();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Our Team', href: '#team' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Ceiling Installation',
    'Door Installation',
    'Kitchen Units & Wardrobe Fitting',
    'Painting Services',
    'Custom Furniture',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/19d7Zj3R5o/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/crystalfaithprojects?igsh=eDNrZnljZGNjNzV3', label: 'Instagram' },
  ];

  return (
    <footer id="main-footer" className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-between items-center text-center md:items-start md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <a href="#home" onClick={() => scrollToTop()} className="inline-flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 mb-4 group">
                
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                    Crystal Faith
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-amber-400 tracking-wider uppercase leading-tight mt-0.5">
                    Projects
                  </span>
                </div>
              </a>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                Crafting beautiful, functional furniture and providing expert installation services across South Africa for over 8 years. Your vision, our craftsmanship.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-amber-400 hover:text-neutral-950 text-neutral-300 flex items-center justify-center border border-neutral-800 transition"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1 text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.slice(0, 5).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral-400 hover:text-amber-400 transition cursor-pointer text-center md:text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 sm:col-span-1 text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-neutral-400 hover:text-amber-400 transition cursor-pointer text-center md:text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Direct Contact */}
          <div className="lg:col-span-3 sm:col-span-1 text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-neutral-400 flex flex-col items-center md:items-start">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+27660539993" className="hover:text-white transition">+27 66 053 9993</a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:crystalfaithprojects@gmail.com" className="hover:text-white transition break-all">
                  crystalfaithprojects@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Johannesburg & South Africa Wide</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Crystal Faith Projects. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
