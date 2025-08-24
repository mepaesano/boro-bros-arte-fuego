import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'Diners', 'Banelco', 'Cabal', 
    'Link', 'Tarjeta Naranja', 'Tarjeta Shopping', 'Nativa', 'Cencosud', 
    'Argencard', 'Cabal Débito', 'ProvinciaNet', 'Maestro', 'Visa Débito', 
    'PagoFácil', 'Rapipago'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-tertiary text-tertiary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Suscríbete a nuestro newsletter
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Recibe consejos exclusivos, tutoriales y descuentos especiales. 
              <strong> ¡Regalo: Guía gratuita "Primeros pasos en vidrio a la flama"!</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Tu email aquí..."
                className="flex-1 bg-tertiary-foreground text-tertiary border-0 h-12"
              />
              <Button 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 h-12"
              >
                Suscribirme
              </Button>
            </div>
            
            <p className="text-xs mt-3 opacity-75">
              No enviamos spam. Puedes darte de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer - Simplified */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo and Brand */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/31c20fc6-abb9-43cf-8ee6-aa72e025d570.png" 
                alt="BoroBros Logo" 
                className="h-16 w-auto mx-auto mb-4 filter brightness-0 invert"
              />
              <h3 className="font-heading font-bold text-2xl mb-2">
                Boro Bros
              </h3>
              <p className="text-lg font-medium mb-3">
                Pioneros en Borosilicato
              </p>
              <p className="text-sm opacity-75 max-w-lg mx-auto">
                Pioneros en borosilicato. Varillas, tubos y herramientas para soplado artístico. Envíos a todo el país.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Medios de Pago
              </h4>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {paymentMethods.map((method, index) => (
                  <span key={index} className="bg-secondary/20 px-2 py-1 rounded text-primary-foreground/80">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Shipping Methods */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Formas de Envío
              </h4>
              <div className="flex justify-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Truck className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-xs">Correo Argentino</span>
                </div>
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Truck className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-xs">OCA</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>hola@borobros.com.ar</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+54 11 3338-1522</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-3 mb-8">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-primary-foreground/10 text-primary-foreground"
                asChild
              >
                <a href="https://instagram.com/borobros_ar" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-primary-foreground/10 text-primary-foreground"
                asChild
              >
                <a href="https://facebook.com/borobros.ar" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-primary-foreground/10 text-primary-foreground"
                asChild
              >
                <a href="https://youtube.com/@borobros" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm opacity-75">
            © {currentYear} Boro Bros. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;