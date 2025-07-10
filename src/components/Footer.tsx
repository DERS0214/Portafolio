import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>© {currentYear} David Ramírez. Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>usando React + Tailwind CSS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Desarrollador Full-Stack • Java • React • Spring Boot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;