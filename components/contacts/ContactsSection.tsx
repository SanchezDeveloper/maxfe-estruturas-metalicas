"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'; // O ícone que criamos
import { MapPin, Phone, ShieldCheck, HardHat, CheckCircle2 } from 'lucide-react';

export default function ContactsSection() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone & WhatsApp",
      detail: "(61) 99541-4749",
      description: "Segunda a Sexta, das 08h às 18h",
      link: "https://wa.me/5561995414749?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20os%20servi%C3%A7os%20da%20MaxF%C3%A9%20Estruturas%20Met%C3%A1licas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Sede Administrativa",
      detail: "Valparaíso de Goiás - GO",
      description: "Atendimento em todo o Centro-Oeste",
      link: "#"
    }
  ];

  const faqs = [
    { q: "Qual o prazo médio de fabricação?", a: "Depende da complexidade, mas galpões padrão costumam ser entregues em 30 a 45 dias." },
    { q: "Vocês realizam apenas a fabricação?", a: "Não, entregamos a solução completa: projeto, fabricação e montagem no local." },
    { q: "As estruturas possuem garantia?", a: "Sim, todas as nossas estruturas metálicas possuem garantia estrutural de 5 anos." }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero de Contato */}
      <section className="bg-primary pt-32 pb-20 text-white flex justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Fale com os <span className="text-secondary">Espacialistas</span>
          </h1>
          <p className="text-background/70 max-w-2xl mx-auto font-medium">
            Tem um projeto em mente? Nossa equipe técnica está pronta para transformar sua ideia em uma estrutura sólida e eficiente.
          </p>
        </div>
      </section>

      {/* Cards de Informação */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className=" gap-8 -mt-32 flex flex-wrap justify-center" >
          {contactInfo.map((info, i) => (
            <a key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300" href={info.link} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors">
                {info.icon}
              </div>
              <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-2">{info.title}</h3>
              <p className="text-lg font-bold text-text-main mb-1">{info.detail}</p>
              <p className="text-sm text-text-muted">{info.description}</p>
            </a>
          ))}
        </div>

        {/* Seção Principal: Call to Action & Diferenciais */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-primary uppercase mb-6 tracking-tight">
              Pronto para o próximo passo?
            </h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              Não utilizamos formulários lentos. Acreditamos na agilidade da engenharia moderna. Clique abaixo para iniciar um atendimento técnico direto via WhatsApp.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-text-main font-bold">
                <CheckCircle2 className="text-secondary w-5 h-5" /> Orçamento detalhado sem custo
              </div>
              <div className="flex items-center gap-3 text-text-main font-bold">
                <CheckCircle2 className="text-secondary w-5 h-5" /> Análise de viabilidade técnica
              </div>
              <div className="flex items-center gap-3 text-text-main font-bold">
                <CheckCircle2 className="text-secondary w-5 h-5" /> Atendimento direto com especialista
              </div>
            </div>

            <Button variant="secondary" className="w-full md:w-auto px-10 py-5 text-lg gap-3">
              <WhatsAppIcon className="w-6 h-6" />
              Conversar Agora no WhatsApp
            </Button>
          </div>

          {/* Ilustração ou Card de Credibilidade */}
          <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <HardHat className="w-16 h-16 text-secondary mb-6" />
                <h3 className="text-2xl font-black uppercase mb-4">Compromisso com Normas</h3>
                <p className="text-background/80 mb-6 text-sm leading-relaxed">
                  Todas as nossas soluções seguem rigorosamente as normas <strong>NBR 8800</strong> e <strong>NBR 6123</strong>, garantindo segurança total para sua obra industrial ou comercial.
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <ShieldCheck className="text-secondary w-10 h-10" />
                  <div>
                    <p className="font-black uppercase text-xs">Selo de Qualidade</p>
                    <p className="text-[10px] text-background/50">ESTRUTURAS METÁLICAS CERTIFICADAS</p>
                  </div>
                </div>
             </div>
             {/* Efeito decorativo de fundo */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* FAQ Secundário para densidade de conteúdo */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary text-center uppercase mb-12 tracking-widest">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-background rounded-xl border border-gray-100">
                <h4 className="font-black text-primary uppercase text-sm mb-2">{faq.q}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}