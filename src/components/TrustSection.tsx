import { Shield, Truck, CreditCard, Phone, Award, Users } from "lucide-react";

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Pago 100% Seguro",
      description: "MercadoPago protege tus datos",
      color: "text-tertiary"
    },
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "En compras desde $50.000",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      title: "12 Cuotas sin Interés",
      description: "Con todas las tarjetas",
      color: "text-soft"
    },
    {
      icon: Phone,
      title: "Atención Personalizada",
      description: "Asesoramiento técnico experto",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Vidrio borosilicato certificado",
      color: "text-tertiary"
    },
    {
      icon: Users,
      title: "Comunidad de Artistas",
      description: "Más de 500 clientes satisfechos",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por qué elegir Boro Bros?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de cientos de artistas y talleres en toda Argentina 
            nos respalda como líderes en vidrio borosilicato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card hover:bg-card/80 border border-border/50 rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-heading mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground">
              Clientes Satisfechos
            </div>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl font-bold text-tertiary font-heading mb-2">
              1000+
            </div>
            <div className="text-sm text-muted-foreground">
              Productos Entregados
            </div>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent font-heading mb-2">
              24h
            </div>
            <div className="text-sm text-muted-foreground">
              Tiempo de Respuesta
            </div>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl font-bold text-soft font-heading mb-2">
              98%
            </div>
            <div className="text-sm text-muted-foreground">
              Recomendación
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;