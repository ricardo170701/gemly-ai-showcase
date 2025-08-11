import { Button } from "@/components/ui/button";
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
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="text-muted-foreground hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          
        </div>
      </div>
    </nav>
  );
};