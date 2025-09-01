import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Developer",
    "Data Analytics Specialist",
    "Ingeniero en Computación",
    "Estudiante de 7º Semestre",
    "Analista de Datos"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 fade-in">
          {/* Profile image */}
          <div className="mx-auto w-40 h-40 rounded-full overflow-hidden shadow-custom-xl scale-in ring-4 ring-primary/20">
            <img 
              src={profilePhoto} 
              alt="David Ramírez" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              David Ramírez
            </h1>
            
            {/* Animated role */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-primary font-medium animate-fade-in-up"
                key={currentRole}>
                {roles[currentRole]}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-left">
            Estudiante de 7º semestre de Ingeniería en Computación y <span className="text-primary font-semibold">Becario Data-Driven-Decisions Specialist</span> de Coding Bootcamps ESPOL. 
            Experiencia en desarrollo web con <span className="text-primary font-semibold">React + TypeScript</span>, backend con <span className="text-primary font-semibold">Java Spring Boot</span> y análisis de datos con <span className="text-primary font-semibold">Python + SQL</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
            <Button
              size="lg"
              className="w-40 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-full transition-smooth shadow-custom-lg hover:shadow-custom-xl"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Proyectos
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-40 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-smooth"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contactar
            </Button>
          </div>

          {/* Social Links */}
          <div className="w-full flex justify-center">
            <div className="flex items-center gap-4 scale-in">
              <a
                href="https://github.com/DERS0214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-custom-md hover:shadow-custom-lg group flex items-center justify-center"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-fast" />
              </a>
              
              <a
                href="https://linkedin.com/in/ders0214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-custom-md hover:shadow-custom-lg group flex items-center justify-center"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-fast" />
              </a>
              
              <a
                href="mailto:dramirez021487@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-custom-md hover:shadow-custom-lg group flex items-center justify-center"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-fast" />
              </a> 
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center items-center fade-in">
          <button
            onClick={scrollToAbout}
            className="p-3 rounded-full hover:bg-card transition-smooth animate-bounce flex items-center justify-center"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;