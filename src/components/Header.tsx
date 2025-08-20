import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Tienda', href: '/tienda' },
    { name: 'Blog', href: '/blog' },
    { name: '¿Qué es el Borosilicato?', href: '/borosilicato' },
    { name: 'Sobre Boro Bros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass fixed top-0 w-full z-50 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-medium">
              <span className="text-primary-foreground font-bold text-xl">BB</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-heading font-bold text-primary">Boro Bros</h1>
              <p className="text-sm text-muted-foreground">Pioneros en Borosilicato</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-tertiary ${
                  isActive(item.href) ? 'text-tertiary font-semibold' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-tertiary text-tertiary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth">
              Envío Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth hover:text-tertiary px-4 py-2 rounded-lg ${
                    isActive(item.href) 
                      ? 'text-tertiary font-semibold bg-secondary/50' 
                      : 'text-foreground hover:bg-secondary/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border/50">
                <Button size="sm" className="w-full bg-gradient-hero text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Carrito (0)
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;