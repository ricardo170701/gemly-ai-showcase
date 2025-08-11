import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Gemly</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transformamos empresas a través del desarrollo de software personalizado 
              impulsado por inteligencia artificial.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Automatización IA</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Software a Medida</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Análisis de Datos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:gemlytech@gmail.com" className="hover:text-foreground transition-colors">gemlytech@gmail.com</a></li>
              <li>+58 414 7905070</li>
              <li>+58 412 1878514</li>
              <li>Anzoategui, Venezuela</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 Gemly. Todos los derechos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
};