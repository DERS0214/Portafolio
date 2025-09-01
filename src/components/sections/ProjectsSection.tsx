import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Curriculum Portfolio",
      subtitle: "Aplicación Web de Portafolio Personal (SPA)",
      description: "Portafolio profesional desarrollado desde cero con React y TypeScript. Implementé un diseño moderno y responsivo con animaciones fluidas, sistema de temas oscuro/claro, y navegación suave entre secciones. El proyecto demuestra mis habilidades en desarrollo frontend moderno y diseño de UX.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
      year: "2025",
      category: "Frontend",
      features: [
        "Diseño Responsive y moderno",
        "Animaciones Fluidas y Accesibilidad",
        "Soporte para Tema Oscuro/Claro",
        "Optimización SEO y Navegación Suave",
        "Estructura Modular (Secciones: Hero, About, Skills, Projects, Education, Contact)"
      ],
      githubUrl: "https://github.com/DERS0214/curriculum",
      liveUrl: null
    },
    {
      title: "GuayacoCar",
      subtitle: "Marketplace de Vehículos Multiplataforma",
      description: "Aplicación full-stack completa desarrollada en equipo. Contribuí al backend con Spring Boot implementando APIs RESTful para gestión de vehículos y autenticación de usuarios. El sistema integra Flutter para el frontend multiplataforma y Firebase para servicios en la nube, demostrando arquitectura escalable.",
      technologies: ["Flutter", "Dart", "Spring Boot", "Java 21", "Firebase (Firestore, Storage, Auth)", "REST API", "Material Design", "Maven"],
      year: "2024",
      category: "Full-Stack",
      features: [
        "Navegación y filtrado de vehículos",
        "Gestión de anuncios y subida de imágenes",
        "Autenticación y gestión de sesiones",
        "Búsqueda y ordenamiento avanzados",
        "Compatibilidad Multiplataforma (Web, Windows, Android, Linux)"
      ],
      githubUrl: "https://github.com/kathyforero/LP-FINAL",
      liveUrl: null
    },
    {
      title: "Analizador de Lenguaje PHP",
      subtitle: "Analizadores Léxico, Sintáctico y Semántico",
      description: "Compilador completo desarrollado en Python que implementa las tres fases del análisis de lenguajes. Creé una interfaz gráfica intuitiva con tkinter que permite analizar código PHP en tiempo real, mostrando errores con codificación de colores y tablas de símbolos dinámicas.",
      technologies: ["Python 3.x", "PLY (Python Lex-Yacc)", "tkinter"],
      year: "2024",
      category: "DevOps",
      features: [
        "Análisis Completo en Tres Fases (Léxico, Sintáctico, Semántico)",
        "Interfaz Gráfica Intuitiva con editor de código y visualización de resultados",
        "Sistema de Gestión de Errores con mensajes descriptivos y codificación de colores",
        "Tablas de Símbolos en tiempo real para variables y funciones"
      ],
      githubUrl: "https://github.com/kathyforero/ProyectoPHP-AnalizadoresLSS",
      liveUrl: null
    },
    {
      title: "GuayacoCar (JavaFX)",
      subtitle: "Marketplace de Automóviles con Estructuras de Datos",
      description: "Aplicación desktop desarrollada completamente en Java con JavaFX. Implementé estructuras de datos personalizadas (lista doblemente enlazada circular y ArrayList dinámico) para optimizar el rendimiento de búsquedas y gestión de vehículos. El sistema incluye persistencia de datos mediante serialización Java.",
      technologies: ["Java", "JavaFX", "Maven", "Serialización Java", "Lista Doblemente Enlazada Circular", "ArrayList Dinámico"],
      year: "2024",
      category: "Desktop",
      features: [
        "Gestión de Usuarios (login, registro, perfiles)",
        "Gestión de Vehículos (catálogo, marcas, creación/edición)",
        "Persistencia de datos mediante archivos .dat",
        "Implementación de estructuras de datos personalizadas"
      ],
      githubUrl: "https://github.com/kathyforero/Proyecto-EstructurasDeDatos",
      liveUrl: null
    },
    {
      title: "Guess-What Quiz Game",
      subtitle: "Juego de Preguntas con Árboles Binarios en JavaFX",
      description: "Juego educativo desarrollado en JavaFX que utiliza árboles binarios para implementar un sistema de adivinanzas inteligente. Diseñé la lógica del juego para que aprenda de las respuestas del usuario, expandiendo dinámicamente el árbol de decisiones. Incluye múltiples temas y persistencia de datos.",
      technologies: ["JavaFX 13", "Java 11", "Maven", "FXML", "Serialización Java", "File I/O"],
      year: "2023",
      category: "Desktop",
      features: [
        "Interfaz gráfica intuitiva con JavaFX y FXML",
        "Múltiples temas: Animales, Tecnología, Personas Famosas",
        "Lógica de árbol binario para el juego de adivinanzas",
        "Gestión de temas y persistencia de datos (serialización Java)"
      ],
      githubUrl: "https://github.com/DERS0214/ED-Proyecto-2P",
      liveUrl: null
    }    
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Data Science":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Frontend":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Full-Stack":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Backend":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "DevOps":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
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
              Una selección de proyectos académicos que demuestran mis habilidades en desarrollo web, backend y análisis de datos
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