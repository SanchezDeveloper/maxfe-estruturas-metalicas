import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { Testimonials } from "@/components/home/Testimonials";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <AdvantagesSection />
      <Testimonials />
    </main>
  );
}
