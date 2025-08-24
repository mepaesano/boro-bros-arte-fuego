import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { 
  Menu, 
  ShoppingCart, 
  Phone,
  Minus,
  Plus,
  Trash2
} from "lucide-react";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { state, updateQuantity, removeFromCart } = useCart();
  
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/tienda" },
    { name: "¿Qué es el Borosilicato?", href: "/borosilicato" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre Boro Bros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-beige-primary/95 backdrop-blur-md border-b border-brown-dark/20 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <img 
                src="/lovable-uploads/31c20fc6-abb9-43cf-8ee6-aa72e025d570.png" 
                alt="BoroBros - Pioneros en Borosilicato" 
                className="h-12 w-auto max-w-[200px] object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
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
                {state.itemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs"
                  >
                    {state.itemCount}
                  </Badge>
                )}
              </Button>

              {/* View Cart Button */}
              <Link to="/carrito">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hidden sm:flex"
                >
                  Ver Carrito
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col gap-4 mt-6">
                    <Link to="/" className="flex items-center pb-4 border-b">
                      <img 
                        src="/lovable-uploads/31c20fc6-abb9-43cf-8ee6-aa72e025d570.png" 
                        alt="BoroBros - Pioneros en Borosilicato" 
                        className="h-10 w-auto max-w-[160px] object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </Link>
                    
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
        {isCartOpen && state.itemCount > 0 && (
          <div 
            className="absolute top-full right-4 w-96 bg-card border border-border rounded-lg shadow-strong p-4 z-50 max-h-96 overflow-y-auto"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <h3 className="font-semibold mb-3">Carrito ({state.itemCount} productos)</h3>
            <div className="space-y-3 mb-4">
              {state.items.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-2 bg-secondary rounded">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded bg-muted"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatPrice(item.price)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={(e) => {
                        e.preventDefault();
                        updateQuantity(item.id, Math.max(0, item.quantity - 1));
                      }}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-xs w-6 text-center">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={(e) => {
                        e.preventDefault();
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-destructive"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(item.id);
                      }}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
              {state.items.length > 3 && (
                <p className="text-xs text-muted-foreground text-center">
                  y {state.items.length - 3} productos más...
                </p>
              )}
            </div>
            <Separator className="my-3" />
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg text-primary">{formatPrice(state.total)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/carrito">
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Carrito
                  </Button>
                </Link>
                <Link to="/checkout">
                  <Button size="sm" className="w-full bg-tertiary hover:bg-tertiary-hover text-tertiary-foreground">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;