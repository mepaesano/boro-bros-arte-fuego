import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">BB</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Boro Bros</h3>
                <p className="text-sm opacity-80">Pioneros en Borosilicato</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              La primera tienda en Argentina dedicada exclusivamente al vidrio borosilicato 
              y herramientas para soplado artístico.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/tienda" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Catálogo de Productos
              </Link>
              <Link to="/borosilicato" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                ¿Qué es el Borosilicato?
              </Link>
              <Link to="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Blog Educativo
              </Link>
              <Link to="/sobre-nosotros" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Sobre Boro Bros
              </Link>
              <Link to="/contacto" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Productos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Productos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/tienda?categoria=varillas" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Varillas de Borosilicato
              </Link>
              <Link to="/tienda?categoria=tubos" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Tubos de Borosilicato
              </Link>
              <Link to="/tienda?categoria=herramientas" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Herramientas de Soplado
              </Link>
              <Link to="/tienda?categoria=accesorios" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Accesorios
              </Link>
              <Link to="/tienda?categoria=quemadores" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Quemadores
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">info@borobros.com.ar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-3">Síguenos</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 Boro Bros. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link to="/terminos" className="hover:opacity-100 transition-opacity">
                Términos y Condiciones
              </Link>
              <Link to="/privacidad" className="hover:opacity-100 transition-opacity">
                Política de Privacidad
              </Link>
              <Link to="/envios" className="hover:opacity-100 transition-opacity">
                Política de Envíos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Banner */}
      <div className="bg-tertiary text-tertiary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-sm font-medium">
              🚚 Envío gratis a todo el país en compras superiores a $50.000
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;