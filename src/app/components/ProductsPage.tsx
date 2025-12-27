import { useState, useEffect } from 'react';
import { ShoppingCart, Search, ListFilter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
}

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

export function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Classic Sourdough',
      category: 'Breads',
      price: 6.99,
      description: 'Traditional sourdough with a crispy crust and soft interior',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&q=80',
      inStock: true,
    },
    {
      id: 2,
      name: 'Butter Croissant',
      category: 'Pastries',
      price: 3.50,
      description: 'Flaky, buttery croissant baked to golden perfection',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
      inStock: true,
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      category: 'Cakes',
      price: 28.99,
      description: 'Rich chocolate cake with creamy frosting',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      inStock: true,
    },
    {
      id: 4,
      name: 'Whole Wheat Bread',
      category: 'Breads',
      price: 5.99,
      description: 'Healthy whole wheat bread packed with nutrients',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
      inStock: true,
    },
    {
      id: 5,
      name: 'Almond Croissant',
      category: 'Pastries',
      price: 4.25,
      description: 'Croissant filled with almond cream and topped with sliced almonds',
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=400&q=80',
      inStock: true,
    },
    {
      id: 6,
      name: 'Blueberry Muffin',
      category: 'Pastries',
      price: 3.00,
      description: 'Fresh blueberries baked into a moist, fluffy muffin',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80',
      inStock: true,
    },
    {
      id: 7,
      name: 'Baguette',
      category: 'Breads',
      price: 4.50,
      description: 'Classic French baguette with crispy crust',
      image: 'https://images.unsplash.com/photo-1608198399988-3c1c3b96e0eb?w=400&q=80',
      inStock: true,
    },
    {
      id: 8,
      name: 'Red Velvet Cake',
      category: 'Cakes',
      price: 32.99,
      description: 'Classic red velvet cake with cream cheese frosting',
      image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=80',
      inStock: true,
    },
    {
      id: 9,
      name: 'Cinnamon Roll',
      category: 'Pastries',
      price: 3.75,
      description: 'Soft cinnamon roll with sweet icing',
      image: 'https://images.unsplash.com/photo-1631206661375-462a5d1ffe1c?w=400&q=80',
      inStock: false,
    },
  ];

  const categories = ['All', 'Breads', 'Pastries', 'Cakes'];

  useEffect(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      toast.error('Sorry, this item is currently out of stock');
      return;
    }
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our selection of freshly baked goods, all made with premium ingredients 
            and traditional techniques.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6"
              aria-label="Search products"
            />
          </div>

          {/* Category Filter */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <ListFilter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Filter:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-300'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      Out of Stock
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-2xl mb-2 text-gray-900">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-amber-700">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className={`${
                        product.inStock
                          ? 'bg-amber-700 hover:bg-amber-800 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Unavailable'}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Custom Orders Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl mb-4 text-gray-900">
            Need Something Special?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We offer custom cakes and specialty orders for weddings, birthdays, and special events. 
            Contact us to discuss your requirements!
          </p>
          <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6">
            Request Custom Order
          </Button>
        </div>
      </div>
    </div>
  );
}