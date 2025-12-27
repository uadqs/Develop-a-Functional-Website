import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Product } from './ProductsPage';

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export function ShoppingCart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: ShoppingCartProps) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cart Sidebar */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl text-gray-900">
            Shopping Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-xl text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-gray-400">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg mb-1 text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-amber-700 mb-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="flex-shrink-0 p-2 hover:bg-red-50 rounded transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-xl">
              <span className="text-gray-900">Total:</span>
              <span className="text-amber-700">${totalPrice.toFixed(2)}</span>
            </div>
            
            <Button
              className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6"
              onClick={() => {
                alert('Checkout functionality would be implemented here. For now, this is a demo.');
              }}
            >
              Proceed to Checkout
            </Button>

            <Button
              variant="outline"
              className="w-full border-red-600 text-red-600 hover:bg-red-50 py-6"
              onClick={onClearCart}
            >
              Clear Cart
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Pick up available at our store location
            </p>
          </div>
        )}
      </div>
    </>
  );
}
