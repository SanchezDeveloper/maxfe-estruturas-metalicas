"use client";

import React from 'react';
import data from '../../app/data/content.json';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  return (
    // Utiliza o Branco Geada (#FAFAFA) do seu @theme
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Autoridade */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 uppercase tracking-tight">
            Depoimentos de Sucesso
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {data.testimonials.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={index} 
              // Card Branco sobre fundo Geada para destaque
              className="group bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Aspas Estilizadas em Dourado (#FFC107) */}
              <span className="text-6xl text-secondary opacity-30 absolute top-4 left-6 select-none font-serif">
                “
              </span>

              <div className="relative z-10 mb-8">
                <p className="text-text-main italic leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>

              {/* Assinatura do Cliente */}
              <div className="border-t border-gray-50 pt-6">
                <p className="font-black text-primary uppercase text-sm tracking-wider">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-text-muted mt-1 uppercase">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};