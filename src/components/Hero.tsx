import { Button } from '@/components/ui/button';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-borosilicate.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Varillas de vidrio borosilicato artísticas de Boro Bros" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-8 animate-float">
            <Sparkles className="h-4 w-4 text-tertiary mr-2" />
            <span className="text-sm font-medium text-foreground">Vidrio Premium de Laboratorio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="gradient-text">Pioneros en</span>
            <br />
            <span className="text-primary">Borosilicato</span>
            <br />
            <span className="text-foreground">en Argentina</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-light">
            La primera tienda dedicada exclusivamente al vidrio borosilicato y herramientas para soplado artístico. 
            Calidad premium para artistas profesionales.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center">
              <Flame className="h-5 w-5 text-tertiary mr-2" />
              <span className="text-foreground font-medium">Resistente a 515°C</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-tertiary rounded-full mr-2" />
              <span className="text-foreground font-medium">Coeficiente 33</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2" />
              <span className="text-foreground font-medium">Colores Artísticos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/tienda">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth group">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/borosilicato">
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary/50 transition-smooth">
                ¿Qué es el Borosilicato?
              </Button>
            </Link>
          </div>

          {/* Shipping Banner */}
          <div className="glass rounded-xl p-6 max-w-md">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-accent rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">🚚</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Envío Gratis</h3>
                <p className="text-sm text-muted-foreground">A todo el país en compras superiores a $50.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-glass rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gradient-to-br from-soft/30 to-tertiary/30 rounded-full blur-2xl animate-float" />
    </section>
  );
};

export default Hero;