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
import heroImage from "/lovable-uploads/46f8abee-5fa3-4d03-8384-22e5bbd04a67.png";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image - Fixed */}
      <div className="absolute inset-0 z-0" style={{ backgroundAttachment: 'fixed' }}>
        <img 
          src={heroImage}
          alt="Varillas de vidrio borosilicato de colores en manos de artista, tubos transparentes y herramientas para soplado artístico profesional" 
          className="w-full h-full object-cover fixed-bg"
          loading="eager"
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/25 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-24 pb-8">
        <div className="max-w-4xl space-y-4">
          {/* Main Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Pioneros en<br />
            <span className="text-beige-light">Borosilicato</span><br />
            en Argentina
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/95 max-w-2xl font-medium drop-shadow-lg">
            Vidrio premium para soplado artístico. Calidad profesional, 
            resistencia excepcional, colores únicos.
          </p>

          {/* Benefits Chips */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Thermometer className="w-4 h-4 text-pink-light" />
              <span className="text-sm font-medium">Resistente 515°C</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Shield className="w-4 h-4 text-olive-green" />
              <span className="text-sm font-medium">Coeficiente 33</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Palette className="w-4 h-4 text-beige-light" />
              <span className="text-sm font-medium">Variedad de colores</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-y-3 gap-x-4 md:gap-x-6">
            <Button 
              size="lg" 
              className="bg-[#7A8D76] hover:bg-[#637863] text-white font-semibold px-8 py-4 h-12 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              asChild
            >
              <Link to="/tienda">
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-[#E9DFD3] text-[#5C3F2E] border-2 border-[#5C3F2E] hover:bg-[#5C3F2E] hover:text-white hover:border-[#3E2B20] font-semibold px-8 py-4 h-12 text-lg transition-all duration-200"
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