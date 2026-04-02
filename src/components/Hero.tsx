import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "./ScrollAnimation";
import { Gem } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { openEmail, emailTemplates } from "@/lib/email-templates";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-15 float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-gold rounded-full opacity-10 float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-primary rounded-full opacity-20 float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <ScrollAnimation animation="fade-up">
          <div className="flex items-center justify-center mb-6">
            <Gem className="w-6 h-6 text-gold mr-3" />
            <span className="text-gold font-medium">Artesanos digitales</span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transformamos ideas en bruto en{" "}
            <span className="gradient-text">joyas tecnológicas.</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollo de software a medida potenciado por inteligencia artificial. 
            Ayudamos a negocios en Lechería y Barcelona a automatizar procesos, 
            vender más y operar 24/7 con aplicaciones hechas exclusivamente para ellos.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="btn-gold"
              onClick={() => openEmail(emailTemplates.general())}
            >
              Solicita tu auditoría digital gratuita
            </button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-foreground px-8 py-4 text-lg h-auto"
              onClick={() => document.getElementById('enfoque')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce nuestro enfoque
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
