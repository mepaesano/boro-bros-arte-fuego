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
    <footer className="bg-brown-dark text-primary-foreground" style={{ backgroundColor: 'hsl(25 40% 24%)' }}>
      {/* Main Footer - Compact */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Logo and Brand */}
            <div className="text-center mb-10">
              <img 
                src="/lovable-uploads/31c20fc6-abb9-43cf-8ee6-aa72e025d570.png" 
                alt="BoroBros Logo" 
                className="h-24 w-auto mx-auto mb-4 filter brightness-0 invert"
              />
              <h3 className="font-heading font-bold text-2xl mb-3 text-beige-primary" style={{ color: 'hsl(39 30% 90%)' }}>
                Boro Bros
              </h3>
              <p className="text-base opacity-95 max-w-lg mx-auto leading-relaxed" style={{ color: 'hsl(39 30% 85%)' }}>
                Pioneros en borosilicato en Argentina. Varillas, tubos y herramientas profesionales para soplado artístico.
              </p>
            </div>

            {/* Contact Info - Compact */}
            <div className="text-center mb-10">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2" style={{ color: 'hsl(39 30% 85%)' }}>
                  <MapPin className="w-4 h-4" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'hsl(39 30% 85%)' }}>
                  <Mail className="w-4 h-4" />
                  <span>hola@borobros.com.ar</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'hsl(39 30% 85%)' }}>
                  <Phone className="w-4 h-4" />
                  <span>+54 11 2333-81522</span>
                </div>
              </div>
            </div>

            {/* Payment and Shipping - Grid Layout */}
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              {/* Payment Methods */}
              <div className="text-center">
                <h4 className="font-semibold text-base mb-4 flex items-center justify-center gap-2" style={{ color: 'hsl(39 30% 90%)' }}>
                  <CreditCard className="w-5 h-5" />
                  Medios de Pago
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    'Visa', 'Mastercard', 'American Express', 'Cabal', 'Naranja', 'Maestro', 
                    'Banelco', 'Link', 'Argencard', 'Visa Débito', 'PagoFácil', 'Rapipago'
                  ].map((method, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs px-2 py-1 bg-background/15 border-primary-foreground/30 hover:bg-background/25 transition-colors"
                      style={{ color: 'hsl(39 30% 85%)', borderColor: 'hsl(39 30% 70%)' }}
                    >
                      {method}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Shipping Methods */}
              <div className="text-center">
                <h4 className="font-semibold text-base mb-4 flex items-center justify-center gap-2" style={{ color: 'hsl(39 30% 90%)' }}>
                  <Truck className="w-5 h-5" />
                  Formas de Envío
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge 
                    variant="outline" 
                    className="px-3 py-1 bg-background/15 border-primary-foreground/30"
                    style={{ color: 'hsl(39 30% 85%)', borderColor: 'hsl(39 30% 70%)' }}
                  >
                    Andreani
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="px-3 py-1 bg-background/15 border-primary-foreground/30"
                    style={{ color: 'hsl(39 30% 85%)', borderColor: 'hsl(39 30% 70%)' }}
                  >
                    Correo Argentino
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="px-3 py-1 bg-background/15 border-primary-foreground/30"
                    style={{ color: 'hsl(39 30% 85%)', borderColor: 'hsl(39 30% 70%)' }}
                  >
                    OCA
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4" style={{ borderColor: 'hsl(39 30% 60%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-sm" style={{ color: 'hsl(39 30% 80%)' }}>
            © {currentYear} Boro Bros. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;