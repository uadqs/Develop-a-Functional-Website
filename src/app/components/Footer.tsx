import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4 text-amber-400">
              Artisan Bakery
            </h3>
            <p className="text-gray-300 text-sm">
              Handcrafted baked goods made with passion and the finest ingredients since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4 text-amber-400">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Baker Street<br />
                  Seattle, WA 98101
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+12065551234" className="text-gray-300 hover:text-amber-400 transition-colors">
                  (206) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@artisanbakery.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  hello@artisanbakery.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-xl mb-4 text-amber-400">Hours</h3>
            <ul className="space-y-1 text-sm text-gray-300 mb-6">
              <li>Mon-Fri: 7am - 7pm</li>
              <li>Sat-Sun: 8am - 6pm</li>
            </ul>
            <h3 className="text-xl mb-4 text-amber-400">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Artisan Bakery. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
