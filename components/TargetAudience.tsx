import React from 'react';
import { Stethoscope, Utensils, Bike, Store, Wrench, User, AlertCircle } from 'lucide-react';
import { AudienceItem } from '../types';

const audiences: AudienceItem[] = [
  { label: 'Clínicas e Consultórios', icon: Stethoscope },
  { label: 'Restaurantes e Delivery', icon: Utensils },
  { label: 'Entregas e Logística', icon: Bike },
  { label: 'Comércios Locais', icon: Store },
  { label: 'Prestadores de Serviço', icon: Wrench },
  { label: 'Profissionais Autônomos', icon: User },
  { label: 'Quem tem site lento ou antigo', icon: AlertCircle },
];

const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">
            Ideal para todo tipo de negócio
          </h2>
          <p className="text-brand-text text-lg">
            Atendemos empresas que precisam de presença digital profissional para atrair mais clientes e gerar resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 bg-brand-gray hover:bg-white hover:border-brand-purple hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 text-brand-purple shadow-sm group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-brand-blue text-lg">
                  {item.label}
                </h3>
              </div>
            );
          })}
           {/* Card Final de Chamada */}
           <div className="p-6 rounded-2xl bg-brand-blue text-white flex flex-col items-center justify-center text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
              <p className="font-heading font-bold text-xl mb-2">E o seu negócio?</p>
              <a href="#hero" className="text-brand-green font-semibold hover:underline">Vamos conversar &rarr;</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;