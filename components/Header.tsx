import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-neon border-b border-brand-accent/10 py-4' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 text-white group">
            <img 
              src="https://i.ibb.co/wZgzfVPF/refined-logo-n.png" 
              alt="Nexora Web Logo" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" 
            />
            <span className="text-2xl font-heading font-bold tracking-tight group-hover:text-brand-accent transition-colors">Nexora Web</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-brand-accent font-medium transition-colors hover:drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-accent hover:bg-white text-brand-blue px-5 py-2.5 rounded-full font-semibold transition-all text-sm shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-neon"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-accent p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-blue border-t border-brand-accent/20 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col p-6 gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-300 hover:text-brand-accent text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={getWhatsAppLink()}
                className="bg-brand-accent text-center text-brand-blue py-3 rounded-lg font-bold shadow-neon"
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
