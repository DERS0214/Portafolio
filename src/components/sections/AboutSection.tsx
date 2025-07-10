import { Code, Rocket, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experiencia en desarrollo completo desde interfaces hasta APIs"
    },
    {
      icon: Rocket,
      title: "Proyectos End-to-End",
      description: "Liderazgo en proyectos académicos integrando frontend, backend y bases de datos"
    },
    {
      icon: Users,
      title: "Metodología Ágil",
      description: "Trabajo colaborativo bajo metodologías ágiles en equipos de desarrollo"
    },
    {
      icon: Zap,
      title: "Aprendizaje Continuo",
      description: "Constante actualización en nuevas tecnologías y mejores prácticas"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estudiante apasionado por la tecnología con enfoque en desarrollo full-stack
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 slide-in-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Mi Perfil Profesional
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soy estudiante de 6º semestre de <span className="text-primary font-semibold">Ingeniería en Computación</span> en 
                  la ESPOL, con un enfoque especializado en desarrollo full-stack. Mi experiencia se centra en crear 
                  interfaces dinámicas y responsivas con <span className="text-primary font-semibold">React + Tailwind CSS</span> y 
                  desarrollar APIs robustas y escalables con <span className="text-primary font-semibold">Java Spring Boot</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  He liderado proyectos académicos end-to-end, integrando frontend, backend y bases de datos bajo 
                  metodología ágil. Busco aportar mi versatilidad técnica y pasión por la innovación en un equipo 
                  de desarrollo donde pueda contribuir desde el diseño hasta la implementación.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6º</div>
                  <div className="text-sm text-muted-foreground">Semestre</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Tecnologías</div>
                </div>
              </div>
            </div>

            {/* Right side - Highlights cards */}
            <div className="grid gap-6 scale-in">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-hover border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <highlight.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Location and contact info */}
          <div className="mt-16 text-center fade-in">
            <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-full shadow-custom-md">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-muted-foreground">
                📍 Guayaquil, Ecuador • Disponible para oportunidades
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;