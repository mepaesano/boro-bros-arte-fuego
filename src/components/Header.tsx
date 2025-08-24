import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MiniCart from "@/components/MiniCart";
import { 
  Menu, 
  ShoppingCart, 
  MessageCircle
} from "lucide-react";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();
  
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/tienda" },
    { name: "Borosilicato", href: "/borosilicato" },
    { name: "Nosotros", href: "/sobre-nosotros" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleNavClick = () => {
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={handleNavClick}
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
                  onClick={handleNavClick}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary min-h-[48px] flex items-center ${
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
              {/* WhatsApp */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex min-h-[48px] min-w-[48px]"
                asChild
              >
                <a 
                  href="https://api.whatsapp.com/send/?phone=5491133381522&text=Hola%2C+quiero+consultar+sobre+vidrio+borosilicato"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chatear por WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>

              {/* Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative min-h-[48px] min-w-[48px]"
                onClick={handleCartClick}
                aria-label={`Abrir carrito (${state.itemCount} productos)`}
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-destructive text-destructive-foreground"
                  >
                    {state.itemCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="lg:hidden min-h-[48px] min-w-[48px]"
                    aria-label="Abrir menú de navegación"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col gap-4 mt-6">
                    <Link to="/" className="flex items-center pb-4 border-b" onClick={handleNavClick}>
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
                          onClick={handleNavClick}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[48px] flex items-center ${
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
      </header>

      {/* Mini Cart Drawer */}
      <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;