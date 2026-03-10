"use client";

import React from 'react';
import data from '../../app/data/content.json';
import { motion } from 'framer-motion';

export const AdvantagesSection = () => {
  return (
    // bg-background utiliza o seu #FAFAFA
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 uppercase tracking-tight">
            Nossos Diferenciais
          </h2>
          {/* Detalhe em Dourado #FFC107 */}
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.advantages.map((adv) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={adv.id} 
              // Card em Branco Puro para contrastar com o fundo Geada
              className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Ícone Numérico Minimalista */}
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <span className="text-secondary group-hover:text-primary font-black text-xl">
                  0{adv.id}
                </span>
              </div>

              {/* Título em Preto Principal */}
              <h3 className="text-xl font-bold text-text-main mb-3">
                {adv.title}
              </h3>
              
              {/* Texto em Cinza  */}
              <p className="text-text-muted leading-relaxed text-sm font-medium">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};