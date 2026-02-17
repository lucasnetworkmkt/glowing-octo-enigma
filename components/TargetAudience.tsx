import React from 'react';
import { Stethoscope, Utensils, Scissors, Store, Truck, Wrench, User, AlertTriangle, ArrowRight } from 'lucide-react';
import { AudienceItem } from '../types';

const audiences: AudienceItem[] = [
  { label: 'Clínicas e Consultórios', icon: Stethoscope },
  { label: 'Restaurantes e Delivery', icon: Utensils },
  { label: 'Barbearias e Salões', icon: Scissors },
  { label: 'Comércios Locais', icon: Store },
  { label: 'Logística e Entregas', icon: Truck },
  { label: 'Prestadores de Serviço', icon: Wrench },
  { label: 'Profissionais Autônomos', icon: User },
  { label: 'Sites antigos ou lentos', icon: AlertTriangle },
];

const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-heading font-bold text-brand-blue mb-4 md:mb-6">
            Ideal para negócios que querem crescer no digital
          </h2>
          <p className="text-brand-text text-base md:text-xl leading-relaxed">
            Atendemos desde pequenos empreendedores até empresas consolidadas que precisam de presença digital estratégica para atrair mais clientes e gerar resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 bg-brand-gray hover:bg-white hover:border-brand-accent hover:shadow-neon transition-all duration-300 flex flex-col items-center text-center cursor-default"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center mb-4 md:mb-6 text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-brand-blue transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="font-heading font-semibold text-brand-blue text-base md:text-lg group-hover:text-brand-accent transition-colors">
                  {item.label}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Final Phrase & CTA */}
        <div className="bg-gradient-to-r from-brand-blue to-[#0a1a35] rounded-3xl p-6 md:p-12 text-center relative overflow-hidden border border-brand-accent/20 shadow-xl">
           <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              <div className="text-left text-center md:text-left">
                <p className="text-white text-base md:text-xl font-medium mb-1">Independentemente do tamanho do seu negócio,</p>
                <p className="text-brand-accent font-heading font-bold text-lg md:text-2xl drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]">sua presença digital precisa transmitir autoridade.</p>
              </div>
              <a 
                href="#hero" 
                className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-brand-accent text-brand-blue px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-white transition-all shadow-neon whitespace-nowrap"
              >
                <span>E o seu negócio? Vamos conversar</span>
                <ArrowRight className="w-5 h-5" />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
