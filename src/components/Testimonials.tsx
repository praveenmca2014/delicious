
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Delicious Delivery transformed our corporate events with their exceptional catering. The food is always fresh, beautifully presented, and delicious. Their service is impeccable.",
      author: "Sarah Johnson",
      position: "HR Director, Tech Solutions Inc.",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=1"
    },
    {
      content: "Our team looks forward to lunch every day since we partnered with Delicious Delivery for our cafeteria. Great variety, healthy options, and the quality is consistent.",
      author: "Michael Roberts",
      position: "CEO, Innovate Corp",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=3"
    },
    {
      content: "The executive dining experience provided by Delicious Delivery has helped us impress clients and close deals. Their attention to detail and flexibility are outstanding.",
      author: "Jennifer Chen",
      position: "Sales Director, Global Enterprises",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=5"
    }
  ];

  return (
    <section id="testimonials" className="section bg-testimonial-pattern bg-cover bg-fixed bg-center">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-dd-orange font-medium mb-2">Testimonials</p>
          <h2 className="text-white text-4xl font-bold mb-4">Our Customers Say</h2>
          <p className="max-w-3xl mx-auto text-white/80">
            Don't just take our word for it. Here's what our corporate clients have to say about our food and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-xl">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-dd-orange text-dd-orange h-4 w-4" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
