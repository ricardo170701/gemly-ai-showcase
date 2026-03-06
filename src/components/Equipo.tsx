import { ScrollAnimation } from "./ScrollAnimation";

const team = [
  {
    name: "Ricardo",
    initials: "R",
    role: "Co-fundador & Desarrollo",
    experience: "Ha desarrollado proyectos para el sector fintech y comercio electrónico de manera independiente."
  },
  {
    name: "Ángel",
    initials: "Á",
    role: "Co-fundador & IA",
    experience: "Ha desarrollado proyectos de automatización e inteligencia artificial de manera independiente."
  },
  {
    name: "Daniel",
    initials: "D",
    role: "Co-fundador & Backend",
    experience: "Ha desarrollado proyectos para el sector salud y logística de manera independiente."
  },
  {
    name: "David",
    initials: "Da",
    role: "Co-fundador & Frontend",
    experience: "Ha desarrollado proyectos para retail y educación de manera independiente."
  },
  {
    name: "Vicente",
    initials: "V",
    role: "Co-fundador & Diseño",
    experience: "Ha desarrollado proyectos de diseño UX/UI para startups de manera independiente."
  }
];

export const Equipo = () => {
  return (
    <section id="equipo" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              El <span className="gradient-text-gold">equipo</span>
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
