import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Package, Truck, ArrowLeft, Download } from 'lucide-react';

const ThankYou = () => {
  const { state, clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful purchase
    const timer = setTimeout(() => {
      clearCart();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [clearCart]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('es-AR');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              
              <h1 className="text-4xl font-heading font-bold text-primary mb-4">
                ¡Compra Realizada con Éxito!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                Gracias por elegirnos. Tu pedido ha sido confirmado y procesado.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm">
                <Badge className="bg-tertiary text-tertiary-foreground px-4 py-2">
                  Pedido #{orderNumber}
                </Badge>
                <span className="text-muted-foreground">
                  Fecha: {new Date().toLocaleDateString('es-AR')}
                </span>
              </div>
            </div>

            {/* Order Summary */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">
                  Resumen del Pedido
                </h3>
                
                {state.items.length > 0 ? (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-4 py-3 border-b border-border last:border-b-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg bg-muted"
                        />
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Cantidad: {item.quantity}
                          </p>
                          {item.specifications && (
                            <div className="flex gap-2 mt-1">
                              {Object.entries(item.specifications).slice(0, 2).map(([key, value]) => (
                                <Badge key={key} variant="secondary" className="text-xs">
                                  {key}: {value}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <p className="font-semibold text-primary">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{formatPrice(state.total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Envío:</span>
                        <span className="text-tertiary font-medium">Gratis</span>
                      </div>
                      <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
                        <span>Total:</span>
                        <span className="text-primary">{formatPrice(state.total)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    El carrito se ha limpiado después de la compra exitosa.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Next Steps */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="h-12 w-12 text-tertiary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Preparación del Pedido</h3>
                  <p className="text-sm text-muted-foreground">
                    Tu pedido será preparado y empacado con cuidado en las próximas 24-48 horas.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-tertiary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Envío y Entrega</h3>
                  <p className="text-sm text-muted-foreground">
                    Fecha estimada de entrega: <strong>{estimatedDelivery}</strong>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Información de Contacto y Seguimiento</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Email:</strong> Recibirás un email de confirmación con los detalles de seguimiento.
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> Para consultas urgentes, contáctanos al{' '}
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5491133381522&text=Hola,+quisiera+consultar+sobre+mi+pedido"
                      className="text-tertiary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +54 11 3338-1522
                    </a>
                  </p>
                  <p>
                    <strong>Horarios de atención:</strong> Lunes a Viernes 9:00 - 18:00
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
              
              <Button size="lg" asChild>
                <Link to="/tienda">
                  Seguir Comprando
                </Link>
              </Button>
              
              <Button variant="outline" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Descargar Factura
              </Button>
            </div>

            {/* Follow Us */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">¡Síguenos en Redes Sociales!</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Mantente al día con nuevos productos, tutoriales y contenido exclusivo sobre vidrio borosilicato.
              </p>
              
              <div className="flex justify-center gap-4">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Instagram
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Facebook
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  YouTube
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;