import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function productdetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="bg-black text-white py-24 text-center">
        <h2 className="text-2xl">Product not found</h2>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Product Image */}
        <div className="relative group rounded-3xl overflow-hidden bg-neutral-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* RIGHT: Product Details */}
        <div className="flex flex-col">
          {/* Product Name */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight">
            {product.name}
          </h1>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-white/20 mt-6" />

          {/* Description */}
          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Price */}
          <p className="mt-8 text-2xl font-semibold tracking-wide">
            Rs. {product.price}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="
              px-10 py-3 rounded-full
              bg-white text-black font-medium
              transition-all duration-300
              hover:bg-gray-200 hover:scale-105
            "
            >
              Add to Cart
            </button>

            <Link
              to="/checkout"
              className="
              px-10 py-3 rounded-full
              border border-white/30
              text-white
              transition-all duration-300
              hover:bg-white hover:text-black hover:scale-105
            "
            >
              Buy Now
            </Link>
          </div>

          {/* Extra Info (Premium Touch) */}
          <div className="mt-10 text-sm text-white/50 space-y-2">
            <p>• Long lasting fragrance</p>
            <p>• Perfect for daily & evening wear</p>
            <p>• Premium inspired scent</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default productdetail;
