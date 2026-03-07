import { ScrollAnimation } from "./ScrollAnimation";

const team = [
  {
    name: "Ricardo",
    initials: "R",
    role: "Líder de Proyecto",
    experience: "Gestión y planificación de productos digitales para startups y empresas locales."
  },
  {
    name: "Ángel",
    initials: "Á",
    role: "Líder de Desarrollo",
    experience: "Arquitectura de software e integración de inteligencia artificial en soluciones empresariales."
  },
  {
    name: "Daniel",
    initials: "D",
    role: "Frontend Developer",
    experience: "Interfaces modernas y experiencias de usuario para aplicaciones web y móviles."
  },
  {
    name: "Vicente",
    initials: "V",
    role: "Backend Developer",
    experience: "APIs robustas, bases de datos y lógica de negocio para sistemas escalables."
  },
  {
    name: "David",
    initials: "Da",
    role: "DevOps",
    experience: "Infraestructura cloud, despliegues automatizados y monitoreo de sistemas en producción."
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
