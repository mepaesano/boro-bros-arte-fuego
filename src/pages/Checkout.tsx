import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };

  const shippingCost = state.total >= 50000 ? 0 : 3500;
  const finalTotal = state.total + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMercadoPagoCheckout = async () => {
    // Validar campos requeridos
    const requiredFields = ['email', 'firstName', 'lastName', 'phone', 'address', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simular proceso de checkout con MercadoPago
      // En producción aquí iría la integración real con MercadoPago API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Crear URL de MercadoPago (simulado)
      const mercadoPagoUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=123456789&source=link`;
      
      // Abrir MercadoPago en nueva pestaña
      window.open(mercadoPagoUrl, '_blank');
      
      toast({
        title: "Redirigiendo a MercadoPago",
        description: "Se abrió una nueva pestaña para completar el pago",
      });
      
      // Limpiar carrito después del checkout exitoso
      setTimeout(() => {
        clearCart();
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error en el checkout",
        description: "Hubo un problema al procesar tu pedido. Intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-heading font-bold text-primary mb-4">
                No hay productos para checkout
              </h1>
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
              <Link to="/carrito" className="inline-flex items-center text-tertiary hover:text-tertiary-hover mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al carrito
              </Link>
              
              <h1 className="text-4xl font-heading font-bold text-primary mb-2">
                Finalizar Compra
              </h1>
              <p className="text-muted-foreground">
                Completa tus datos para procesar el pedido
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-tertiary" />
                      Información de Contacto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Juan"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Pérez"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+54 11 1234-5678"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-tertiary" />
                      Dirección de Envío
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Dirección *</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Av. Corrientes 1234"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Ciudad *</Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="Buenos Aires"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Código Postal</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          placeholder="1414"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Notas adicionales</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Instrucciones especiales para la entrega..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-tertiary" />
                      Método de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-card p-6 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">MP</span>
                        </div>
                        <div>
                          <p className="font-semibold">MercadoPago</p>
                          <p className="text-sm text-muted-foreground">
                            Pago seguro con débito y crédito
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['Visa', 'Mastercard', 'Amex', 'Cabal', 'Naranja', 'Shopping', 'Nativa'].map((card) => (
                          <Badge key={card} variant="outline" className="text-xs">
                            {card}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        <span>Transacciones protegidas con encriptación SSL</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Resumen del Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Items */}
                    <div className="space-y-3">
                      {state.items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded bg-muted"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Cantidad: {item.quantity}
                            </p>
                            <p className="text-sm font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Separator />
                    
                    {/* Totals */}
                    <div className="space-y-2">
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
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(finalTotal)}</span>
                      </div>
                    </div>
                    
                    {/* Checkout Button */}
                    <Button
                      size="lg"
                      className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground"
                      onClick={handleMercadoPagoCheckout}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        'Procesando...'
                      ) : (
                        <>
                          <CreditCard className="h-5 w-5 mr-2" />
                          Pagar con MercadoPago
                        </>
                      )}
                    </Button>
                    
                    {/* Security Notice */}
                    <div className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
                      <Shield className="h-4 w-4 mx-auto mb-2" />
                      Compra 100% segura y protegida
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

export default Checkout;