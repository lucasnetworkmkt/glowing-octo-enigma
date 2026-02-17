import React from 'react';
import { MessageSquare, Brain, Layout, Rocket } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { 
    number: '01',
    title: 'Diagnóstico Inicial',
    description: 'Entendemos seu negócio, objetivos e público-alvo.',
    icon: MessageSquare
  },
  { 
    number: '02',
    title: 'Planejamento Estratégico',
    description: 'Definimos estrutura, posicionamento e jornada do usuário.',
    icon: Brain
  },
  { 
    number: '03',
    title: 'Desenvolvimento Premium',
    description: 'Criamos seu site com design moderno e estrutura persuasiva.',
    icon: Layout
  },
  { 
    number: '04',
    title: 'Lançamento e Suporte',
    description: 'Seu site entra no ar pronto para gerar resultados.',
    icon: Rocket
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute right-0 top-1/4 w-40 h-40 md:w-64 md:h-64 border-4 border-brand-accent/20 rounded-full blur-xl"></div>
         <div className="absolute left-0 bottom-1/4 w-60 h-60 md:w-96 md:h-96 border-8 border-brand-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]">Como Trabalhamos</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold">
            Processo simples, estratégico e eficiente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-12 md:mb-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-blue border-2 border-brand-accent flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:shadow-neon group-hover:bg-brand-accent">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-accent group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-blue border border-brand-accent flex items-center justify-center text-brand-accent font-bold text-xs md:text-sm shadow-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3 group-hover:text-brand-accent transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
            <p className="text-lg md:text-2xl font-medium text-white/90 px-4">
                100% focados no crescimento do seu negócio.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
