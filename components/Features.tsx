import React from 'react';
import { Laptop, Zap, Target, Search, Puzzle, Server, Link } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  { icon: Laptop, title: 'Sites Profissionais', description: 'Layouts exclusivos alinhados à identidade da sua marca.' },
  { icon: Zap, title: 'Ultra Rápidos', description: 'Otimizados para carregar em instantes e não perder visitas.' },
  { icon: Target, title: 'Foco em Conversão', description: 'Estratégia visual para transformar cliques em vendas.' },
  { icon: Search, title: 'SEO Incluso', description: 'Otimização básica para você ser encontrado no Google.' },
  { icon: Puzzle, title: 'Integrações que você precisa', description: 'Sistema de agendamentos por WhatsApp, pagamentos e muito mais.' },
  { icon: Server, title: 'Hospedagem Inclusa', description: 'Servidores seguros e estáveis sem custo extra.' },
  { icon: Link, title: 'Domínio Incluso', description: 'Registramos seu nome na internet (www.seu.com.br).' },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content - Sticky only on Desktop */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-6">
              Tudo o que seu negócio precisa para vender online
            </h2>
            <p className="text-brand-text text-lg mb-8 leading-relaxed">
              Você não precisa se preocupar com nada técnico. A <strong className="text-brand-purple">Nexora Web</strong> cuida de tudo para você ter um site profissional, pronto para gerar clientes.
            </p>
            <div className="hidden lg:block">
               {/* Decorative arrow or element */}
               <div className="h-1 w-24 bg-brand-purple rounded-full"></div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-brand-purple/20"
                >
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;