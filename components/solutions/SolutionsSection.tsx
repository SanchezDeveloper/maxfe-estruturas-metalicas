"use client";

import { useState } from 'react';
import data from '../../app/data/solutions.json'
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Lógica de Filtro Dinâmico
  const filteredSolutions = data.solutions.filter(sol => {
    const matchesCategory = activeCategory === "Todos" || sol.category === activeCategory;
    const matchesSearch = sol.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header da Página */}
      <section className="bg-primary pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Nossas <span className="text-secondary">Soluções</span>
          </h1>
          <p className="text-background/70 max-w-2xl mx-auto font-medium">
            Engenharia de precisão aplicada a diversos segmentos. Explore nosso catálogo de estruturas metálicas de alta performance.
          </p>
        </div>
      </section>

      {/* Barra de Filtros e Busca */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6">
          
          {/* Categorias */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {data.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? "bg-secondary text-primary shadow-md" 
                  : "bg-background text-text-muted hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Resultados */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredSolutions.map(sol => (
              <div key={sol.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                {/* Imagem com Zoom no Hover */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <Image 
                    src={sol.image} 
                    alt={sol.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-secondary text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {sol.category}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    {sol.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-8 grow">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-text-main">
                        <span className="text-secondary">✔</span> {feat}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full">
                    Fale com um especialista
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted font-bold">Nenhuma solução encontrada para sua busca.</p>
          </div>
        )}
      </section>
    </main>
  );
}