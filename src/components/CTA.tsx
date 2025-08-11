import { ScrollAnimation } from "./ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <Card className="glass-card relative overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-hero opacity-10" />
            
            <CardContent className="relative z-10 p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para <span className="gradient-text">Transformar</span> tu Negocio?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Descubre cómo nuestras soluciones de IA pueden revolutionar tu empresa. 
                Solicita una demostración gratuita y comienza tu viaje hacia la innovación digital.
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:gemlytech@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">gemlytech@gmail.com</a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+58 414 7905070</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};