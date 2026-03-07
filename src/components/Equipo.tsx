import { ScrollAnimation } from "./ScrollAnimation";

const team = [
  {
    name: "Ricardo",
    initials: "R",
    role: "El Maestro de Taller",
    experience: "Coordina los proyectos desde el primer boceto hasta la entrega final. Se asegura de que cada joya tecnológica cumpla los sueños del cliente, los plazos y la calidad."
  },
  {
    name: "Ángel",
    initials: "Á",
    role: "El Orfebre de Ideas",
    experience: "Mira tu idea en bruto y visualiza la joya en la que puede convertirse. Diseña la arquitectura y entreteje inteligencia artificial en cada pieza."
  },
  {
    name: "Daniel",
    initials: "D",
    role: "El Tallador de Interfaces",
    experience: "Con mano firme y ojo estético, talla cada pantalla, botón y animación para crear experiencias que no solo funcionan, sino que se disfrutan al tacto."
  },
  {
    name: "Vicente",
    initials: "V",
    role: "El Forjador de Estructuras",
    experience: "Forja la estructura interna que sostiene la joya. Su código es el metal invisible que hace que todo funcione sin grietas, sin importar cuánto peso soporte."
  },
  {
    name: "David",
    initials: "Da",
    role: "El Guardián del Brillo",
    experience: "Cuida cada pieza una vez entregada: vigila que esté siempre disponible, que los datos estén seguros y que el brillo 24/7 nunca se apague."
  }
];

export const Equipo = () => {
  return (
    <section id="equipo" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              El <span className="gradient-text">equipo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cinco profesionales con experiencia individual que ahora unen fuerzas para crear algo extraordinario.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <ScrollAnimation key={index} animation="fade-up">
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                  <span className="text-2xl font-bold text-primary-foreground">{member.initials}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-gold mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.experience}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
