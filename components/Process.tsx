import React from 'react';
import { MessageSquare, Brain, Code, Rocket } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { 
    number: '01',
    title: 'Contato Inicial',
    description: 'Você entra em contato pelo WhatsApp e nos conta o que precisa.',
    icon: MessageSquare
  },
  { 
    number: '02',
    title: 'Planejamento',
    description: 'Entendemos seu negócio, seus objetivos e definimos a estrutura.',
    icon: Brain
  },
  { 
    number: '03',
    title: 'Desenvolvimento',
    description: 'Criamos seu site sob medida com design moderno e persuasivo.',
    icon: Code
  },
  { 
    number: '04',
    title: 'Lançamento',
    description: 'Seu site vai ao ar pronto para receber visitas e gerar resultados.',
    icon: Rocket
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 top-1/4 w-64 h-64 border-4 border-white rounded-full"></div>
         <div className="absolute left-0 bottom-1/4 w-96 h-96 border-8 border-brand-purple rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">Passo a Passo</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Simples, rápido e sem dor de cabeça
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-700 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-brand-blue border-4 border-brand-purple flex items-center justify-center z-10 relative">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-brand-blue font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;