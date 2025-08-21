import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React 18", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Vite", icon: "⚡" },
        { name: "Flutter", icon: "📱" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: "🗄️",
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase Realtime", icon: "🔥" },
        { name: "Firestore", icon: "🔥" },
        { name: "SQL", icon: "🗄️" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "⚡" },
        { name: "Google Cloud", icon: "☁️" },
        { name: "AWS EC2", icon: "☁️" },
        { name: "Git & GitHub", icon: "📚" }
      ]
    },
    {
      title: "Herramientas",
      icon: "🛠️",
      color: "from-yellow-500 to-amber-500",
      skills: [
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        { name: "Notion", icon: "📝" },
        { name: "Arduino", icon: "🔌" },
        { name: "JUnit", icon: "🧪" }
      ]
    },

    {
      title: "Otros Lenguajes",
      icon: "💻",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Dart", icon: "🎯" },
        { name: "C", icon: "🔵" }
      ]
    }
  ];

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
              Tecnologías y herramientas para crear soluciones completas
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover border-border/50 scale-in overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Color bar at top */}
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-xl">
                    <span className="text-foreground">{category.title}</span>
                    <span className="text-2xl">{category.icon}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;