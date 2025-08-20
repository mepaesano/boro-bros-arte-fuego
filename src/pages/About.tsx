import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Heart, Flame, Shield } from 'lucide-react';

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

  const milestones = [
    {
      year: '2020',
      title: 'Fundación de Boro Bros',
      description: 'Iniciamos como la primera tienda especializada en borosilicato en Argentina.'
    },
    {
      year: '2021',
      title: 'Expansión del Catálogo',
      description: 'Incorporamos herramientas profesionales y accesorios especializados.'
    },
    {
      year: '2022',
      title: 'Comunidad de 200+ Artistas',
      description: 'Alcanzamos más de 200 artistas activos en nuestra comunidad.'
    },
    {
      year: '2023',
      title: 'Blog Educativo',
      description: 'Lanzamos nuestro blog educativo con técnicas y guías especializadas.'
    },
    {
      year: '2024',
      title: 'Líderes del Mercado',
      description: 'Nos consolidamos como referentes en borosilicato en Argentina.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Artistas Satisfechos' },
    { number: '1000+', label: 'Productos Vendidos' },
    { number: '4', label: 'Años de Experiencia' },
    { number: '100%', label: 'Satisfacción del Cliente' }
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
              Sobre Boro Bros
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos pioneros en Argentina, la primera tienda dedicada exclusivamente al vidrio borosilicato 
              y las herramientas para soplado artístico. Nuestra misión es democratizar el acceso a materiales 
              de calidad premium para artistas y profesionales del vidrio.
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
                    Boro Bros nació en 2020 de la necesidad de contar con un proveedor confiable de vidrio 
                    borosilicato en Argentina. Como artistas del vidrio, experimentamos en primera persona 
                    la dificultad de conseguir materiales de calidad en nuestro país.
                  </p>
                  <p>
                    Decidimos cambiar esta realidad y nos convertimos en importadores directos de las 
                    mejores marcas de vidrio borosilicato del mundo, ofreciendo productos de laboratorio 
                    adaptados para uso artístico.
                  </p>
                  <p>
                    Hoy, cuatro años después, somos la referencia en Argentina para artistas, talleres 
                    y profesionales que buscan calidad premium en sus creaciones.
                  </p>
                </div>
              </div>
              
              <div className="glass rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Nuestro Recorrido
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los hitos más importantes en nuestro camino hacia convertirnos en líderes del mercado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-border"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-tertiary rounded-full border-4 border-background z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card className="glass border-border/50 hover:border-tertiary/50 transition-smooth">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-tertiary text-tertiary-foreground">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              ¿Por Qué Elegir Boro Bros?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Flame className="h-6 w-6 text-tertiary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Experiencia Comprobada</h3>
                  <p className="text-muted-foreground text-sm">4 años siendo líderes en el mercado argentino del borosilicato artístico.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Calidad Garantizada</h3>
                  <p className="text-muted-foreground text-sm">Productos importados directamente de laboratorios certificados.</p>
                </div>
              </div>
            </div>

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