import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Cpu, MapPin, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Experiencia real",
    description: "Hemos desarrollado más de 10 proyectos de manera independiente. Ahora unimos fuerzas."
  },
  {
    icon: Cpu,
    title: "Tecnología de vanguardia",
    description: "Integramos inteligencia artificial en cada etapa."
  },
  {
    icon: MapPin,
    title: "Cercanía local",
    description: "Estamos en Lechería. Hablamos tu idioma y conocemos tu mercado."
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Cuando tu negocio no duerme, nosotros tampoco."
  }
];

export const PorQueGemly = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué confiar en un taller que{" "}
              <span className="gradient-text">recién comienza</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Porque no empezamos de cero. Detrás de Gemly hay cinco profesionales 
              que suman más de una década de experiencia individual.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-1">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
