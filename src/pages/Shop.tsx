import { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

// Import product images
import varillaClara from '@/assets/varilla-clara.jpg';
import varillaAzul from '@/assets/varilla-azul.jpg';
import varillaAmbar from '@/assets/varilla-ambar.jpg';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterColor, setFilterColor] = useState('all');
  const [filterDiameter, setFilterDiameter] = useState('all');

  const allProducts = [
    {
      id: '1',
      name: 'Varilla Borosilicato Transparente 7mm',
      image: varillaClara,
      price: 3500,
      category: 'Varillas',
      diameter: '7mm',
      color: 'transparente',
      stock: 15,
      isFeatured: true,
      specifications: { diameter: '7mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '2',
      name: 'Varilla Borosilicato Azul 10mm',
      image: varillaAzul,
      price: 4800,
      category: 'Varillas',
      diameter: '10mm',
      color: 'azul',
      stock: 8,
      isNew: true,
      specifications: { diameter: '10mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '3',
      name: 'Tubo Borosilicato 20x2mm',
      image: varillaClara,
      price: 5200,
      category: 'Tubos',
      diameter: '20mm',
      color: 'transparente',
      stock: 6,
      isFeatured: true,
      specifications: { diameter: '20mm', wall: '2mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '4',
      name: 'Varilla Color Ámbar 8mm',
      image: varillaAmbar,
      price: 4100,
      category: 'Varillas',
      diameter: '8mm',
      color: 'ámbar',
      stock: 12,
      specifications: { diameter: '8mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '5',
      name: 'Varilla Color Verde Oliva 6mm',
      image: varillaClara,
      price: 4300,
      category: 'Varillas',
      diameter: '6mm',
      color: 'verde oliva',
      stock: 10,
      isNew: true,
      specifications: { diameter: '6mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '6',
      name: 'Soplete Básico',
      image: varillaClara,
      price: 18500,
      category: 'Herramientas',
      diameter: 'N/A',
      color: 'N/A',
      stock: 5,
      isFeatured: true,
      specifications: { type: 'Gas/Oxígeno', flame_temp: '1200°C', use: 'Principiantes' }
    },
    {
      id: '7',
      name: 'Pinzas de Grafito',
      image: varillaClara,
      price: 2800,
      category: 'Herramientas',
      diameter: 'N/A',
      color: 'negro',
      stock: 15,
      specifications: { material: 'Grafito', length: '25cm', heat_resistant: 'Sí' }
    },
    {
      id: '8',
      name: 'Mandril de Acero 3mm',
      image: varillaClara,
      price: 850,
      category: 'Herramientas',
      diameter: '3mm',
      color: 'acero',
      stock: 25,
      specifications: { diameter: '3mm', length: '20cm', material: 'Acero inoxidable' }
    },
    {
      id: '9',
      name: 'Juego de Varillas Surtidas',
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

  const colors = [
    { value: 'all', label: 'Todos los Colores' },
    { value: 'transparente', label: 'Transparente' },
    { value: 'azul cobalto', label: 'Azul Cobalto' },
    { value: 'ámbar', label: 'Ámbar' }
  ];

  const diameters = [
    { value: 'all', label: 'Todos los Diámetros' },
    { value: '5mm', label: '5mm' },
    { value: '6mm', label: '6mm' },
    { value: '7mm', label: '7mm' },
    { value: '8mm', label: '8mm' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'name', label: 'Nombre A-Z' },
    { value: 'newest', label: 'Más Nuevos' }
  ];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      if (filterColor !== 'all' && product.color !== filterColor) return false;
      if (filterDiameter !== 'all' && product.diameter !== filterDiameter) return false;
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
          return b.isNew ? 1 : -1;
        default:
          return b.isFeatured ? 1 : -1;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-tertiary text-tertiary-foreground">
              Catálogo Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              Tienda de Borosilicato
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre nuestra selección completa de varillas de vidrio borosilicato, 
              herramientas y accesorios para vidrio soplado.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filtros:</span>
              </div>

              <Select value={filterColor} onValueChange={setFilterColor}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((color) => (
                    <SelectItem key={color.value} value={color.value}>
                      {color.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterDiameter} onValueChange={setFilterDiameter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Diámetro" />
                </SelectTrigger>
                <SelectContent>
                  {diameters.map((diameter) => (
                    <SelectItem key={diameter.value} value={diameter.value}>
                      {diameter.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              Mostrando {filteredProducts.length} productos
            </p>
            <Button variant="ghost" size="sm" className="text-tertiary hover:text-tertiary-hover">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros Avanzados
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
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
                  Intenta ajustar los filtros para encontrar más productos.
                </p>
                <Button 
                  onClick={() => {
                    setFilterColor('all');
                    setFilterDiameter('all');
                  }}
                  variant="outline"
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Shipping Banner */}
      <section className="py-12 bg-tertiary text-tertiary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            🚚 Envío Gratis a Todo el País
          </h3>
          <p className="text-tertiary-foreground/80">
            En compras superiores a $50.000 • Tiempo de entrega: 3-7 días hábiles
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;