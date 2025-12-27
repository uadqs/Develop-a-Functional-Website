import { ArrowRight, Clock, Award, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'All our products are baked fresh every morning using traditional methods.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest organic ingredients sourced from local farmers.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every item is handcrafted by our experienced bakers with passion and care.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6 text-amber-900">
                Freshly Baked Goodness Every Day
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Welcome to Artisan Bakery, where traditional baking meets modern excellence. 
                Discover our wide selection of handcrafted breads, pastries, and desserts made 
                with love and the finest ingredients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => onNavigate('products')}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg"
                >
                  View Our Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                alt="Freshly baked artisan bread and pastries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Why Choose Artisan Bakery?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're committed to bringing you the finest baked goods with exceptional 
            quality and service.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow bg-white border border-gray-200"
              >
                <div className="inline-flex p-4 bg-amber-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Our Specialties
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Handpicked favorites that our customers love
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Sourdough Bread',
                image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&q=80',
                description: 'Traditional sourdough with a perfect crust',
              },
              {
                name: 'Croissants',
                image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
                description: 'Buttery, flaky, and golden perfection',
              },
              {
                name: 'Artisan Cakes',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
                description: 'Custom cakes for every occasion',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={() => onNavigate('products')}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg"
            >
              See All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Come experience the aroma of freshly baked bread and the taste of artisan excellence. 
            We're open daily from 7 AM to 7 PM.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-6 text-lg"
          >
            Get Directions
          </Button>
        </div>
      </section>
    </div>
  );
}
