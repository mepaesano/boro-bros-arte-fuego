import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, Eye, X } from 'lucide-react';
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

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 w-full max-w-md h-full bg-background border-l border-border shadow-strong z-50 transform transition-transform">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-foreground text-lg">
            Tu carrito ({state.itemCount})
          </h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="min-h-[48px] min-w-[48px]"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {state.items.length === 0 ? (
          /* Empty Cart */
          <div className="p-6 text-center flex-1 flex flex-col justify-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Carrito vacío</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Agrega productos para continuar
            </p>
            <Link to="/tienda" onClick={onClose}>
              <Button className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground min-h-[48px]">
                Ver Productos
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto max-h-[calc(100vh-220px)]">
              {state.items.map((item) => (
                <div key={item.id} className="p-4 border-b border-border">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-muted"
                      loading="lazy"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground line-clamp-2 leading-tight">
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
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Aumentar cantidad"
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
                            className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Eliminar producto"
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
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-foreground">Total:</span>
                <span className="text-xl font-bold text-primary">
                  {formatPrice(state.total)}
                </span>
              </div>
              
              <div className="space-y-2">
                <Link to="/carrito" onClick={onClose}>
                  <Button variant="outline" className="w-full min-h-[48px]">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Carrito
                  </Button>
                </Link>
                
                <Link to="/checkout" onClick={onClose}>
                  <Button className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground min-h-[48px]">
                    Finalizar Compra
                  </Button>
                </Link>
              </div>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                Envío gratis desde $50.000
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MiniCart;