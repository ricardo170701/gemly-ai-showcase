import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, TrendingUp, PieChart, ArrowRight, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { openEmail, emailTemplates } from "@/lib/email-templates";

const AnalisisDatos = () => {
  const features = [
    "Análisis predictivo avanzado",
    "Visualizaciones interactivas",
    "Dashboards en tiempo real",
    "Integración de múltiples fuentes",
    "Algoritmos de IA personalizados",
    "Reportes automatizados"
  ];

  const services = [
    {
      title: "Business Intelligence",
      description: "Dashboards y reportes que transforman datos complejos en insights accionables.",
      icon: PieChart
    },
    {
      title: "Análisis Predictivo",
      description: "Modelos que predicen tendencias futuras basados en patrones históricos.",
      icon: TrendingUp
    },
    {
      title: "Data Mining",
      description: "Extracción de patrones ocultos y conocimientos valiosos de grandes datasets.",
      icon: Database
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
                <Database className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Análisis de Datos</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transforma tus datos en <span className="gradient-text">insights poderosos</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transformamos tus datos en insights accionables mediante algoritmos de IA 
                y análisis predictivo que impulsan la toma de decisiones estratégicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary"
                  onClick={() => openEmail(emailTemplates.analisisDatos())}
                >
                  Solicitar Análisis 
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
                Capacidades de <span className="gradient-text">análisis avanzado</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Utilizamos las técnicas más avanzadas para extraer valor de tus datos
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Nuestros <span className="gradient-text">servicios</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluciones completas de análisis de datos para todas las necesidades empresariales
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Proceso de <span className="gradient-text">análisis</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metodología estructurada para obtener máximo valor de tus datos
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Recolección", desc: "Integramos todas tus fuentes de datos" },
              { step: "02", title: "Limpieza", desc: "Preparamos y validamos la información" },
              { step: "03", title: "Análisis", desc: "Aplicamos algoritmos especializados" },
              { step: "04", title: "Visualización", desc: "Creamos dashboards interactivos" }
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Beneficios del <span className="gradient-text">análisis de datos</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "85%", desc: "Mejora en toma de decisiones" },
              { metric: "60%", desc: "Reducción en costos operativos" },
              { metric: "3x", desc: "Incremento en eficiencia" },
              { metric: "24/7", desc: "Monitoreo en tiempo real" }
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up">
                <div className="text-center p-6 glass-card hover:shadow-elevated transition-all duration-300">
                  <div className="text-4xl font-bold gradient-text mb-2">{item.metric}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
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
                ¿Listo para potenciar tus datos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comienza tu transformación digital con análisis de datos inteligente 
                que impulse el crecimiento de tu negocio
              </p>
                                            <Button 
                 size="lg" 
                 className="bg-gradient-primary"
                 onClick={() => openEmail(emailTemplates.analisisDatos())}
               >
                 Solicitar Análisis 
               </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalisisDatos;