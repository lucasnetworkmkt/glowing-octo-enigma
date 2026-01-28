import React from 'react';
import Button from './Button';
import { Rocket, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue pt-32 pb-10 text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Final CTA Box */}
        {/* Moved margin logic: Using relative positioning with negative margin works better for stacking context */}
        <div className="relative -mt-48 mb-16 z-10">
            <div className="bg-gradient-to-r from-brand-purple to-indigo-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Pronto para levar seu negócio para o próximo nível?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Tenha um site profissional, moderno e pronto para atrair clientes. Não perca mais vendas por não ter uma presença digital forte.
            </p>
            <Button variant="success" icon="whatsapp" className="w-full md:w-auto text-lg px-10 py-5 bg-brand-green text-brand-blue hover:bg-white hover:text-brand-blue">
                Falar com a Nexora Web no WhatsApp
            </Button>
            </div>
        </div>

        {/* Footer Links & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-10">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-brand-purple" />
            </div>
            <span className="text-2xl font-heading font-bold">Nexora Web</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nexora Web. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;