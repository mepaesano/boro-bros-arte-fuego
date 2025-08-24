import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/hooks/useCart';
import { usePageTracking, trackViewItem } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, ShoppingCart, ArrowLeft, Star, Heart, Share2, Truck, Shield, Award } from 'lucide-react';

// Import product images
import varillaClara from '@/assets/varilla-clara.jpg';
import varillaAzul from '@/assets/varilla-azul.jpg';
import varillaAmbar from '@/assets/varilla-ambar.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Page tracking
  usePageTracking('Detalle de Producto', { product_id: id });

  // Mock product data (in real app, fetch by ID)
  const product = {
    id: '1',
    name: 'Varilla Borosilicato Transparente 7mm',
    images: [varillaClara, varillaAzul, varillaAmbar],
    price: 3500,
    originalPrice: 4000,
    category: 'Varillas',
    stock: 15,
    rating: 4.8,
    reviewCount: 24,
    description: 'Varilla de vidrio borosilicato coeficiente 33 de alta calidad, perfecta para soplado artístico y flamework. Fabricada según estándares internacionales para garantizar máxima resistencia térmica y durabilidad.',
    specifications: {
      diameter: '7mm',
      length: '33cm',
      coefficient: '33',
      temperature: '515°C',
      compatibility: 'Compatible con vidrio borosilicato coeficiente 33',
      origin: 'Importado',
      quality: 'Premium'
    },
    features: [
      'Coeficiente de expansión 33',
      'Resistencia térmica superior',
      'Colores intensos y duraderos',
      'Compatible con herramientas estándar',
      'Acabado perfecto sin burbujas'
    ]
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Varilla Borosilicato Azul 10mm',
      image: varillaAzul,
      price: 4800,
      category: 'Varillas',
      stock: 8,
      specifications: { diameter: '10mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '3',
      name: 'Tubo Borosilicato 20x2mm',
      image: varillaClara,
      price: 5200,
      category: 'Tubos',
      stock: 6,
      specifications: { diameter: '20mm', wall: '2mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    },
    {
      id: '4',
      name: 'Varilla Color Ámbar 8mm',
      image: varillaAmbar,
      price: 4100,
      category: 'Varillas',
      stock: 12,
      specifications: { diameter: '8mm', length: '33cm', coefficient: '33', temperature: '515°C' }
    }
  ];

  // Track product view
  useEffect(() => {
    if (product) {
      trackViewItem(product.id, product.name, product.category, product.price);
    }
  }, [product]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        specifications: product.specifications
      });
    }
  };

  const monthlyPayment = Math.ceil(product.price / 12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Inicio</Link>
              <span>/</span>
              <Link to="/tienda" className="hover:text-primary">Tienda</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} vista ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-tertiary text-tertiary-foreground">
                    {product.category}
                  </Badge>
                  {product.stock < 5 && (
                    <Badge variant="outline" className="text-destructive border-destructive">
                      ¡Últimas {product.stock} unidades!
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviewCount} reseñas)
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  12 cuotas sin interés de {formatPrice(monthlyPayment)}
                </p>
                <p className="text-sm text-tertiary font-medium">
                  🚚 Envío gratis desde $50.000
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Cantidad:
                  </label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-16 text-center font-medium text-lg">
                      {quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.stock} disponibles)
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground h-12"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Agregar al Carrito
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsLiked(!isLiked)}
                      className={isLiked ? 'text-red-500 border-red-500' : ''}
                    >
                      <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                    </Button>
                    
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-tertiary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Pago Seguro</p>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-tertiary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Envío Gratis</p>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-tertiary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Calidad Premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Descripción</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <h4 className="font-semibold mb-3">Características principales:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Especificaciones Técnicas</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Products */}
          <section className="mt-16">
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Productos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;