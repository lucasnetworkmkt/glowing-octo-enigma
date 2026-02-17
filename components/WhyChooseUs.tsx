import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';

const benefits = [
  "Estrutura estratégica de conversão",
  "Design moderno que transmite autoridade",
  "Comunicação direta e sem burocracia",
  "Entrega ágil e profissional",
  "Hospedagem e domínio inclusos",
  "Suporte dedicado após a entrega"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Vantagens</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-6 md:mb-8 leading-tight">
              Sites pensados para vender, não apenas para <span className="text-brand-accent drop-shadow-[0_0_3px_rgba(0,212,255,0.5)]">"existir"</span>.
            </h2>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-brand-gray/30 hover:bg-brand-gray/60 transition-colors border border-transparent hover:border-brand-accent/20">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-accent" />
                  </div>
                  <p className="text-brand-blue font-medium text-base md:text-lg">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="block">
                <Button variant="primary" icon="arrow" fullWidth={true} className="md:w-auto">
                    Quero meu site estratégico
                </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-lg aspect-square flex items-center justify-center">
              {/* Decorative blobs behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-blue/20 to-brand-accent/20 rounded-full blur-3xl -z-10"></div>

              {/* Main Card */}
              <div className="bg-white p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 text-center relative z-10 transform transition-transform hover:scale-105 duration-500 w-full">
                  <h3 className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent text-5xl md:text-8xl mb-3 md:mb-4 tracking-tighter drop-shadow-sm">
                    100%
                  </h3>
                  <div className="h-1.5 w-12 md:w-16 bg-brand-accent mx-auto rounded-full mb-4 md:mb-6 shadow-neon"></div>
                  <p className="text-brand-text text-lg md:text-2xl font-medium leading-relaxed">
                    Foco na satisfação e no resultado do seu negócio.
                  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
