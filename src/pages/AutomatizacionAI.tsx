import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Cog, ArrowRight, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { openEmail, emailTemplates } from "@/lib/email-templates";

const AutomatizacionAI = () => {

  const features = [
    "Automatización de procesos complejos",
    "Reducción de costos operativos hasta 60%",
    "Integración con sistemas existentes",
    "Monitoreo y optimización continua",
    "Escalabilidad automática",
    "Soporte técnico especializado"
  ];

  const useCases = [
    {
      title: "Procesamiento de Documentos",
      description: "Automatización de extracción y procesamiento de datos de documentos con IA.",
      icon: Bot
    },
    {
      title: "Atención al Cliente",
      description: "Chatbots inteligentes que resuelven consultas 24/7 de manera natural.",
      icon: Zap
    },
    {
      title: "Gestión de Inventarios",
      description: "Sistemas que predicen demanda y optimizan stock automáticamente.",
      icon: Cog
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Automatización Inteligente</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Automatiza tu negocio con <span className="gradient-text">Inteligencia Artificial</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Desarrollamos sistemas que automatizan procesos complejos utilizando IA, 
                reduciendo costos operativos y mejorando la eficiencia de tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary"
                  onClick={() => openEmail(emailTemplates.automatizacionAI())}
                >
                  Solicitar Consulta 
                  <ArrowRight className="w-4 h-4 ml-2" />
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
                ¿Por qué elegir nuestra <span className="gradient-text">automatización IA</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nuestras soluciones están diseñadas para transformar la manera en que tu empresa opera
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Casos de uso <span className="gradient-text">principales</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo la automatización IA puede transformar diferentes áreas de tu negocio
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <Card className="glass-card hover:shadow-elevated transition-all duration-500 group hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <useCase.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-3">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
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
                ¿Listo para automatizar tu negocio?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Contacta con nuestros expertos y descubre cómo la automatización IA 
                puede revolucionar tu empresa
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary"
                onClick={() => openEmail(emailTemplates.automatizacionAI())}
              >
                Comenzar Ahora
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

export default AutomatizacionAI;