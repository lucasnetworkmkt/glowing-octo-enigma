import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NAVIGATION_LINKS, getWhatsAppLink } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform-gpu ${
        isScrolled 
          ? 'bg-brand-blue/95 backdrop-blur-sm shadow-xl py-4' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white group">
            <div className="bg-brand-purple p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold tracking-tight">Nexora Web</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-brand-purple font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-purple hover:bg-opacity-90 text-white px-5 py-2.5 rounded-full font-semibold transition-all text-sm"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-blue border-t border-gray-800 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col p-6 gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-300 hover:text-brand-purple text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={getWhatsAppLink()}
                className="bg-brand-purple text-center text-white py-3 rounded-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
