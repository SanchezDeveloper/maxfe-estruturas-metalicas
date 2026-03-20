"use client";

import Link from 'next/link';
import { Button } from '../ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

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
              <Link className="flex items-center gap-3" href=''>
                <MapPin />
                Valparaíso de Goias - GO
              </Link>
              <li className="flex items-center gap-3">
                <Phone/>
                (61) 99541-4749
              </li>
              <li className="flex items-center gap-3">
                <Mail />
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
            <Button variant="secondary" className="w-full shadow-lg gap-2" href='https://wa.me/5561995414749?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20os%20servi%C3%A7os%20da%20MaxF%C3%A9%20Estruturas%20Met%C3%A1licas'>
              WHATSAPP TÉCNICO <WhatsAppIcon/>
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