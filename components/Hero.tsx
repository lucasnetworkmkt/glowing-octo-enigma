import React from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 bg-brand-blue overflow-hidden">
      
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-accent/10 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          
          {/* Content */}
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.2] md:leading-[1.1] mb-4 md:mb-6 drop-shadow-lg">
              Transforme Seu Negócio em Uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400 drop-shadow-[0_0_10px_rgba(0,212,255,0.3)] block sm:inline">Máquina de Vendas</span>
            </h1>
            
            <h2 className="text-lg md:text-2xl text-white/90 font-medium mb-4 px-2">
              Sites profissionais que transformam visitantes em clientes
            </h2>

            <p className="text-sm md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Na Nexora Web, cada projeto é desenvolvido com estratégia, design profissional e copy persuasiva para que seu site não seja apenas bonito, mas uma verdadeira máquina de conversão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12 w-full sm:w-auto px-4 sm:px-0">
              <Button variant="primary" icon="whatsapp" className="w-full sm:w-auto text-base md:text-lg px-6 py-3 md:px-8 md:py-4">
                Solicitar orçamento no WhatsApp
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-gray-400 text-xs md:text-sm border-t border-brand-accent/20 pt-6 md:pt-8 max-w-4xl mx-auto w-fit sm:w-full">
              <div className="flex items-center justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                <span>Entregas rápidas</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                <span>Suporte humanizado</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                <span>Pagamento facilitado</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                <span>Pequenos e grandes negócios</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
