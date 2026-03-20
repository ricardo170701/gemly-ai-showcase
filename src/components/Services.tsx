import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code, Zap, Brain, Database, Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { openEmail, emailTemplates } from "@/lib/email-templates";

const services = [
  {
    icon: Bot,
    title: "Automatización Inteligente",
    description: "Sistemas que automatizan procesos complejos con IA, reduciendo costos y liberando a tu equipo para lo que importa.",
    emailTemplate: () => emailTemplates.automatizacionAI(),
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Modelos que aprenden de tus datos y se adaptan a tu negocio. Predicciones precisas, decisiones inteligentes.",
    emailTemplate: () => emailTemplates.machineLearning(),
  },
  {
    icon: Code,
    title: "Software a Medida",
    description: "Aplicaciones moldeadas exclusivamente para ti. Sin plantillas genéricas, solo código que encaja como un guante.",
    emailTemplate: () => emailTemplates.softwareMedida(),
  },
  {
    icon: Database,
    title: "Análisis de Datos",
    description: "Transformamos tus datos en decisiones. Dashboards claros, insights accionables, resultados medibles.",
    emailTemplate: () => emailTemplates.analisisDatos(),
  },
  {
    icon: Zap,
    title: "Optimización de Procesos",
    description: "Identificamos cuellos de botella y los eliminamos con automatización inteligente. Más eficiencia, menos fricción.",
    emailTemplate: () => emailTemplates.saberMas("Optimización de Procesos"),
  },
  {
    icon: Shield,
    title: "Seguridad & Compliance",
    description: "Cada solución que entregamos cumple con las mejores prácticas de seguridad. Tu tranquilidad es nuestra prioridad.",
    emailTemplate: () => emailTemplates.saberMas("Seguridad & Compliance"),
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lo que <span className="gradient-text">sabemos hacer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada servicio es una herramienta en nuestro taller. Elegimos la correcta según lo que tu negocio necesita.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-2 h-full border-border/30 hover:border-gold/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => openEmail(service.emailTemplate())}
                    className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors mt-auto font-medium"
                  >
                    Saber más <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
