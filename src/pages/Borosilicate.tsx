import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, Shield, Zap, Flame, Beaker, Star, ChevronRight, BookOpen, Calendar, Clock, User, Lightbulb } from 'lucide-react';
import blogHero from '@/assets/blog-hero.jpg';

const Borosilicate = () => {
  const properties = [
    {
      icon: <Thermometer className="h-8 w-8 text-destructive" />,
      title: 'Resistencia Térmica Excepcional',
      description: 'Soporta temperaturas de hasta 515°C sin deformarse, ideal para trabajos con llama directa.',
      value: '515°C'
    },
    {
      icon: <Shield className="h-8 w-8 text-tertiary" />,
      title: 'Coeficiente de Expansión Bajo',
      description: 'Con coeficiente 33, es compatible con vidrio Pyrex y Schott Duran.',
      value: 'COE 33'
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'Resistencia Química',
      description: 'Inerte a la mayoría de ácidos y bases, perfecto para aplicaciones de laboratorio.',
      value: '99.9%'
    },
    {
      icon: <Flame className="h-8 w-8 text-soft" />,
      title: 'Trabajabilidad Superior',
      description: 'Se mantiene maleable durante más tiempo, permitiendo técnicas complejas.',
      value: 'Óptima'
    }
  ];

  const applications = [
    {
      category: 'Arte y Artesanía',
      items: [
        'Soplado artístico de figuras',
        'Joyería de vidrio única',
        'Esculturas decorativas',
        'Elementos de iluminación'
      ]
    },
    {
      category: 'Funcional',
      items: [
        'Pipas de agua artesanales',
        'Utensilios de cocina',
        'Recipientes herméticos',
        'Instrumentos musicales'
      ]
    },
    {
      category: 'Científico',
      items: [
        'Material de laboratorio',
        'Tubos de ensayo personalizados',
        'Reactores químicos',
        'Instrumentos de medición'
      ]
    }
  ];

  const advantages = [
    {
      title: 'Durabilidad Extrema',
      description: 'El borosilicato es 3 veces más resistente que el vidrio común, garantizando piezas duraderas.',
      percentage: '300%'
    },
    {
      title: 'Resistencia al Choque Térmico',
      description: 'Puede pasar de 0°C a 300°C sin romperse, ideal para aplicaciones con cambios bruscos de temperatura.',
      percentage: '95%'
    },
    {
      title: 'Transparencia Óptica',
      description: 'Mantiene su claridad cristalina incluso después de múltiples calentamientos.',
      percentage: '99%'
    }
  ];

  const workingTips = [
    'Calienta gradualmente para evitar tensiones internas',
    'Usa llama neutra para mantener la composición química',
    'Permite enfriamiento lento para prevenir fracturas',
    'Trabaja en secciones para piezas complejas',
    'Mantén temperatura constante durante el proceso'
  ];

  // Blog content merged here
  const featuredPost = {
    id: '1',
    title: 'Guía Completa: Introducción al Vidrio a la Flama',
    excerpt: 'Descubre los fundamentos del soplado de vidrio con borosilicato. Una guía completa para principiantes que quieren adentrarse en este arte milenario.',
    image: blogHero,
    author: 'Carlos Mendoza',
    date: '15 de Marzo, 2024',
    readTime: '8 min',
    category: 'Técnicas',
    featured: true
  };

  const educationalPosts = [
    {
      id: '2',
      title: '¿Qué es el Borosilicato y Por Qué es Superior?',
      excerpt: 'Conoce las propiedades únicas del vidrio borosilicato que lo convierten en la elección preferida de artistas profesionales.',
      author: 'María González',
      date: '12 de Marzo, 2024',
      readTime: '5 min',
      category: 'Educativo'
    },
    {
      id: '3',
      title: 'Herramientas Esenciales para Soplado Artístico',
      excerpt: 'Una guía completa de las herramientas indispensables que todo artista del vidrio debe tener en su taller.',
      author: 'Roberto Silva',
      date: '10 de Marzo, 2024',
      readTime: '6 min',
      category: 'Herramientas'
    },
    {
      id: '4',
      title: 'Técnicas de Coloración en Borosilicato',
      excerpt: 'Aprende las diferentes técnicas para incorporar color en tus creaciones de vidrio borosilicato.',
      author: 'Ana Rodríguez',
      date: '8 de Marzo, 2024',
      readTime: '7 min',
      category: 'Técnicas'
    },
    {
      id: '5',
      title: 'Seguridad en el Taller de Vidrio',
      excerpt: 'Protocolo de seguridad esencial para trabajar con vidrio a altas temperaturas de manera segura.',
      author: 'Diego López',
      date: '5 de Marzo, 2024',
      readTime: '4 min',
      category: 'Seguridad'
    },
    {
      id: '6',
      title: 'Historia del Vidrio Borosilicato en Argentina',
      excerpt: 'Un recorrido por la historia y evolución del trabajo con borosilicato en nuestro país.',
      author: 'Laura Martínez',
      date: '3 de Marzo, 2024',
      readTime: '9 min',
      category: 'Historia'
    }
  ];

  const categories = [
    { name: 'Técnicas', count: 12, icon: <Flame className="h-4 w-4" /> },
    { name: 'Educativo', count: 8, icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Herramientas', count: 6, icon: <Lightbulb className="h-4 w-4" /> },
    { name: 'Seguridad', count: 4, icon: <Shield className="h-4 w-4" /> }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Técnicas': 'bg-tertiary text-tertiary-foreground',
      'Educativo': 'bg-accent text-accent-foreground',
      'Herramientas': 'bg-soft text-soft-foreground',
      'Seguridad': 'bg-destructive text-destructive-foreground',
      'Historia': 'bg-secondary text-secondary-foreground'
    };
    return colors[category] || 'bg-secondary text-secondary-foreground';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-tertiary text-tertiary-foreground">
              Conocimiento Técnico
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              ¿Qué es el Borosilicato?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Descubre las propiedades únicas del vidrio borosilicato que lo convierten en la elección 
              preferida de artistas, científicos y profesionales del vidrio en todo el mundo.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full glass">
              <Beaker className="h-5 w-5 text-tertiary mr-2" />
              <span className="text-foreground font-medium">Fórmula: SiO₂ + B₂O₃</span>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Definición Técnica
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    El vidrio borosilicato es un tipo de vidrio con altos niveles de sílice y ácido bórico 
                    como componentes principales. Esta composición única le otorga propiedades superiores 
                    de resistencia térmica y química.
                  </p>
                  <p>
                    Desarrollado originalmente por Otto Schott en 1893, el borosilicato revolucionó tanto 
                    la industria científica como el mundo del arte del vidrio por su excepcional 
                    estabilidad y trabajabilidad.
                  </p>
                  <p>
                    Con un coeficiente de expansión térmica extremadamente bajo (33 x 10⁻⁷/°C), 
                    el borosilicato puede soportar cambios drásticos de temperatura sin fracturarse.
                  </p>
                </div>
              </div>
              
              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Composición Química
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Óxido de Silicio (SiO₂)</span>
                      <span className="font-semibold text-foreground">80-85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Óxido de Boro (B₂O₃)</span>
                      <span className="font-semibold text-foreground">12-15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Óxido de Aluminio (Al₂O₃)</span>
                      <span className="font-semibold text-foreground">2-3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Otros óxidos</span>
                      <span className="font-semibold text-foreground">1-2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Propiedades Únicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Las características que hacen del borosilicato el material preferido para aplicaciones exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <Card key={index} className="glass border-border/50 hover:border-tertiary/50 transition-smooth group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="group-hover:animate-pulse">
                      {property.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {property.title}
                        </h3>
                        <Badge className="bg-tertiary/10 text-tertiary">
                          {property.value}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Ventajas vs Vidrio Común
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-border/50 hover:border-tertiary/50 transition-smooth group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {advantage.percentage}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Aplicaciones del Borosilicato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desde arte decorativo hasta aplicaciones científicas, el borosilicato es versátil y confiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <Card key={index} className="border-border/50 hover:border-tertiary/50 transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {application.category}
                  </h3>
                  <div className="space-y-3">
                    {application.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <ChevronRight className="h-4 w-4 text-tertiary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Consejos para Trabajar con Borosilicato
              </h2>
            </div>

            <Card className="glass border-border/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Mejores Prácticas
                    </h3>
                    <div className="space-y-4">
                      {workingTips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-tertiary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-3 w-3 text-tertiary" />
                          </div>
                          <span className="text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-glass rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Temperaturas de Trabajo
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Punto de ablandamiento:</span>
                        <span className="font-medium text-foreground">821°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Temperatura de trabajo:</span>
                        <span className="font-medium text-foreground">1000-1200°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Recocido:</span>
                        <span className="font-medium text-foreground">560°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Enfriamiento:</span>
                        <span className="font-medium text-foreground">510°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Content Section - Merged from Blog */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-tertiary text-tertiary-foreground">
              Contenido Educativo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Aprende sobre Borosilicato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guías, técnicas y conocimiento experto sobre el arte del soplado de vidrio y 
              el trabajo con borosilicato para artistas de todos los niveles.
            </p>
          </div>

          {/* Featured Article */}
          <Card className="overflow-hidden border-border/50 hover:border-tertiary/50 transition-smooth group mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    Destacado
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {featuredPost.category}
                  </Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-tertiary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Educational Articles Grid */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Artículos Educativos
                </h3>
              </div>

              <div className="space-y-8">
                {educationalPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden border-border/50 hover:border-tertiary/50 transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="sm:w-48 flex-shrink-0">
                          <div className="aspect-video bg-gradient-glass rounded-lg flex items-center justify-center">
                            <BookOpen className="h-8 w-8 text-muted-foreground" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="mb-3">
                            <Badge className={getCategoryColor(post.category)}>
                              {post.category}
                            </Badge>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-tertiary transition-colors">
                            {post.title}
                          </h4>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-2" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="mr-4">{post.date}</span>
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Categorías de Aprendizaje
                    </h4>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div 
                          key={category.name}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 group"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 text-muted-foreground group-hover:text-tertiary">
                              {category.icon}
                            </div>
                            <span className="text-foreground group-hover:text-tertiary transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <Badge variant="secondary">
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-border/50 bg-gradient-glass">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Newsletter Educativo
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Recibe las últimas técnicas y novedades del mundo del borosilicato.
                    </p>
                    <Button className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth">
                      Suscribirse
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Comienza tu Proyecto con Borosilicato Premium
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Descubre nuestra selección de varillas de borosilicato de la más alta calidad, 
              importadas directamente de laboratorios especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tienda">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-hover transition-smooth group">
                  Ver Catálogo de Productos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Borosilicate;