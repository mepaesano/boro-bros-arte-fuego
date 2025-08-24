import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { usePageTracking, trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Filter, Grid, List, SlidersHorizontal, Search, X, TruckIcon, CreditCard, Shield, ShoppingBag } from 'lucide-react';

// Import product images
import varillaClara from '@/assets/varilla-clara.jpg';
import varillaAzul from '@/assets/varilla-azul.jpg';
import varillaAmbar from '@/assets/varilla-ambar.jpg';

const Shop = () => {
  usePageTracking('Tienda de Borosilicato', { section: 'shop' });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    trackEvent('page_view', {
      page_title: 'Comprar Vidrio Borosilicato en Argentina – Tienda Boro Bros',
      page_location: window.location.href,
      content_group1: 'Tienda'
    });
  }, []);
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterColor, setFilterColor] = useState('all');
  const [filterDiameter, setFilterDiameter] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const allProducts = [
    {
      id: 'varilla-borosilicato-transparente-7mm',
      name: 'Varilla Borosilicato Transparente 7mm',
      image: varillaClara,
      price: 3500,
      category: 'Varillas',
      diameter: '7mm',
      color: 'transparente',
      stock: 15,
      isFeatured: true,
      isNew: false,
      specifications: { diameter: '7mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: 'varilla-borosilicato-azul-cobalto-10mm',
      name: 'Varilla Borosilicato Azul Cobalto 10mm',
      image: varillaAzul,
      price: 4800,
      category: 'Varillas',
      diameter: '10mm',
      color: 'azul cobalto',
      stock: 8,
      isNew: true,
      isFeatured: false,
      specifications: { diameter: '10mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: 'tubo-borosilicato-transparente-20x2mm',
      name: 'Tubo Borosilicato Transparente 20x2mm',
      image: varillaClara,
      price: 5200,
      category: 'Tubos',
      diameter: '20mm',
      color: 'transparente',
      stock: 6,
      isFeatured: true,
      isNew: false,
      specifications: { diameter: '20mm', wall: '2mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: 'varilla-color-ambar-8mm',
      name: 'Varilla Color Ámbar 8mm',
      image: varillaAmbar,
      price: 4100,
      category: 'Varillas',
      diameter: '8mm',
      color: 'ámbar',
      stock: 12,
      isFeatured: false,
      isNew: false,
      specifications: { diameter: '8mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: 'varilla-verde-oliva-6mm',
      name: 'Varilla Color Verde Oliva 6mm',
      image: varillaClara,
      price: 4300,
      category: 'Varillas',
      diameter: '6mm',
      color: 'verde oliva',
      stock: 10,
      isNew: true,
      isFeatured: false,
      specifications: { diameter: '6mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: 'soplete-basico-principiantes',
      name: 'Soplete Básico para Principiantes',
      image: varillaClara,
      price: 18500,
      category: 'Herramientas',
      diameter: 'N/A',
      color: 'N/A',
      stock: 5,
      isFeatured: true,
      isNew: false,
      specifications: { type: 'Gas/Oxígeno', flame_temp: '1200°C', use: 'Principiantes' }
    },
    {
      id: 'pinzas-grafito-25cm',
      name: 'Pinzas de Grafito 25cm',
      image: varillaClara,
      price: 2800,
      category: 'Herramientas',
      diameter: 'N/A',
      color: 'negro',
      stock: 15,
      isFeatured: false,
      isNew: false,
      specifications: { material: 'Grafito', length: '25cm', heat_resistant: 'Sí' }
    },
    {
      id: 'mandril-acero-inoxidable-3mm',
      name: 'Mandril de Acero Inoxidable 3mm',
      image: varillaClara,
      price: 850,
      category: 'Herramientas',
      diameter: '3mm',
      color: 'acero',
      stock: 25,
      isFeatured: false,
      isNew: false,
      specifications: { diameter: '3mm', length: '20cm', material: 'Acero inoxidable' }
    },
    {
      id: 'kit-varillas-surtidas-principiantes',
      name: 'Kit de Varillas Surtidas para Principiantes',
      image: varillaAmbar,
      price: 12500,
      originalPrice: 15000,
      category: 'Kits',
      diameter: 'varios',
      color: 'surtido',
      stock: 3,
      isNew: true,
      isFeatured: true,
      specifications: { contents: '6 varillas diferentes', diameters: '5mm, 6mm, 7mm', colors: 'Transparente, Azul, Ámbar' }
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas las Categorías' },
    { value: 'Varillas', label: 'Varillas' },
    { value: 'Tubos', label: 'Tubos' },
    { value: 'Herramientas', label: 'Herramientas' },
    { value: 'Kits', label: 'Kits' }
  ];

  const colors = [
    { value: 'all', label: 'Todos los Colores' },
    { value: 'transparente', label: 'Transparente' },
    { value: 'azul cobalto', label: 'Azul Cobalto' },
    { value: 'ámbar', label: 'Ámbar' },
    { value: 'verde oliva', label: 'Verde Oliva' }
  ];

  const diameters = [
    { value: 'all', label: 'Todos los Diámetros' },
    { value: '5mm', label: '5mm' },
    { value: '6mm', label: '6mm' },
    { value: '7mm', label: '7mm' },
    { value: '8mm', label: '8mm' },
    { value: '10mm', label: '10mm' },
    { value: '20mm', label: '20mm' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Más Vendidos' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'name', label: 'Nombre A-Z' },
    { value: 'newest', label: 'Más Nuevos' }
  ];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      // Text search
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Category filter
      if (filterCategory !== 'all' && product.category !== filterCategory) return false;
      // Color filter
      if (filterColor !== 'all' && product.color !== filterColor) return false;
      // Diameter filter
      if (filterDiameter !== 'all' && product.diameter !== filterDiameter) return false;
      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });

  const clearAllFilters = () => {
    setFilterCategory('all');
    setFilterColor('all');
    setFilterDiameter('all');
    setPriceRange([0, 20000]);
    setSearchTerm('');
    
    // Track filter usage
    trackEvent('filter_clear', {
      content_category: 'Shop',
      filter_type: 'all'
    });
  };

  // Track filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    trackEvent('filter_applied', {
      content_category: 'Shop',
      filter_type: filterType,
      filter_value: value
    });
  };

  const hasActiveFilters = filterCategory !== 'all' || filterColor !== 'all' || 
                         filterDiameter !== 'all' || priceRange[0] > 0 || 
                         priceRange[1] < 20000 || searchTerm !== '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Comprar Vidrio Borosilicato en Argentina – Tienda Boro Bros</title>
        <meta name="description" content="Descubre nuestra selección premium de varillas de vidrio borosilicato, tubos, herramientas y accesorios para soplado artístico. Envíos gratis a todo el país en compras desde $50.000. Vidrio borosilicato Argentina, varillas de borosilicato, herramientas vidrio soplado." />
        <meta name="keywords" content="vidrio borosilicato Argentina, comprar varillas de borosilicato, herramientas vidrio soplado, tubos borosilicato, varillas coeficiente 33, soplete para vidrio, soplado artístico, lampworking Argentina, flameworking" />
        <link rel="canonical" href="https://borobros.com.ar/tienda" />
        <meta property="og:title" content="Comprar Vidrio Borosilicato en Argentina – Tienda Boro Bros" />
        <meta property="og:description" content="Varillas, tubos y herramientas premium para soplado artístico. Calidad garantizada y envíos a todo el país." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://borobros.com.ar/tienda" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "Boro Bros",
            "description": "Tienda especializada en vidrio borosilicato y herramientas para soplado artístico",
            "url": "https://borobros.com.ar/tienda",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR",
              "addressLocality": "Buenos Aires"
            },
            "telephone": "+54-11-2333-81522",
            "email": "hola@borobros.com.ar"
          })}
        </script>
      </Helmet>
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-tertiary text-tertiary-foreground">
              Catálogo Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              Comprar Vidrio Borosilicato en Argentina – Tienda Boro Bros
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Descubre nuestra selección premium de varillas de vidrio borosilicato, tubos, herramientas y accesorios para soplado artístico. Envíos gratis a todo el país en compras desde $50.000.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-tertiary font-medium">
                <Shield className="h-4 w-4" />
                Pago seguro con MercadoPago
              </div>
              <div className="flex items-center gap-2 text-tertiary font-medium">
                <TruckIcon className="h-4 w-4" />
                Calidad premium
              </div>
              <div className="flex items-center gap-2 text-tertiary font-medium">
                <ShoppingBag className="h-4 w-4" />
                Envío garantizado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={() => setSearchTerm('')}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden w-full">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros {hasActiveFilters && `(${filteredProducts.length})`}
              </Button>
            </div>

            {/* Desktop Filters */}
            <div className={`flex flex-wrap gap-4 items-center ${showFilters || 'hidden lg:flex'}`}>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filtros:</span>
              </div>

              <Select value={filterCategory} onValueChange={(value) => {
                setFilterCategory(value);
                handleFilterChange('category', value);
              }}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterColor} onValueChange={(value) => {
                setFilterColor(value);
                handleFilterChange('color', value);
              }}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {colors.map((color) => (
                    <SelectItem key={color.value} value={color.value}>
                      {color.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterDiameter} onValueChange={(value) => {
                setFilterDiameter(value);
                handleFilterChange('diameter', value);
              }}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Espesor" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {diameters.map((diameter) => (
                    <SelectItem key={diameter.value} value={diameter.value}>
                      {diameter.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range */}
              <div className="w-48">
                <label className="text-sm font-medium text-foreground block mb-2">
                  Precio: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={20000}
                  min={0}
                  step={500}
                  className="w-full"
                />
              </div>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  <X className="h-4 w-4 mr-2" />
                  Limpiar
                </Button>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-primary text-primary-foreground' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Mostrando {filteredProducts.length} de {allProducts.length} productos
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm 
                    ? `No hay productos que coincidan con "${searchTerm}"`
                    : "Intenta ajustar los filtros para encontrar más productos."
                  }
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Trust and Payment Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-tertiary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
              <p className="text-muted-foreground">En compras superiores a $50.000 a todo el país</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-tertiary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pago Seguro</h3>
              <p className="text-muted-foreground">Con MercadoPago • Todas las tarjetas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-tertiary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">12 Cuotas</h3>
              <p className="text-muted-foreground">Sin interés con tarjetas de crédito</p>
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Medios de Pago</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Visa</span>
              <span>•</span>
              <span>Mastercard</span>
              <span>•</span>
              <span>American Express</span>
              <span>•</span>
              <span>Cabal</span>
              <span>•</span>
              <span>Naranja</span>
              <span>•</span>
              <span>Maestro</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;