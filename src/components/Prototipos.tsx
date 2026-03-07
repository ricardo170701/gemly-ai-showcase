import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, MessageSquareText, BarChart3, ArrowRight } from "lucide-react";
import { openEmail, emailTemplates } from "@/lib/email-templates";

const demos = [
  {
    icon: Package,
    title: "Control de acceso a oficinas",
    description: "App para gestionar entradas, permisos y registros de acceso en tiempo real."
  },
  {
    icon: MessageSquareText,
    title: "Asistente de reservas con IA",
    description: "Chatbot para restaurantes que gestiona reservas 24/7. Tus clientes reservan sin esperas."
  },
  {
    icon: BarChart3,
    title: "Dashboard de ventas en tiempo real",
    description: "Panel con productos más vendidos y márgenes. Toma decisiones basadas en datos, no en intuición."
  }
];

export const Prototipos = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras <span className="gradient-text">creaciones</span>{" "}
              <span className="text-muted-foreground text-3xl md:text-4xl">(para inspirarte)</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Antes de tener clientes, teníamos ideas. Estas son demostraciones de lo que sabemos hacer.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {demos.map((demo, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <demo.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{demo.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {demo.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-gold/30 text-gold hover:bg-gold/10 group-hover:border-gold/60"
                    onClick={() => openEmail(emailTemplates.general())}
                  >
                    Saber más <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
