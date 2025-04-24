import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      category: "Executive Platters",
      items: [
        {
          name: "Gourmet Sandwich Platter",
          description: "Assortment of premium sandwiches with artisan breads and fillings",
          price: "$120",
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Mediterranean Mezze",
          description: "Selection of hummus, baba ganoush, tabbouleh, and pita bread",
          price: "$95",
          image: "https://images.unsplash.com/photo-1543340904-0b1d843bccda?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Charcuterie Board",
          description: "Premium cured meats, artisan cheeses, nuts, and dried fruits",
          price: "$150",
          image: "https://images.unsplash.com/photo-1576007594790-2c73df2cd761?auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="section bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')] bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-dd-orange font-medium mb-2">Explore Our Food</p>
          <h2 className="text-white text-4xl font-bold mb-4">Popular Dishes</h2>
          <p className="max-w-3xl mx-auto text-white/80">
            Discover our most popular dishes crafted with premium ingredients and culinary expertise.
            Customize your menu to suit your corporate event needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories[0].items.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-white/95 hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pt-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-dd-orange font-bold text-xl">{item.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-dd-orange hover:bg-dd-orange/90 group">
                  Add to Quote
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-full group">
            View Full Menu
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
