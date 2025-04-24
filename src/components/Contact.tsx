import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real application, you would send this to your backend
      console.log('Form submitted:', formData);
      
      // Simulate sending email
      const emailData = {
        to: 'sakeelrabimohamed@gmail.com',
        subject: `New Contact Form Submission: ${formData.subject}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Message: ${formData.message}
        `
      };
      
      console.log('Email would be sent to:', emailData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll respond to your message soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-dd-orange font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold mb-4">Contact <span className="text-dd-orange">Us</span></h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Have questions about our services or want to request a quote? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-dd-peach/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-dd-orange rounded-full p-3 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">info@deliciousdelivery.com</p>
                  <p className="text-gray-600">sales@deliciousdelivery.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dd-orange rounded-full p-3 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dd-orange rounded-full p-3 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-600">123 Corporate Plaza</p>
                  <p className="text-gray-600">Business District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dd-orange rounded-full p-3 text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-600">Saturday: 9am - 3pm</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full bg-dd-orange hover:bg-dd-orange/90 py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
