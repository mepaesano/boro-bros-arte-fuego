import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiniCart = ({ isOpen, onClose }: MiniCartProps) => {
  const { state, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isOpen) return null;

  if (state.items.length === 0) {
    return (
      <Card className="absolute top-full right-0 mt-2 w-80 z-50 shadow-strong border-border">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Carrito vacío</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Agrega productos para continuar
          </p>
          <Link to="/tienda" onClick={onClose}>
            <Button className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
              Ver Productos
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="absolute top-full right-0 mt-2 w-96 z-50 shadow-strong border-border max-h-96 overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">
              Carrito ({state.itemCount})
            </h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
        </div>

        {/* Items */}
        <div className="max-h-64 overflow-y-auto">
          {state.items.map((item) => (
            <div key={item.id} className="p-4 border-b border-border last:border-b-0">
              <div className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg bg-muted"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-foreground line-clamp-1">
                    {item.name}
                  </h4>
                  
                  {item.specifications && (
                    <div className="flex gap-1 mt-1">
                      {Object.entries(item.specifications).slice(0, 1).map(([key, value]) => (
                        <Badge key={key} variant="secondary" className="text-xs">
                          {key}: {value}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-primary">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-foreground">Total:</span>
            <span className="text-lg font-bold text-primary">
              {formatPrice(state.total)}
            </span>
          </div>
          
          <div className="space-y-2">
            <Link to="/carrito" onClick={onClose}>
              <Button variant="outline" className="w-full">
                <Eye className="h-4 w-4 mr-2" />
                Ver Carrito
              </Button>
            </Link>
            
            <Link to="/checkout" onClick={onClose}>
              <Button className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
                Finalizar Compra
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniCart;