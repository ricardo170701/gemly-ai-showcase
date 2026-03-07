import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";
import { openEmail, emailTemplates } from "@/lib/email-templates";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Gemly Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold gradient-text">Gemly</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#enfoque" className="text-muted-foreground hover:text-foreground transition-colors">
              Enfoque
            </a>
            <a href="/#equipo" className="text-muted-foreground hover:text-foreground transition-colors">
              Equipo
            </a>
            <a href="/#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          <button 
            className="btn-gold !px-6 !py-2 !text-sm !rounded-lg"
            onClick={() => openEmail(emailTemplates.general())}
          >
            Contactar
          </button>
        </div>
      </div>
    </nav>
  );
};
