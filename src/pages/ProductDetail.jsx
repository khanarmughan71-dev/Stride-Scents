import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="bg-black text-white py-24 text-center">
        <h2 className="text-2xl">Product not found</h2>
      </section>
    );
  }

  const discountPercent = Math.round(
    ((product.originalPrice - product.discountedPrice) /
      product.originalPrice) *
      100,
  );

  const handleAddToCart = () => {
    addToCart({
      ...product,
      price: product.discountedPrice, // cart uses final price
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      price: product.discountedPrice,
    });

    navigate("/checkout");
  };

  return (
    <>
      {/* PRODUCT HERO */}
      <section className="bg-black text-white pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/30 blur-3xl" />

            {/* Discount Badge */}
            <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-xs px-3 py-1 rounded-full tracking-wide">
              {discountPercent}% OFF
            </div>

            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
              {product.name}
            </h1>

            <div className="w-20 h-0.5 bg-white/20 mt-6" />

            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* PRICE SECTION */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xl text-white/40 line-through">
                Rs. {product.originalPrice}
              </span>

              <span className="text-3xl font-semibold text-green-400">
                Rs. {product.discountedPrice}
              </span>
            </div>

            <p className="mt-2 text-sm text-white/50">
              Limited-time offer. Price may increase soon.
            </p>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                onClick={handleAddToCart}
                className="
                  px-10 py-3 rounded-full
                  bg-white text-black font-medium
                  transition-all duration-300
                  hover:bg-neutral-200 hover:scale-105
                  active:scale-95
                "
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="
    px-10 py-3 rounded-full
    border border-white/30
    hover:bg-white hover:text-black
    transition-all duration-300
  "
              >
                Buy Now
              </button>

              {added && (
                <span className="text-sm text-green-400">Added to cart ✓</span>
              )}
            </div>

            {/* MICRO DETAILS */}
            <div className="mt-10 text-sm text-white/50 space-y-2">
              <p>• Long lasting fragrance</p>
              <p>• Premium inspired scent</p>
              <p>• Perfect for daily & evening wear</p>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC BANNER */}
      {product.banner && (
        <section className="relative bg-black">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[520px] overflow-hidden">
            <img
              src={product.banner}
              alt={`${product.name} banner`}
              className="w-full h-full object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </section>
      )}

      <section className="bg-black py-10" />
    </>
  );
}

export default ProductDetail;
