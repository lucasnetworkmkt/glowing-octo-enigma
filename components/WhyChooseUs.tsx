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
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-purple/20 rounded-2xl transform rotate-3"></div>
              
              {/* Card Container */}
              <div className="relative rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] bg-gradient-to-br from-brand-gray to-gray-200 overflow-hidden flex items-center justify-center p-6">
                {/* Background Pattern - Usando style para garantir estabilidade */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(#6C63FF 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>
                
                {/* Background Blobs */}
                <div className="w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl absolute top-10 left-10"></div>
                <div className="w-40 h-40 bg-brand-green/10 rounded-full blur-3xl absolute bottom-10 right-10"></div>
                
                {/* Main Content: 100% Card */}
                <div className="relative z-10 bg-white p-8 md:p-10 rounded-2xl shadow-xl max-w-sm text-center border border-gray-100 transform transition-transform hover:scale-105 duration-500">
                  <p className="font-heading font-bold text-brand-blue text-5xl md:text-6xl mb-4">100%</p>
                  <p className="text-brand-text text-lg font-medium">Foco na satisfação e no resultado do seu negócio.</p>
                </div>
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
