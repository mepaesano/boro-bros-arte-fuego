import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { state, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };

  const shippingCost = state.total >= 50000 ? 0 : 3500;
  const finalTotal = state.total + shippingCost;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <h1 className="text-3xl font-heading font-bold text-primary mb-4">
                Tu carrito está vacío
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Agrega productos a tu carrito para continuar con tu compra
              </p>
              
              <Link to="/tienda">
                <Button size="lg" className="bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Ir a la Tienda
                </Button>
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-heading font-bold text-primary mb-2">
                Carrito de Compras
              </h1>
              <p className="text-muted-foreground">
                {state.itemCount} {state.itemCount === 1 ? 'producto' : 'productos'} en tu carrito
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {state.items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg bg-muted"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {item.name}
                          </h3>
                          
                          {item.specifications && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {Object.entries(item.specifications).slice(0, 2).map(([key, value]) => (
                                <Badge key={key} variant="secondary" className="text-xs">
                                  {key}: {value}
                                </Badge>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-lg font-semibold text-primary">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {formatPrice(item.price)} c/u
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      Resumen del Pedido
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatPrice(state.total)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Envío</span>
                        <span>
                          {shippingCost === 0 ? (
                            <span className="text-tertiary font-medium">Gratis</span>
                          ) : (
                            formatPrice(shippingCost)
                          )}
                        </span>
                      </div>
                      
                      {state.total < 50000 && (
                        <div className="bg-tertiary/10 text-tertiary text-sm p-3 rounded-lg">
                          Envío gratis en compras desde {formatPrice(50000)}
                        </div>
                      )}
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(finalTotal)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Link to="/checkout">
                        <Button size="lg" className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
                          Ir al Checkout
                        </Button>
                      </Link>
                      
                      <Link to="/tienda">
                        <Button variant="outline" size="lg" className="w-full">
                          Seguir Comprando
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Payment Methods Preview */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">
                        Medios de pago aceptados:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Visa', 'Mastercard', 'Amex', 'Cabal', 'Naranja'].map((card) => (
                          <Badge key={card} variant="outline" className="text-xs">
                            {card}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;