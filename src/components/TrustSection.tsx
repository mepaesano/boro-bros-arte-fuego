import { Shield, Truck, HeadphonesIcon, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <CreditCard className="h-8 w-8 text-cta-primary" />,
      title: 'Pago Seguro',
      description: 'MercadoPago con todas las tarjetas de débito y crédito'
    },
    {
      icon: <Truck className="h-8 w-8 text-tertiary" />,
      title: 'Envío Gratis',
      description: 'A todo el país en compras superiores a $50.000'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-accent" />,
      title: 'Atención Personalizada',
      description: 'Asesoramiento técnico especializado para artistas'
    },
    {
      icon: <Shield className="h-8 w-8 text-soft" />,
      title: 'Calidad Garantizada',
      description: 'Vidrio borosilicato premium certificado coeficiente 33'
    }
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="glass border-border/50 hover:border-tertiary/50 transition-smooth group text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;