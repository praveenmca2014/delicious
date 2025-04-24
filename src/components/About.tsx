
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-dd-orange font-medium mb-2">About Us</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We pride ourselves on making real food from the best ingredients
            </h2>
            <p className="text-gray-600 mb-6">
              For over a decade, Delicious Delivery has been the trusted partner for corporate dining solutions across the country. 
              We understand that food is more than just sustenance—it's about creating moments that foster connection, productivity, and satisfaction.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert chefs and service professionals are dedicated to exceeding expectations with every meal we serve. 
              Using only the finest ingredients, we craft delicious, nutritious options that cater to diverse dietary needs and preferences.
            </p>
            <p className="text-gray-600 mb-8">
              From daily cafeteria operations to elegant executive dining and special events, we bring culinary excellence 
              and professional service to your workplace.
            </p>
            <Button className="bg-dd-orange hover:bg-dd-orange/90">Learn More</Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/bafd7ad6-a77c-48fb-b3a5-61d7dd5ca47c.png" 
                  alt="Delicious food hamburger and fries" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dd-orange rounded-lg p-4 text-white w-40 h-40 flex flex-col items-center justify-center shadow-lg">
                <span className="text-4xl font-bold">10+</span>
                <span className="text-center">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
