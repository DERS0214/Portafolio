import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "LP-FINAL",
      subtitle: "Sistema de Gestión de Ejercicios",
      description: "Servicio REST desarrollado en Spring Boot para administrar módulos de ejercicios. Incluye cliente web prototipo con HTML-Bootstrap y documentación completa de la API con Swagger.",
      technologies: ["Java", "Spring Boot", "HTML", "Bootstrap", "Swagger", "REST API"],
      year: "2024",
      category: "Backend",
      features: [
        "API REST completa para gestión de ejercicios",
        "Documentación automática con Swagger",
        "Cliente web responsivo",
        "Arquitectura modular"
      ],
      githubUrl: "https://github.com/DERS0214",
      liveUrl: null
    },
    {
      title: "ProyectoPHP-AnalizadoresLSS",
      subtitle: "Analizadores Léxico y Sintáctico",
      description: "Implementación de analizadores léxico y sintáctico para un subconjunto de PHP, desplegados en un panel web Dockerizado. Proyecto enfocado en fundamentos de compiladores y CI/CD.",
      technologies: ["PHP", "Docker", "HTML", "CSS", "Compiladores", "CI/CD"],
      year: "2024",
      category: "DevOps",
      features: [
        "Analizador léxico personalizado",
        "Analizador sintáctico",
        "Panel web dockerizado",
        "Pipeline CI/CD local"
      ],
      githubUrl: "https://github.com/DERS0214",
      liveUrl: null
    },
    {
      title: "Proyecto-EstructurasDeDatos",
      subtitle: "Estructuras de Datos Avanzadas",
      description: "Implementación de estructuras de datos clave como heaps, árboles y listas. Incluye benchmarks de rendimiento y dashboard React con endpoints Spring Boot.",
      technologies: ["Java", "React", "Spring Boot", "Estructuras de Datos", "Algoritmos"],
      year: "2024",
      category: "Full-Stack",
      features: [
        "Implementación de heaps y árboles",
        "Benchmarks de rendimiento",
        "Dashboard interactivo en React",
        "API REST con Spring Boot"
      ],
      githubUrl: "https://github.com/DERS0214",
      liveUrl: null
    },
    {
      title: "ESTADISTICA-PROYECTO",
      subtitle: "Visualizaciones Interactivas con R",
      description: "Desarrollo de visualizaciones interactivas con Shiny y reportes automatizados en RMarkdown. Pipeline completo de datos desde análisis hasta presentación web.",
      technologies: ["R", "Shiny", "RMarkdown", "Estadística", "Data Visualization"],
      year: "2024",
      category: "Data Science",
      features: [
        "Visualizaciones interactivas con Shiny",
        "Reportes automatizados",
        "Pipeline de datos completo",
        "Análisis estadístico avanzado"
      ],
      githubUrl: "https://github.com/DERS0214",
      liveUrl: null
    },
    {
      title: "ED-Proyecto-2P",
      subtitle: "Juego de Trivia en JavaFX",
      description: "Desarrollo de un juego de trivia en JavaFX con persistencia en MySQL. Refactorización del patrón MVC para mejorar el desacoplamiento entre lógica y vista.",
      technologies: ["Java", "JavaFX", "MySQL", "MVC", "Game Development"],
      year: "2023",
      category: "Desktop",
      features: [
        "Interfaz gráfica en JavaFX",
        "Persistencia con MySQL",
        "Patrón MVC refactorizado",
        "Sistema de puntuaciones"
      ],
      githubUrl: "https://github.com/DERS0214",
      liveUrl: null
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Backend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "DevOps":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Data Science":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Desktop":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Proyectos Destacados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una selección de proyectos académicos que demuestran mis habilidades en desarrollo full-stack
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-hover border-border/50 overflow-hidden scale-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-fast">
                          {project.title}
                        </CardTitle>
                        <Badge className={getCategoryColor(project.category)}>
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.year}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary-dark"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Características principales:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-fast cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA for more projects */}
          <div className="text-center mt-12 fade-in">
            <p className="text-muted-foreground mb-6">
              ¿Quieres ver más proyectos y contribuciones?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <a href="https://github.com/DERS0214" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Ver GitHub Completo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;