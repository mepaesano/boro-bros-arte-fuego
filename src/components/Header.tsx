import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  ShoppingCart, 
  Search, 
  Phone,
  Truck,
  CreditCard
} from "lucide-react";

const Header = () => {
  const [cartCount, setCartCount] = useState(3);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/tienda" },
    { name: "Herramientas", href: "/tienda?filter=herramientas" },
    { name: "Blog", href: "/blog" },
    { name: "¿Qué es el Borosilicato?", href: "/borosilicato" },
    { name: "Sobre Boro Bros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "https://api.whatsapp.com/send/?phone=5491133381522&text=Hola,+quisiera+hacer+una+consulta+sobre+vidrio+borosilicato" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Top Banner - Fixed */}
      <div className="bg-brown-dark text-white py-2 px-4 text-center text-sm font-medium fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            <span>Envío gratis a todo el país en compras superiores a $50.000</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>Pago seguro con MercadoPago</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-8 z-40 bg-beige-primary/95 backdrop-blur-md border-b border-brown-dark/20 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/logo-boro-bros.png" 
                alt="Boro Bros Logo" 
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <h2 className="font-heading font-bold text-lg text-primary">
                  Boro Bros
                </h2>
                <p className="text-xs text-muted-foreground -mt-1">
                  Pioneros en Borosilicato
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary ${
                    isActive(item.href)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">

              {/* Phone */}
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Phone className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onMouseEnter={() => setIsCartOpen(true)}
                onMouseLeave={() => setIsCartOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col gap-4 mt-6">
                    <div className="flex items-center gap-3 pb-4 border-b">
                      <img 
                        src="/lovable-uploads/logo-boro-bros.png" 
                        alt="Boro Bros" 
                        className="h-8 w-auto"
                      />
                      <div>
                        <h3 className="font-heading font-bold text-primary">
                          Boro Bros
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Pioneros en Borosilicato
                        </p>
                      </div>
                    </div>
                    
                    <nav className="flex flex-col gap-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive(item.href)
                              ? "text-primary bg-secondary"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Mini Cart Hover */}
        {isCartOpen && cartCount > 0 && (
          <div 
            className="absolute top-full right-4 w-80 bg-card border border-border rounded-lg shadow-strong p-4 z-50"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <h3 className="font-semibold mb-3">Carrito ({cartCount} productos)</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 p-2 bg-secondary rounded">
                <div className="w-12 h-12 bg-muted rounded"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Varilla 8mm Azul</p>
                  <p className="text-xs text-muted-foreground">$12.500 x 2</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg text-primary">$25.000</span>
              </div>
              <Button className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
                Ver Carrito
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;