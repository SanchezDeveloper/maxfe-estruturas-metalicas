"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '../ui/Button';
import data from '../../app/data/content.json';

export const Hero = () => {
  // Configuração do Embla Carousel com Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  return (
    /* bg-primary utiliza #003366 */
    <section className="relative h-[90vh] w-full bg-primary overflow-hidden">
      
      {/* 1. Viewport do Embla */}
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        
        {/* 2. Container do Embla */}
        <div className="flex h-full">
          
          {data.heroSlides.map((slide) => (
            /* 3. Slide Individual */
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              
              {/* Imagem de Fundo com Overlay para contraste */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Overlay escuro para garantir leitura do texto branco */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>

              {/* Conteúdo Centralizado */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center px-4 max-w-5xl">
                  {/* Título Principal em Branco */}
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  
                  {/* Subtítulo em cinza claro para suavizar a leitura */}
                  <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
                    {slide.subtitle}
                  </p>
                  
                  {/* CTAs utilizando o componente Button já alinhado ao tema */}
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button variant="primary">
                      Solicitar Orçamento
                    </Button>
                    <Button variant="secondary">
                      Nossas Soluções
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};