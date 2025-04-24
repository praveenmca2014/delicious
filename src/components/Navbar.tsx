
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-dd-orange">Delicious</span>
                <span className="text-gray-800">Delivery</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-dd-orange transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-dd-orange transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-dd-orange transition-colors">
              Services
            </a>
            <a href="#menu" className="text-gray-700 hover:text-dd-orange transition-colors">
              Menu
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-dd-orange transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-dd-orange transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-dd-orange hover:bg-dd-orange/90">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-4">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-dd-orange"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-dd-orange"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-dd-orange"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#menu"
              className="block py-2 text-gray-700 hover:text-dd-orange"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-700 hover:text-dd-orange"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-dd-orange"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="w-full bg-dd-orange hover:bg-dd-orange/90">Get a Quote</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
