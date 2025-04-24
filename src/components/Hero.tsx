import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center min-h-[90vh] flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block bg-dd-orange/90 px-4 py-1 rounded-full mb-4">
            <p className="text-white font-medium text-sm">Premium Corporate Catering</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block mb-2">Always Delivering</span>
            <span className="text-dd-orange">Amazing</span>
            <span className="text-white"> Experience</span>
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl leading-relaxed">
            Elevate your corporate dining experience with our premium catering services.
            From executive meetings to large corporate events, we deliver exceptional food
            that impresses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-dd-orange hover:bg-dd-orange/90 text-white px-8 py-6 rounded-full group">
              Request Quote
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-full">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
