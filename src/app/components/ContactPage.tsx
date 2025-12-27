import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'general',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Store form submission in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Show success message
    toast.success('Thank you! We\'ll get back to you within 24 hours.');
    setFormSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderType: 'general',
      message: '',
    });

    // Reset submitted state after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, want to place a custom 
            order, or just want to say hello, get in touch with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-6 text-gray-900">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-full">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Baker Street<br />
                    Downtown District<br />
                    Seattle, WA 98101
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-full">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+12065551234" className="hover:text-amber-700 transition-colors">
                      (206) 555-1234
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Monday - Friday: 7am - 7pm<br />
                    Saturday - Sunday: 8am - 6pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-full">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:hello@artisanbakery.com" className="hover:text-amber-700 transition-colors">
                      hello@artisanbakery.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-full">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Map View</p>
                  <p className="text-sm">123 Baker Street, Seattle, WA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl mb-6 text-gray-900">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="John Doe"
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="john@example.com"
                  aria-required="true"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Phone Number (Optional)
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="(206) 555-0123"
                />
              </div>

              {/* Order Type */}
              <div>
                <label htmlFor="orderType" className="block text-sm mb-2 text-gray-700">
                  Inquiry Type
                </label>
                <select
                  id="orderType"
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="custom">Custom Order</option>
                  <option value="wedding">Wedding Cake</option>
                  <option value="catering">Catering Request</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Your Message <span className="text-red-600">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                  placeholder="Tell us about your inquiry or custom order requirements..."
                  aria-required="true"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6"
                disabled={formSubmitted}
              >
                {formSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                <span className="text-red-600">*</span> Required fields
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl mb-4 text-gray-900">
            Custom Orders & Catering
          </h2>
          <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
            Planning a special event? We offer custom cakes, pastries, and catering services for 
            weddings, corporate events, birthdays, and more. Contact us at least 2 weeks in advance 
            for custom orders to ensure availability.
          </p>
          <p className="text-gray-600">
            For urgent requests, please call us directly at (206) 555-1234
          </p>
        </div>
      </div>
    </div>
  );
}
