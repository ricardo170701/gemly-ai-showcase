import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Ear, PenTool, Cpu, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Ear,
    title: "Escuchamos",
    description: "Nos sentamos contigo a entender tu negocio, tus dolores y tus sueños. Sin prisas."
  },
  {
    icon: PenTool,
    title: "Diseñamos",
    description: "Bocetamos la solución ideal en papel y código, pensando en quien la usará cada día."
  },
  {
    icon: Cpu,
    title: "Tallamos con IA",
    description: "Usamos inteligencia artificial para acelerar el desarrollo, pero el toque humano es nuestro."
  },
  {
    icon: PackageCheck,
    title: "Pulimos y entregamos",
    description: "Probamos cada detalle, te acompañamos en el lanzamiento y te ofrecemos soporte 24/7."
  }
];

export const Enfoque = () => {
  return (
    <section id="enfoque" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Así <span className="gradient-text-gold">tallamos</span> tu idea
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              No creemos en el software de talla única. Cada proyecto es una pieza única.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-2 text-center h-full">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-gold mb-2">0{index + 1}</span>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
