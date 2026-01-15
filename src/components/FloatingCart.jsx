import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function FloatingCart({ onClick }) {
  const { cartItems } = useCart();

  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-white text-black
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        hover:scale-110
      "
    >
      <ShoppingBag size={22} />

      {/* Count badge */}
      <span
        className="
          absolute -top-1 -right-1
          w-5 h-5 rounded-full
          bg-black text-white
          text-xs font-medium
          flex items-center justify-center
        "
      >
        {cartItems.length}
      </span>
    </button>
  );
}

export default FloatingCart;
