
import { UtensilsCrossed, Coffee, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <UtensilsCrossed className="text-dd-orange h-12 w-12 mb-4" />,
      title: 'Executive Dining',
      description: 'Premium catering services for executive meetings, board rooms, and VIP events with elegant presentation and exceptional quality.'
    },
    {
      icon: <Calendar className="text-dd-orange h-12 w-12 mb-4" />,
      title: 'Corporate Events',
      description: 'Full-service catering for conferences, seminars, product launches, and corporate celebrations with customized menu options.'
    },
    {
      icon: <Coffee className="text-dd-orange h-12 w-12 mb-4" />,
      title: 'Cafeteria Service',
      description: 'Daily cafeteria management with diverse, nutritious, and delicious meal options for your employees at competitive prices.'
    },
    {
      icon: <Users className="text-dd-orange h-12 w-12 mb-4" />,
      title: 'Social Events',
      description: 'Memorable catering for company parties, holiday celebrations, team-building events, and milestone celebrations.'
    }
  ];

  return (
    <section id="services" className="section bg-dd-peach/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-dd-orange font-medium mb-2">Our Offerings</p>
          <h2 className="text-4xl font-bold mb-4">Premium Corporate <span className="text-dd-orange">Food Services</span></h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We provide exceptional food services tailored to your corporate needs, ensuring quality, 
            convenience, and memorable dining experiences for your team and clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <CardTitle className="mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
