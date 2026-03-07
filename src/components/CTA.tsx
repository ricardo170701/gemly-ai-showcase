import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import { openEmail, emailTemplates } from "@/lib/email-templates";

export const CTA = () => {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <Card className="glass-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-5" />
            
            <CardContent className="relative z-10 p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para <span className="gradient-text">tallar</span> tu idea?
              </h2>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Cuéntanos qué necesitas. En menos de 48 horas te responderemos con una propuesta clara.
              </p>

              <div className="mb-10">
                <button 
                  className="btn-gold"
                  onClick={() => openEmail(emailTemplates.general())}
                >
                  Solicita tu auditoría digital gratuita
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <a href="mailto:gemlytech@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">gemlytech@gmail.com</a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-muted-foreground">Lechería, Edo. Anzoátegui</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="text-muted-foreground">Soporte 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};
