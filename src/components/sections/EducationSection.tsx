import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      degree: "Ingeniería en Computación",
      institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
      period: "2022 - Presente",
      status: "7º Semestre",
      location: "Guayaquil, Ecuador",
      description: "Enfoque en desarrollo de software, algoritmos, estructuras de datos y metodologías ágiles. Experiencia práctica en proyectos de desarrollo web y análisis de datos.",
      highlights: [
        "Promedio destacado en materias de programación",
        "Liderazgo en proyectos colaborativos",
        "Experiencia en metodologías ágiles",
        "Desarrollo de aplicaciones web"
      ]
    },
    {
      degree: "Bachillerato Técnico en Computación",
      institution: "Academia Naval Almirante Ilingworth",
      period: "2016 - 2022",
      status: "Graduado",
      location: "Guayaquil, Ecuador",
      description: "Formación técnica especializada en computación con énfasis en programación, redes y sistemas. Base sólida en fundamentos de tecnología y desarrollo de software.",
      highlights: [
        "Especialización en computación",
        "Fundamentos de programación",
        "Conocimientos en redes y sistemas",
        "Formación técnica integral"
      ]
    }
  ];

  const certifications = [
    {
      name: "Data-Driven-Decisions Specialist",
      issuer: "Coding Bootcamps ESPOL + MINTEL",
      year: "2025",
      type: "Beca",
      description: "Beca completa en curso para especialización en análisis de datos. Completado: Excel avanzado. En progreso: SQL, Python para Analytics, Business Intelligence, Data Visualization y GenAI aplicada al ciclo analítico."
    },
    {
      name: "Participación en Road to Start Hack",
      issuer: "ESPOL x i3lab",
      year: "2024",
      type: "Hackathon",
      description: "El hackathon más emprendedor de Europa en Ecuador - Experiencia transformadora con oportunidad de resolver desafíos reales"
    },
    {
      name: "Cisco Cybersecurity Essentials",
      issuer: "Cisco",
      year: "2021",
      type: "Ciberseguridad",
      description: "Fundamentos de seguridad cibernética y protección de sistemas"
    },
    {
      name: "Seguridad Cibernética",
      issuer: "Cisco",
      year: "2021",
      type: "Ciberseguridad",
      description: "Conceptos avanzados de seguridad en redes y sistemas"
    },
    {
      name: "Microsoft Office Specialist: Word",
      issuer: "Microsoft",
      year: "2019",
      type: "Productividad",
      description: "Certificación en uso avanzado de Microsoft Word"
    },
    {
      name: "Microsoft Office Specialist: PowerPoint",
      issuer: "Microsoft",
      year: "2019",
      type: "Productividad",
      description: "Certificación en diseño de presentaciones profesionales"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Beca":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Hackathon":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Ciberseguridad":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Productividad":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Educación
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mi formación académica y certificaciones profesionales
            </p>
          </div>

          {/* Education timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8 fade-in">
              Formación Académica
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="card-hover border-border/50 slide-in-left overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <Badge className="bg-primary/10 text-primary">
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="space-y-2 lg:text-right">
                      <div className="flex items-center lg:justify-end gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center lg:justify-end gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Aspectos destacados:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Certificaciones y Becas
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="card-hover border-border/50 scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {cert.name}
                          </h4>
                          <p className="text-primary font-medium">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                        
                        <Badge className={`inline-flex ${getTypeColor(cert.type)}`}>
                          {cert.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages section */}
          <div className="mt-16 text-center fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Idiomas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🇪🇸</div>
                  <h4 className="text-lg font-semibold text-foreground">Español</h4>
                  <p className="text-muted-foreground">Nativo</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🇺🇸</div>
                  <h4 className="text-lg font-semibold text-foreground">Inglés</h4>
                  <p className="text-muted-foreground">Intermedio (B1)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;