import { X, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-50
          h-dvh
          w-full sm:w-[85%] md:w-[420px]
          bg-black text-white
          shadow-2xl
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold tracking-wide">
            Your Cart
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {cartItems.length === 0 ? (
            <p className="text-white/60 text-center mt-12">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-white/10 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-white/60">
                    Rs. {item.price} × {item.quantity}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="min-w-[20px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-400 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10">
          {cartItems.length > 0 ? (
            <>
              <div className="flex justify-between mb-4">
                <span className="text-white/70">Total</span>
                <span className="font-semibold">
                  Rs. {total}
                </span>
              </div>

              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full text-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                Proceed to Checkout
              </Link>
            </>
          ) : (
            <button
              disabled
              className="w-full px-6 py-3 rounded-full bg-white/20 text-white/40 cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
