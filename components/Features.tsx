import React from 'react';
import { Laptop, Zap, Target, Search, Server, Globe } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  { icon: Laptop, title: 'Sites Profissionais', description: 'Layouts exclusivos e personalizados, alinhados à identidade da sua marca.' },
  { icon: Zap, title: 'Ultra Rápidos', description: 'Performance otimizada para não perder visitantes por lentidão.' },
  { icon: Target, title: 'Foco em Conversão', description: 'Estrutura visual e textual pensada para gerar mais contatos e vendas.' },
  { icon: Search, title: 'SEO Incluso', description: 'Configuração inicial estratégica para facilitar seu posicionamento no Google.' },
  { icon: Server, title: 'Hospedagem Premium', description: 'Servidores seguros e estáveis inclusos.' },
  { icon: Globe, title: 'Domínio Incluso', description: 'Registro do seu domínio profissional (.com ou .com.br).' },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Entrega Completa</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-4 md:mb-6">
              Tudo o que seu negócio precisa para vender online
            </h2>
            <div className="h-1.5 w-16 md:w-24 bg-brand-accent rounded-full mb-6 md:mb-8 shadow-neon"></div>
            <p className="text-brand-text text-base md:text-lg leading-relaxed">
              Você não precisa se preocupar com nada técnico. A <strong className="text-brand-accent">Nexora Web</strong> cuida de tudo para você ter um site profissional, pronto para gerar clientes.
            </p>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-brand-accent group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-accent/10 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-blue group-hover:text-brand-accent" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-brand-blue mb-2 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text text-sm md:text-base leading-relaxed">
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
