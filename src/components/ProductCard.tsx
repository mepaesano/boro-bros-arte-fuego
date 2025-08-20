import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  diameter: string;
  color: string;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  image, 
  price, 
  originalPrice, 
  diameter, 
  color, 
  stock, 
  isNew, 
  isFeatured 
}: ProductCardProps) => {
  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Agregar al carrito:', id);
  };

  const handleViewProduct = () => {
    // TODO: Implement product view
    console.log('Ver producto:', id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(price);
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-tertiary/50 transition-smooth hover:shadow-medium">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-tertiary text-tertiary-foreground">Nuevo</Badge>}
          {isFeatured && <Badge className="bg-accent text-accent-foreground">Destacado</Badge>}
          {stock < 5 && stock > 0 && <Badge variant="destructive">Últimas unidades</Badge>}
          {stock === 0 && <Badge variant="secondary">Sin stock</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-10 h-10 p-0 shadow-medium"
            onClick={handleViewProduct}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <CardContent className="p-4">
        {/* Product Info */}
        <div className="mb-3">
          <h3 className="font-semibold text-foreground group-hover:text-tertiary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-muted-foreground">Ø {diameter}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground capitalize">{color}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Info */}
        <div className="mb-4">
          {stock > 0 ? (
            <p className="text-sm text-tertiary font-medium">Stock disponible: {stock} unidades</p>
          ) : (
            <p className="text-sm text-destructive font-medium">Sin stock</p>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth group/btn"
          onClick={handleAddToCart}
          disabled={stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
          {stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;