import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Layers, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

const SoftwareMedida = () => {
  const features = [
    "Desarrollo 100% personalizado",
    "Arquitectura escalable y robusta",
    "Integración con sistemas existentes",
    "Metodologías ágiles de desarrollo",
    "Mantenimiento y soporte continuo",
    "Documentación completa del proyecto"
  ];

  const technologies = [
    {
      title: "Aplicaciones Web",
      description: "Desarrollo de aplicaciones web modernas y responsivas con las últimas tecnologías.",
      icon: Code
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
      icon: Smartphone
    },
    {
      title: "Sistemas Enterprise",
      description: "Soluciones empresariales complejas que integran múltiples sistemas y procesos.",
      icon: Layers
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Software a Medida</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Software personalizado</span> que se adapta a tu negocio
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Soluciones de software completamente personalizadas que se integran perfectamente 
                con tu infraestructura existente y potencian el crecimiento de tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary">
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Portafolio
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                ¿Por qué elegir <span className="gradient-text">software a medida</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Desarrollamos soluciones únicas que se ajustan exactamente a tus necesidades específicas
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <div className="flex items-center gap-3 p-4 rounded-lg glass-card hover:shadow-elevated transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Nuestras <span className="gradient-text">especialidades</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Desarrollamos todo tipo de soluciones software adaptadas a tu industria
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <tech.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-3">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Proceso de <span className="gradient-text">desarrollo</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metodología ágil y transparente para garantizar resultados excepcionales
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Análisis", desc: "Definimos requisitos y objetivos" },
              { step: "02", title: "Diseño", desc: "Creamos la arquitectura técnica" },
              { step: "03", title: "Desarrollo", desc: "Programamos con metodologías ágiles" },
              { step: "04", title: "Testing", desc: "Probamos y validamos la calidad" },
              { step: "05", title: "Despliegue", desc: "Implementamos y damos soporte" }
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Stack <span className="gradient-text">tecnológico</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Utilizamos las tecnologías más modernas y confiables del mercado
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB",
              "Docker", "AWS", "GraphQL", "Next.js", "React Native", "Flutter"
            ].map((tech, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <div className="text-center p-4 glass-card hover:shadow-elevated transition-all duration-300">
                  <span className="font-medium text-foreground">{tech}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Contáctanos para una consulta gratuita y descubre cómo podemos 
                ayudarte a materializar tu visión
              </p>
              <Button size="lg" className="bg-gradient-primary">
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareMedida;