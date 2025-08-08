import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Análisis y Descubrimiento",
    description: "Estudiamos tu negocio en profundidad para entender tus necesidades específicas y identificar oportunidades de mejora con IA."
  },
  {
    icon: Lightbulb,
    step: "02", 
    title: "Diseño de Solución",
    description: "Creamos un plan detallado de la solución, seleccionando las tecnologías de IA más adecuadas para tu proyecto."
  },
  {
    icon: Code2,
    step: "03",
    title: "Desarrollo e Integración",
    description: "Desarrollamos tu solución utilizando las mejores prácticas y la integramos seamlessly con tus sistemas existentes."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Despliegue y Optimización",
    description: "Lanzamos tu solución y la monitoreamos continuamente para optimizar su rendimiento y efectividad."
  }
];

export const Process = () => {
  return (
    <section id="proceso" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro <span className="gradient-text">Proceso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Seguimos una metodología probada que garantiza el éxito de cada proyecto, 
              desde la conceptualización hasta la implementación final.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className="text-4xl font-bold gradient-text">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
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