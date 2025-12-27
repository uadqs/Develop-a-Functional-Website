import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount: number;
  onCartOpen: () => void;
}

export function Navigation({ currentPage, onNavigate, cartItemCount, onCartOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="font-bold text-2xl text-amber-700 hover:text-amber-800 transition-colors"
              aria-label="Artisan Bakery home"
            >
              🥖 Artisan Bakery
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-100 text-amber-900'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-900'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartOpen}
              className="relative p-2 hover:bg-amber-50 rounded-full transition-colors"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <ShoppingCart className="w-6 h-6 text-amber-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-amber-50 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4" role="menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md my-1 transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-100 text-amber-900'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-900'
                }`}
                role="menuitem"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
