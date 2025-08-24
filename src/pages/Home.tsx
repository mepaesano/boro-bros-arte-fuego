import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ProductCard from '@/components/ProductCard';
import { 
  Thermometer, 
  Shield, 
  MapPin, 
  ShoppingBag, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

// Import product images - corrected paths for production
import varillaClara from "@/assets/varilla-clara.jpg";
import varillaAzul from "@/assets/varilla-azul.jpg";
import varillaAmbar from "@/assets/varilla-ambar.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Varilla Borosilicato Clara 7mm",
    category: "Varillas",
    price: 3500,
    image: varillaClara,
    stock: 15,
    specifications: {
      diameter: "7mm",
      length: "33cm",
      coefficient: "33",
      temperature: "515°C"
    },
    isFeatured: true,
    isNew: false
  },
  {
    id: "2",
    name: "Varilla Borosilicato Azul Cobalto 5mm",
    category: "Varillas",
    price: 4200,
    originalPrice: 4800,
    image: varillaAzul,
    stock: 8,
    specifications: {
      diameter: "5mm",
      length: "33cm",
      coefficient: "33",
      temperature: "515°C"
    },
    isFeatured: false,
    isNew: false
  },
  {
    id: "3",
    name: "Varilla Borosilicato Ámbar 6mm",
    category: "Varillas",
    price: 3800,
    image: varillaAmbar,
    stock: 12,
    specifications: {
      diameter: "6mm",
      length: "33cm",
      coefficient: "33",
      temperature: "515°C"
    },
    isFeatured: true,
    isNew: true
  }
];

const benefits = [
  {
    icon: Thermometer,
    title: "Resistencia Térmica",
    description: "Soporta temperaturas hasta 515°C sin deformarse"
  },
  {
    icon: Shield,
    title: "Coeficiente 33",
    description: "Compatible con vidrio Pyrex y Schott Duran"
  },
  {
    icon: MapPin,
    title: "Variedad de colores",
    description: "Amplia gama de colores para creaciones únicas"
  }
];

const stats = [
  { number: "500+", label: "Artistas Confían en Nosotros" },
  { number: "1000+", label: "Productos Vendidos" },
  { number: "24/7", label: "Soporte Técnico" },
  { number: "100%", label: "Calidad Garantizada" }
];

const Home = () => {
  const { addToCart } = useCart();

  const handleScrollDown = () => {
    const nextSection = document.querySelector('.products-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Boro Bros - Pioneros en Borosilicato en Argentina | Vidrio Premium para Soplado Artístico</title>
        <meta name="description" content="Descubre Boro Bros, pioneros en vidrio borosilicato en Argentina. Varillas, tubos y herramientas premium para soplado artístico. Coeficiente 33, resistencia 515°C, envíos gratis desde $50.000." />
        <meta name="keywords" content="borosilicato Argentina, vidrio soplado, varillas borosilicato, tubos vidrio, herramientas soplado, pyrex, coeficiente 33, flameworking, lampworking" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://borobros.com.ar/" />
        <meta property="og:title" content="Boro Bros - Pioneros en Borosilicato en Argentina" />
        <meta property="og:description" content="Vidrio premium para soplado artístico. Calidad profesional, resistencia excepcional, colores únicos." />
        <meta property="og:image" content="/lovable-uploads/46f8abee-5fa3-4d03-8384-22e5bbd04a67.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://borobros.com.ar/" />
        <meta property="twitter:title" content="Boro Bros - Pioneros en Borosilicato en Argentina" />
        <meta property="twitter:description" content="Vidrio premium para soplado artístico. Calidad profesional, resistencia excepcional, colores únicos." />
        <meta property="twitter:image" content="/lovable-uploads/46f8abee-5fa3-4d03-8384-22e5bbd04a67.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://borobros.com.ar/" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Boro Bros",
            "url": "https://borobros.com.ar",
            "logo": "https://borobros.com.ar/logo.png",
            "description": "Pioneros en vidrio borosilicato en Argentina. Varillas, tubos y herramientas para soplado artístico.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR",
              "addressLocality": "Buenos Aires"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+54-11-2333-81522",
              "contactType": "customer service",
              "email": "hola@borobros.com.ar"
            },
            "sameAs": [
              "https://api.whatsapp.com/send/?phone=5491133381522"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/46f8abee-5fa3-4d03-8384-22e5bbd04a67.png" 
              alt="Varillas de vidrio borosilicato de colores en manos de artista, tubos transparentes y herramientas para soplado artístico profesional" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/25 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 pt-24 pb-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 font-heading" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                Pioneros en<br/>
                <span style={{ color: '#F0E6DC' }}>Borosilicato</span><br/>
                en Argentina
              </h1>

              <p className="text-xl md:text-2xl text-white/95 max-w-2xl font-medium mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Vidrio premium para soplado artístico. Calidad profesional, 
                resistencia excepcional, colores únicos.
              </p>

              {/* Benefit chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                  <Thermometer className="w-4 h-4" />
                  <span>Resistente 515°C</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  <span>Coeficiente 33</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Variedad de colores</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tienda">
                  <Button size="lg" className="bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground shadow-lg min-h-[48px] px-8">
                    Comprar Ahora
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                
                <Link to="/borosilicato">
                  <Button variant="secondary" size="lg" className="min-h-[48px] px-8 bg-secondary border-2 border-primary text-primary hover:bg-primary hover:text-secondary">
                    Aprende Más sobre el Borosilicato
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={handleScrollDown}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="products-section py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Productos Destacados
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
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
                <Button size="lg" className="bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
                  Ver Todo el Catálogo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
                ¿Por qué elegir Borosilicato?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                El vidrio borosilicato ofrece propiedades únicas que lo convierten en la elección preferida 
                de artistas y profesionales del soplado de vidrio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-all bg-background/80 backdrop-blur-sm border-tertiary/20 hover:border-tertiary/50 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-6 text-tertiary">
                      <benefit.icon className="w-full h-full" />
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
                <Button variant="secondary" size="lg" className="min-h-[48px] px-8">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Aprende Más sobre el Borosilicato
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-tertiary-foreground mb-2 font-heading gradient-text">
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

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Home;