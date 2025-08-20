import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Shield, Sparkles, BookOpen, Users, Award } from 'lucide-react';

// Import product images
import varillaClara from '@/assets/varilla-clara.jpg';
import varillaAzul from '@/assets/varilla-azul.jpg';
import varillaAmbar from '@/assets/varilla-ambar.jpg';

const Home = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Varilla Borosilicato Clara 7mm',
      image: varillaClara,
      price: 3500,
      category: 'Varillas',
      diameter: '7mm',
      color: 'transparente',
      stock: 15,
      isFeatured: true,
      specifications: {
        diameter: '7mm',
        length: '33cm',
        coefficient: '33',
        temperature: '515°C'
      }
    },
    {
      id: '2',
      name: 'Varilla Borosilicato Azul Cobalto 5mm',
      image: varillaAzul,
      price: 4200,
      originalPrice: 4800,
      category: 'Varillas',
      diameter: '5mm',
      color: 'azul cobalto',
      stock: 8,
      isNew: true,
      specifications: {
        diameter: '5mm',
        length: '33cm',
        coefficient: '33',
        temperature: '515°C'
      }
    },
    {
      id: '3',
      name: 'Varilla Borosilicato Ámbar 6mm',
      image: varillaAmbar,
      price: 3800,
      category: 'Varillas',
      diameter: '6mm',
      color: 'ámbar',
      stock: 12,
      isFeatured: true,
      specifications: {
        diameter: '6mm',
        length: '33cm',
        coefficient: '33',
        temperature: '515°C'
      }
    }
  ];

  const benefits = [
    {
      icon: <Flame className="h-8 w-8 text-tertiary" />,
      title: 'Resistencia Térmica',
      description: 'Soporta temperaturas hasta 515°C sin deformarse'
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Coeficiente 33',
      description: 'Compatible con vidrio Pyrex y Schott Duran'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-soft" />,
      title: 'Colores Artísticos',
      description: 'Amplia gama de colores para creaciones únicas'
    }
  ];

  const stats = [
    { number: '500+', label: 'Artistas Confían en Nosotros' },
    { number: '1000+', label: 'Productos Vendidos' },
    { number: '24/7', label: 'Soporte Técnico' },
    { number: '100%', label: 'Calidad Garantizada' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Productos Destacados
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Vidrio Borosilicato Premium
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra selección de varillas de borosilicato de la más alta calidad, 
              perfectas para soplado artístico y creaciones profesionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/tienda">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth group">
                Ver Todo el Catálogo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              ¿Por qué elegir Borosilicato?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              El vidrio borosilicato ofrece propiedades únicas que lo convierten en la elección preferida 
              de artistas y profesionales del soplado de vidrio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass border-border/50 hover:border-tertiary/50 transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 group-hover:animate-pulse">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/borosilicato">
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary/50 transition-smooth">
                <BookOpen className="mr-2 h-5 w-5" />
                Aprende Más sobre el Borosilicato
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-tertiary/10 text-tertiary mb-6">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Calidad Premium Garantizada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Comienza tu Proyecto Artístico
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a cientos de artistas que ya confían en Boro Bros para sus creaciones más importantes. 
              Envío gratis a todo el país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tienda">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth">
                  <Users className="mr-2 h-5 w-5" />
                  Explorar Productos
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg" className="border-border hover:bg-secondary/50 transition-smooth">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Leer el Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;