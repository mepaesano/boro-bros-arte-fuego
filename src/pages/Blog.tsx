import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, BookOpen, Flame, Lightbulb } from 'lucide-react';
import blogHero from '@/assets/blog-hero.jpg';

const Blog = () => {
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

  const blogPosts = [
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
    { name: 'Seguridad', count: 4, icon: <User className="h-4 w-4" /> }
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-tertiary text-tertiary-foreground">
              Blog Educativo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              Aprende sobre Borosilicato
            </h1>
            <p className="text-xl text-muted-foreground">
              Guías, técnicas y conocimiento experto sobre el arte del soplado de vidrio y 
              el trabajo con borosilicato para artistas de todos los niveles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Artículo Destacado
            </h2>
          </div>

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
                
                <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth group/btn w-fit">
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Artículos Recientes
                </h2>
              </div>

              <div className="space-y-8">
                {blogPosts.map((post) => (
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
                          
                          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-tertiary transition-colors">
                            {post.title}
                          </h3>
                          
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

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-border hover:bg-secondary/50 transition-smooth">
                  Cargar Más Artículos
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Categorías
                    </h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <Link 
                          key={category.name}
                          to={`/blog/categoria/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
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
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-border/50 bg-gradient-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Suscríbete al Newsletter
                    </h3>
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

      <Footer />
    </div>
  );
};

export default Blog;