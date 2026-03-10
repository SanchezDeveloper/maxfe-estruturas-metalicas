"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import data from '../../app/data/content.json';

// Sub-componente para o contador individual
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const StatsSection = () => {
  return (
    /* Fundo Azul Escuro (#003366) do seu @theme */
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid de 3 colunas conforme o seu JSON */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {data.stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              <div className="flex items-baseline mb-4 text-secondary">
                <span className="text-5xl md:text-7xl font-black tracking-tighter">
                  <Counter value={item.value} />
                </span>
                <span className="text-3xl md:text-4xl font-black ml-1">
                  {item.suffix}
                </span>
              </div>

              <div className="w-12 h-1.5 bg-background/20 mb-6 rounded-full group-hover:w-20 group-hover:bg-secondary transition-all duration-300"></div>
              
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-background/90 leading-relaxed">
                {item.label}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};