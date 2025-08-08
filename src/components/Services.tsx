import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code, Zap, Brain, Database, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automatización Inteligente",
    description: "Desarrollamos sistemas que automatizan procesos complejos utilizando IA, reduciendo costos operativos y mejorando la eficiencia."
  },
  {
    icon: Brain,
    title: "Machine Learning Personalizado",
    description: "Creamos modelos de ML específicos para tu negocio que aprenden y se adaptan a tus necesidades particulares."
  },
  {
    icon: Code,
    title: "Desarrollo de Software a Medida",
    description: "Soluciones de software completamente personalizadas que se integran perfectamente con tu infraestructura existente."
  },
  {
    icon: Database,
    title: "Análisis de Datos Avanzado",
    description: "Transformamos tus datos en insights accionables mediante algoritmos de IA y análisis predictivo."
  },
  {
    icon: Zap,
    title: "Optimización de Procesos",
    description: "Identificamos y optimizamos cuellos de botella en tus operaciones usando técnicas de IA y automatización."
  },
  {
    icon: Shield,
    title: "Seguridad y Compliance",
    description: "Implementamos medidas de seguridad robustas y aseguramos el cumplimiento de normativas en todas nuestras soluciones."
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ofrecemos una gama completa de servicios de desarrollo de software impulsados por IA, 
              diseñados para transformar y potenciar tu negocio en la era digital.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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