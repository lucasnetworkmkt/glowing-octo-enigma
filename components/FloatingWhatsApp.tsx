import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={getWhatsAppLink()} 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-brand-green text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-brand-green/50 animate-bounce"
      aria-label="Falar no WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;