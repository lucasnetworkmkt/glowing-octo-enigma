import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Sites pensados para vender, não só “ficar bonito”",
  "Visual moderno e profissional",
  "Carregamento extremamente rápido",
  "Comunicação direta e sem burocracia",
  "Hospedagem e domínio inclusos no pacote",
  "Entrega ágil do projeto",
  "Suporte dedicado após a entrega"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Decorative blobs behind */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>

              {/* Main Card */}
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 text-center relative z-10 transform transition-transform hover:scale-105 duration-500">
                  <h3 className="font-heading font-bold text-brand-blue text-6xl md:text-7xl mb-4 tracking-tight">
                    100%
                  </h3>
                  <p className="text-brand-text text-xl font-medium leading-relaxed">
                    Foco na satisfação e no resultado do seu negócio.
                  </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-8">
              Por que escolher a <span className="text-brand-purple">Nexora Web?</span>
            </h2>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-brand-gray/50 hover:bg-brand-gray transition-colors">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                  </div>
                  <p className="text-brand-blue font-medium text-lg leading-snug">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
