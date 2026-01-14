import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
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
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14">

        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden bg-neutral-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            {product.name}
          </h1>

          <p className="mt-4 text-white/70">
            {product.description}
          </p>

          <p className="mt-6 text-xl font-semibold">
            Rs. {product.price}
          </p>

          {/* Actions */}
          <div className="mt-10 flex gap-4">
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              Add to Cart
            </button>

            <Link
              to="/checkout"
              className="px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
