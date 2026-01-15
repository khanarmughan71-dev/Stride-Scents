import { products } from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Our Fragrances
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Explore our complete collection of signature scents.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative h-90 md:h-105 rounded-2xl overflow-hidden bg-neutral-900"
            >
              <img
                src={product.image2}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-center">
                <h3 className="text-lg font-medium tracking-wide">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
