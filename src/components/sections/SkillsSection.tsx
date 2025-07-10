import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React 18", level: "Avanzado" },
        { name: "TypeScript", level: "Intermedio" },
        { name: "JavaScript", level: "Intermedio" },
        { name: "Tailwind CSS", level: "Avanzado" },
        { name: "HTML5", level: "Avanzado" },
        { name: "CSS3", level: "Avanzado" },
        { name: "Vite", level: "Intermedio" },
        { name: "Flutter", level: "Intermedio" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Java", level: "Avanzado" },
        { name: "Spring Boot", level: "Avanzado" },
        { name: "Node.js", level: "Básico" },
        { name: "Python", level: "Intermedio" },
        { name: "PHP", level: "Intermedio" },
        { name: "C", level: "Básico" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: "Avanzado" },
        { name: "Firebase Realtime", level: "Básico" },
        { name: "Firestore", level: "Básico" },
        { name: "SQL", level: "Avanzado" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "Docker", level: "Básico" },
        { name: "GitHub Actions", level: "Básico" },
        { name: "Google Cloud", level: "Básico" },
        { name: "AWS EC2", level: "Básico" },
        { name: "Git & GitHub", level: "Avanzado" }
      ]
    },
    {
      title: "Herramientas",
      icon: "🛠️",
      skills: [
        { name: "Postman", level: "Intermedio" },
        { name: "Figma", level: "Intermedio" },
        { name: "Notion", level: "Avanzado" },
        { name: "Arduino", level: "Básico" },
        { name: "JUnit", level: "Básico" }
      ]
    },
    {
      title: "IDEs & Editores",
      icon: "⌨️",
      skills: [
        { name: "Visual Studio Code", level: "Intermedio" },
        { name: "Cursor", level: "Intermedio" },
        { name: "IntelliJ IDEA", level: "Intermedio" },
        { name: "NetBeans", level: "Intermedio" },
        { name: "Eclipse", level: "Básico" }
      ]
    },
    {
      title: "Otros Lenguajes",
      icon: "💻",
      skills: [
        { name: "R", level: "Intermedio" },
        { name: "Dart", level: "Básico" },
        { name: "RMarkdown", level: "Intermedio" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avanzado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermedio":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Básico":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover border-border/50 scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Programming languages with experience */}
          <div className="mt-16 fade-in">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Experiencia en Lenguajes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { lang: "Python", years: "2 años", level: 85 },
                { lang: "Java", years: "3 años", level: 90 },
                { lang: "PHP", years: "6 meses", level: 60 },
                { lang: "Ruby", years: "3 meses", level: 40 },
                { lang: "TypeScript", years: "6 meses", level: 65 }
              ].map((item, index) => (
                <Card key={index} className="text-center p-6 card-hover">
                  <div className="text-2xl font-bold text-primary mb-2">{item.lang}</div>
                  <div className="text-sm text-muted-foreground mb-3">{item.years}</div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;