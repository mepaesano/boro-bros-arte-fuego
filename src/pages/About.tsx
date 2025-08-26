import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-tertiary" />,
      title: 'Calidad Premium',
      description: 'Solo trabajamos con vidrio borosilicato de la más alta calidad, importado de laboratorios reconocidos mundialmente.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Comunidad Artística',
      description: 'Apoyamos y fomentamos el crecimiento de la comunidad de artistas del vidrio en Argentina y Latinoamérica.'
    },
    {
      icon: <Target className="h-8 w-8 text-soft" />,
      title: 'Innovación Constante',
      description: 'Buscamos continuamente nuevas técnicas, herramientas y materiales para ofrecer a nuestros clientes.'
    },
    {
      icon: <Heart className="h-8 w-8 text-destructive" />,
      title: 'Pasión por el Arte',
      description: 'Compartimos la pasión por el arte del vidrio y nos dedicamos a preservar y transmitir estas técnicas.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-tertiary text-tertiary-foreground">
              Nuestra Historia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              Sobre Boro.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En BORO nos especializamos en vidrio borosilicato y en herramientas para soplado artístico. Nuestra misión es democratizar el acceso a materiales de excelente calidad para artistas y profesionales del vidrio.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Boro nació en 2025 con la idea de crear un espacio confiable y especializado en vidrio borosilicato en Argentina. Como artistas del vidrio, conocemos la dificultad de acceder a materiales de calidad y decidimos dar el primer paso para acercarlos a la comunidad local.
                  </p>
                  <p>
                    Hoy iniciamos este camino con la misión de democratizar el acceso a los mejores insumos para artistas, talleres y profesionales, construyendo una base sólida que acompañe el crecimiento del soplado artístico en el país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestra misión de ser líderes en el mercado del borosilicato artístico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="glass border-border/50 hover:border-tertiary/50 transition-smooth group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:animate-pulse">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/tienda">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth group">
                Conoce Nuestros Productos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;