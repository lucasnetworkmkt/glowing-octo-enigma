import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue pt-24 md:pt-32 pb-10 text-white relative border-t border-brand-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Final CTA Box */}
        <div className="relative -mt-32 md:-mt-48 mb-12 md:mb-16 z-10">
            <div className="bg-gradient-to-br from-[#0a1a35] to-brand-blue rounded-3xl p-6 md:p-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] mx-auto max-w-5xl border border-brand-accent/20 relative overflow-hidden group">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-5xl font-heading font-bold mb-4 md:mb-6 relative z-10">
                Pronto para levar seu negócio para o próximo nível?
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed relative z-10">
                Seu site pode ser o seu melhor vendedor trabalhando 24 horas por dia. 
                Não perca mais oportunidades por não ter uma presença digital estratégica.
            </p>
            <div className="relative z-10">
                <Button variant="success" icon="whatsapp" className="w-full md:w-auto text-base md:text-lg px-6 py-4 md:px-10 md:py-5 bg-brand-green text-brand-blue hover:bg-white hover:text-brand-blue shadow-lg shadow-brand-green/20">
                    Falar com a Nexora Web no WhatsApp
                </Button>
            </div>
            </div>
        </div>

        {/* Footer Links & Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 border-b border-gray-800 pb-10">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/wZgzfVPF/refined-logo-n.png" 
              alt="Nexora Web Logo" 
              className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]" 
            />
            <span className="text-xl md:text-2xl font-heading font-bold">Nexora Web</span>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Nexora Web. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
