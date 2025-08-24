import { useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  stock: number;
  rating?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  specifications?: {
    diameter?: string;
    length?: string;
    coefficient?: string;
    temperature?: string;
  };
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  stock, 
  rating = 5,
  isFeatured = false,
  isNew = false,
  specifications 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart({
      id,
      name,
      image,
      price,
      specifications
    });
    
    setIsLoading(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const monthlyPayment = Math.ceil(price / 12);

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
      <div className="relative">
        {/* Product Image */}
        <Link to={`/tienda/${id}`} className="block">
          <div className="aspect-square overflow-hidden rounded-t-lg bg-secondary/30">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </Link>
          
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <Button 
              size="icon" 
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-background"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary"
              className={`bg-background/90 backdrop-blur-sm hover:bg-background ${
                isLiked ? 'text-red-500' : ''
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-tertiary text-tertiary-foreground">
              Nuevo
            </Badge>
          )}
          {isFeatured && (
            <Badge className="bg-accent text-accent-foreground">
              Más Vendido
            </Badge>
          )}
          {originalPrice && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
            </Badge>
          )}
          {stock < 5 && stock > 0 && (
            <Badge variant="outline" className="bg-background/90">
              Solo {stock} left
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-sm text-muted-foreground mb-2 font-medium">
          {category}
        </p>

        {/* Product Name */}
        <Link to={`/tienda/${id}`}>
          <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
            {name}
          </h3>
        </Link>

        {/* Specifications */}
        {specifications && (
          <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
            {specifications.diameter && (
              <div>
                <span className="font-medium">Diámetro:</span> {specifications.diameter}
              </div>
            )}
            {specifications.length && (
              <div>
                <span className="font-medium">Largo:</span> {specifications.length}
              </div>
            )}
            {specifications.coefficient && (
              <div>
                <span className="font-medium">Coef:</span> {specifications.coefficient}
              </div>
            )}
            {specifications.temperature && (
              <div>
                <span className="font-medium">Temp:</span> {specifications.temperature}
              </div>
            )}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-sm ${
                i < rating ? 'text-yellow-400' : 'text-muted-foreground'
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({rating}/5)
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            12 cuotas sin interés de {formatPrice(monthlyPayment)}
          </p>
          <p className="text-xs text-tertiary font-medium mt-1">
            Envío gratis desde $50.000
          </p>
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground font-semibold min-h-[48px] rounded-lg"
          onClick={handleAddToCart}
          disabled={stock === 0 || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              Agregando...
            </div>
          ) : stock === 0 ? (
            'Sin Stock'
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agregar al Carrito
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;