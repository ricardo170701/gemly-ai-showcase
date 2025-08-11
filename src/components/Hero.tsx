import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "./ScrollAnimation";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-secondary rounded-full opacity-15 float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-hero rounded-full opacity-25 float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <ScrollAnimation animation="fade-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary mr-3" />
            <span className="text-primary font-medium">Innovación impulsada por IA</span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Gemly:</span><br />
            Software a medida con el poder de la IA
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos soluciones de software únicas utilizando las últimas tecnologías de 
            inteligencia artificial para transformar tu negocio y maximizar su potencial.
          </p>
        </ScrollAnimation>

        

        {/* Stats */}
        <ScrollAnimation animation="fade-up">
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción del Cliente</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte Técnico</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};