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
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: "Varillas de Borosilicato", href: "/tienda/varillas-borosilicato" },
    { name: "Tubos de Borosilicato", href: "/tienda/tubos-borosilicato" },
    { name: "Herramientas de Soplado", href: "/tienda/herramientas-soplado" },
    { name: "Colores Artísticos", href: "/tienda/colores" },
    { name: "Accesorios", href: "/tienda/accesorios" }
  ];

  const helpLinks = [
    { name: "Preguntas Frecuentes", href: "/faq" },
    { name: "Guía de Envíos", href: "/envios" },
    { name: "Cambios y Devoluciones", href: "/devoluciones" },
    { name: "Medios de Pago", href: "/medios-de-pago" },
    { name: "Seguimiento de Pedido", href: "/seguimiento" }
  ];

  const companyLinks = [
    { name: "Sobre Boro Bros", href: "/sobre-nosotros" },
    { name: "Nuestra Historia", href: "/historia" },
    { name: "Contacto", href: "/contacto" },
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Política de Privacidad", href: "/privacidad" }
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

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/lovable-uploads/logo-boro-bros.png" 
                  alt="Boro Bros Logo" 
                  className="h-12 w-auto filter brightness-0 invert"
                />
                <div>
                  <h3 className="font-heading font-bold text-xl">
                    Boro Bros
                  </h3>
                  <p className="text-sm opacity-75">
                    Pioneros en Borosilicato
                  </p>
                </div>
              </div>
              
              <p className="text-sm opacity-75 mb-6 max-w-md">
                La primera tienda argentina especializada en vidrio borosilicato 
                y herramientas para soplado artístico. Calidad premium, 
                atención personalizada y envíos a todo el país.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 opacity-75" />
                  <span>+54 11 2345-6789</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 opacity-75" />
                  <span>hola@borobros.com.ar</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 opacity-75" />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3">
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
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary-foreground/10 text-primary-foreground"
                  asChild
                >
                  <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">
                Tienda
              </h4>
              <ul className="space-y-2">
                {shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">
                Ayuda
              </h4>
              <ul className="space-y-2">
                {helpLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">
                Compañía
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-75">
              © {currentYear} Boro Bros. Todos los derechos reservados.
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-xs opacity-75">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Sitio Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span>MercadoPago</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Envío Gratis +$50k</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Floating Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg animate-pulse"
              asChild
            >
              <a 
                href="https://wa.me/5491123456789?text=Hola! Tengo una consulta sobre vidrio borosilicato" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Escribinos por WhatsApp"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;