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
          
          {/* Abstract Graphic Side (No Photo) */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-purple/20 rounded-2xl transform rotate-3"></div>
              
              {/* Abstract Card Container */}
              <div className="relative rounded-2xl shadow-2xl w-full h-[500px] bg-gradient-to-br from-brand-gray to-gray-200 overflow-hidden flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6C63FF_1px,transparent_1px)] [background-size:20px_20px]"></div>
                
                {/* Abstract Shape */}
                <div className="w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl absolute top-10 left-10"></div>
                <div className="w-40 h-40 bg-brand-green/10 rounded-full blur-3xl absolute bottom-10 right-10"></div>
                
                {/* Center Icon/Graphic */}
                <div className="relative z-10 w-32 h-32 rounded-2xl bg-white shadow-xl flex items-center justify-center transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                    <div className="w-20 h-2 bg-brand-gray rounded-full mb-2"></div>
                    <div className="w-14 h-2 bg-brand-gray rounded-full mb-2"></div>
                    <div className="w-10 h-2 bg-brand-purple rounded-full"></div>
                </div>
              </div>

              {/* Float Card */}
              <div className="absolute bottom-8 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block border border-gray-100">
                <p className="font-heading font-bold text-brand-blue text-4xl mb-2">100%</p>
                <p className="text-brand-text text-sm">Foco na satisfação e no resultado do seu negócio.</p>
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