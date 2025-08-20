import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Thermometer, 
  Palette, 
  Shield,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-glassblowing.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Artista soplando vidrio borosilicato a la flama" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 text-sm font-medium bg-secondary/90 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 mr-2" />
            Primera tienda especializada en Argentina
          </Badge>

          {/* Main Title */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-primary-foreground drop-shadow-lg">
              Pioneros en
            </span>
            <br />
            <span className="text-tertiary drop-shadow-lg">
              Borosilicato
            </span>
            <br />
            <span className="text-primary-foreground drop-shadow-lg">
              en Argentina
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl font-medium drop-shadow">
            Vidrio premium para soplado artístico. Calidad profesional, 
            resistencia excepcional, colores únicos.
          </p>

          {/* Benefits Chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
              <Thermometer className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Resistente 515°C</span>
            </div>
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-tertiary" />
              <span className="text-sm font-medium">Coeficiente 33</span>
            </div>
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
              <Palette className="w-4 h-4 text-soft" />
              <span className="text-sm font-medium">Colores Artísticos</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground font-semibold px-8 py-4 h-auto text-lg shadow-strong"
              asChild
            >
              <Link to="/tienda">
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-secondary/90 backdrop-blur-sm border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary font-semibold px-8 py-4 h-auto text-lg"
              asChild
            >
              <Link to="/borosilicato">
                ¿Qué es el Borosilicato?
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;