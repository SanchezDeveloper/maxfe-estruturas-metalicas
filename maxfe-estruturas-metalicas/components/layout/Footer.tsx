"use client";

import Link from 'next/link';
import { Button } from '../ui/Button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // bg-primary utiliza o seu azul #003366
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Branding */}
          <div className="col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              Max<span className="text-secondary">Fe</span>
            </Link>
            <p className="mt-6 text-background/70 text-sm leading-relaxed font-medium">
              Especialistas em engenharia de estruturas metálicas. Unimos tecnologia e precisão para transformar o seu projeto em realidade.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white text-lg font-black mb-8 border-l-4 border-secondary pl-4 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-4 text-background/80 font-bold text-sm">
              <li><Link href="/" className="hover:text-secondary transition-colors duration-300">Início</Link></li>
              <li><Link href="/solucoes" className="hover:text-secondary transition-colors duration-300">Soluções</Link></li>
              <li><Link href="/contatos" className="hover:text-secondary transition-colors duration-300">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white text-lg font-black mb-8 border-l-4 border-secondary pl-4 uppercase tracking-widest">
              Contato
            </h4>
            <ul className="space-y-5 text-background/80 text-sm font-bold">
              <li className="flex items-center gap-3">
                <span className="text-secondary text-xl">📍</span>
                Brasília - DF
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary text-xl">📞</span>
                (61) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary text-xl">✉️</span>
                contato@maxfe.com.br
              </li>
            </ul>
          </div>

          {/* Coluna 4: CTA */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-white text-lg font-black mb-4 tracking-tight">Pronto para construir?</h4>
            <p className="text-background/70 text-xs mb-6 font-medium">
              Solicite um orçamento técnico sem compromisso com nossa equipe de engenharia.
            </p>
            {/* O Button variant="secondary" já aplica bg-secondary e text-primary internamente */}
            <Button variant="secondary" className="w-full shadow-lg">
              WHATSAPP TÉCNICO
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-background/40 text-[10px] font-bold uppercase tracking-widest">
          <p>© {currentYear} MaxFe Estruturas Metálicas. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-secondary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-secondary transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};