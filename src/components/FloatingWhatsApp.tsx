import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg animate-pulse transition-all"
        asChild
      >
        <a 
          href="https://api.whatsapp.com/send/?phone=5491133381522&text=Hola,+quisiera+hacer+una+consulta+sobre+vidrio+borosilicato" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Escribinos por WhatsApp"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;