import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Enfoque } from "@/components/Enfoque";
import { PorQueGemly } from "@/components/PorQueGemly";
import { Equipo } from "@/components/Equipo";
import { Prototipos } from "@/components/Prototipos";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Enfoque />
      <PorQueGemly />
      <Equipo />
      <Prototipos />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
