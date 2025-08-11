import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <img src={logo} alt="Gemly Logo" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold gradient-text">Gemly</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Servicios
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a href="/automatizacion-ai" className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors">
                    <div className="font-medium">Automatización AI</div>
                    <div className="text-xs text-muted-foreground">Sistemas inteligentes</div>
                  </a>
                  <a href="/machine-learning" className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors">
                    <div className="font-medium">Machine Learning</div>
                    <div className="text-xs text-muted-foreground">Modelos personalizados</div>
                  </a>
                  <a href="/software-medida" className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors">
                    <div className="font-medium">Software a Medida</div>
                    <div className="text-xs text-muted-foreground">Desarrollo personalizado</div>
                  </a>
                  <a href="/analisis-datos" className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors">
                    <div className="font-medium">Análisis de Datos</div>
                    <div className="text-xs text-muted-foreground">Insights accionables</div>
                  </a>
                </div>
              </div>
            </div>
            <a href="/#proceso" className="text-muted-foreground hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="/#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-primary">
            Contactar
          </Button>
        </div>
      </div>
    </nav>
  );
};