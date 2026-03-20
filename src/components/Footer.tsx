import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const PhoneLink = ({ number }: { number: string }) => {
  const digits = number.replace(/\s/g, '');
  const handleClick = (e: React.MouseEvent) => {
    if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      e.preventDefault();
      navigator.clipboard.writeText(number).then(() => {
        toast.success("Número copiado al portapapeles");
      });
    }
  };
  return (
    <a href={`tel:${digits}`} onClick={handleClick} className="hover:text-foreground transition-colors cursor-pointer">
      {number}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Gemly</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Artesanos digitales que transforman ideas en bruto en joyas tecnológicas. 
              Software a medida potenciado por inteligencia artificial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/automatizacion-ai" className="hover:text-foreground transition-colors">Automatización IA</a></li>
              <li><a href="/machine-learning" className="hover:text-foreground transition-colors">Machine Learning</a></li>
              <li><a href="/software-medida" className="hover:text-foreground transition-colors">Software a Medida</a></li>
              <li><a href="/analisis-datos" className="hover:text-foreground transition-colors">Análisis de Datos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:gemlytech@gmail.com" className="hover:text-foreground transition-colors">gemlytech@gmail.com</a></li>
              <li><PhoneLink number="+58 414 7905070" /></li>
              <li><PhoneLink number="+58 412 1878514" /></li>
              <li>Lechería, Edo. Anzoátegui</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Gemly. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
