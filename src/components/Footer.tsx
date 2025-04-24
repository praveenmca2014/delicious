
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-dd-orange">Delicious</span>
              <span>Delivery</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium corporate catering solutions for businesses of all sizes.
              Delivering exceptional food experiences for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-dd-orange p-2 rounded-full hover:opacity-80 transition-opacity">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-dd-orange p-2 rounded-full hover:opacity-80 transition-opacity">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-dd-orange p-2 rounded-full hover:opacity-80 transition-opacity">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-dd-orange p-2 rounded-full hover:opacity-80 transition-opacity">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-dd-orange transition-colors">Executive Dining</a>
              </li>
              <li>
                <a href="#" className="hover:text-dd-orange transition-colors">Corporate Events</a>
              </li>
              <li>
                <a href="#" className="hover:text-dd-orange transition-colors">Cafeteria Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-dd-orange transition-colors">Social Events</a>
              </li>
              <li>
                <a href="#" className="hover:text-dd-orange transition-colors">Menu Planning</a>
              </li>
              <li>
                <a href="#" className="hover:text-dd-orange transition-colors">Dietary Accommodations</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-dd-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-dd-orange transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-dd-orange transition-colors">Services</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-dd-orange transition-colors">Menu</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-dd-orange transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-dd-orange transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-dd-orange flex-shrink-0 mt-1" size={18} />
                <span>123 Corporate Plaza, Business District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-dd-orange flex-shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-dd-orange flex-shrink-0" size={18} />
                <span>info@deliciousdelivery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-dd-orange flex-shrink-0 mt-1" size={18} />
                <span>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 3pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Delicious Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
