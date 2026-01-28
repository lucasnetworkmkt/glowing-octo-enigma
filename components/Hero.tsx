import React from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-brand-blue overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          
          {/* Content */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-brand-purple text-sm font-semibold tracking-wide">WEB DESIGN PREMIUM</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              Sites profissionais que transformam <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">visitantes em clientes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              A Nexora Web cria sites modernos, rápidos e estratégicos para negócios que querem vender mais no digital — sem complicação e com tudo incluso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="primary" icon="whatsapp">
                Solicitar orçamento no WhatsApp
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-green" />
                <span>Entregas rápidas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-green" />
                <span>Suporte humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-green" />
                <span>Pagamento facilitado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;