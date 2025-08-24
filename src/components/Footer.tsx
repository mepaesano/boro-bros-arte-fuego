import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin,
  Mail,
  Phone,
  CreditCard,
  Truck
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer - Compact */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Logo and Brand */}
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/31c20fc6-abb9-43cf-8ee6-aa72e025d570.png" 
                alt="BoroBros Logo" 
                className="h-12 w-auto mx-auto mb-3 filter brightness-0 invert"
              />
              <h3 className="font-heading font-bold text-xl mb-2">
                Boro Bros
              </h3>
              <p className="text-sm opacity-90 max-w-md mx-auto">
                Pioneros en borosilicato en Argentina · Varillas, tubos y herramientas para soplado artístico.
              </p>
            </div>

            {/* Contact Info - Compact */}
            <div className="text-center mb-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Buenos Aires</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>hola@borobros.com.ar</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+54 11 2333-81522</span>
                </div>
              </div>
            </div>

            {/* Payment and Shipping - Grid Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Payment Methods */}
              <div className="text-center">
                <h4 className="font-semibold text-sm mb-3 flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Medios de Pago
                </h4>
                <div className="flex flex-wrap justify-center gap-1 text-xs">
                  {[
                    'Visa', 'Mastercard', 'Amex', 'Cabal', 'Naranja', 'Maestro', 
                    'Banelco', 'Link', 'Nativa', 'Cencosud', 'Argencard', 'ProvinciaNet', 
                    'Visa Débito', 'PagoFácil', 'Rapipago'
                  ].map((method, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-background/10 text-primary-foreground border-primary-foreground/20">
                      {method}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Shipping Methods */}
              <div className="text-center">
                <h4 className="font-semibold text-sm mb-3 flex items-center justify-center gap-2">
                  <Truck className="w-4 h-4" />
                  Formas de Envío
                </h4>
                <div className="flex justify-center gap-3">
                  <Badge variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/20">
                    api_1152
                  </Badge>
                  <Badge variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/20">
                    api_3336
                  </Badge>
                </div>
              </div>
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