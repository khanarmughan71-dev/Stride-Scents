import Reveal from "../components/Reveal";
import { products } from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-black text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <Reveal direction="bottom">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Left */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
                A Signature <br className="hidden md:block" /> Of Pure Elegance
              </h1>

              <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-white/80">
                Discover luxury fragrances crafted to leave a lasting
                impression. Designed for those who define their presence.
              </p>

              <div className="mt-10">
                <button className="px-8 py-3 rounded-full bg-white text-black font-bold tracking-wide hover:bg-neutral-200 transition">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right: Floating Bottle */}
            <div className="hidden md:flex justify-center">
              <img
                src="/stride-hero.png"
                alt="Perfume Bottle"
                className="w-100 md:w-90 drop-shadow-2xl water-float"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FEATURED FRAGRANCES SECTION */}
      <section className="bg-black text-white py-24">
        <Reveal direction="right">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                Featured Fragrances
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                A curated selection of our most iconic scents, crafted to leave
                a lasting impression.
              </p>
            </div>

            {/* Fragrance Grid */}
            {/* Fragrance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {products.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group relative h-90 md:h-105 rounded-2xl overflow-hidden bg-neutral-900"
                >
                  <img
                    src={product.image}
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

            <div className="mt-14 flex justify-center">
              <Link
                to="/products"
                className="flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <span className="tracking-wide">Show More</span>
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BRAND STORY SECTION */}
      <Reveal direction="left">
        <section className="bg-black text-white py-28">
          <div className="mb-20 text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              OUR BRAND STORY
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/70">
              Founded on the belief that a fragrance is more than just a scent —
              it
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/aboutus.jpg"
                alt="Crafted fragrance"
                className="w-full h-80 md:h-105 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                Crafted Beyond Fragrance
              </h2>

              <p className="mt-6 text-white/75 leading-relaxed">
                At STRIDE SCENTS, we believe a fragrance is more than a scent —
                it is a quiet signature. A reflection of presence, confidence,
                and individuality.
              </p>

              <p className="mt-4 text-white/75 leading-relaxed">
                Each creation is thoughtfully composed using rare ingredients
                and refined accords, blended to evolve naturally on the skin.
                Our process values restraint, balance, and timeless character
                over excess.
              </p>

              <p className="mt-4 text-white/75 leading-relaxed">
                Designed for those who move with intention, NOIRÉ fragrances are
                not meant to overpower — but to be remembered.
              </p>

              <div className="mt-8">
                <span className="text-sm uppercase tracking-widest text-white/50">
                  — The STRIDE SCENTS' Philosophy
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PHILOSOPHY SECTION */}
      <Reveal direction="bottom">
        <section className="bg-neutral-950 text-white py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              Crafted With Intention
            </h2>

            <p className="mt-8 text-white/70 leading-relaxed max-w-2xl mx-auto">
              Every fragrance we create is a quiet expression of character —
              designed to linger, evolve, and leave a lasting impression. We
              believe scent is deeply personal, and craftsmanship is
              non-negotiable.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="uppercase tracking-widest text-sm text-white/60">
                  Rare Ingredients
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Carefully sourced notes blended to achieve balance, depth, and
                  authenticity.
                </p>
              </div>

              <div>
                <h3 className="uppercase tracking-widest text-sm text-white/60">
                  Long-Lasting Essence
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Designed to stay with you — subtle at first, unforgettable
                  over time.
                </p>
              </div>

              <div>
                <h3 className="uppercase tracking-widest text-sm text-white/60">
                  Modern Identity
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Minimal, confident, and refined — fragrances that speak
                  without saying too much.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT SECTION */}
      <section className="bg-black text-white py-28">
        <Reveal direction="right">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                Get in Touch
              </h2>

              <p className="mt-6 text-white/75 leading-relaxed max-w-md">
                For collaborations, wholesale inquiries, or personal assistance,
                we welcome thoughtful conversations.
              </p>

              <div className="mt-10 space-y-4 text-white/70">
                <p>
                  <span className="uppercase tracking-widest text-sm text-white/50">
                    Email
                  </span>
                  <br />
                  stridescentsofficial@gmail.com
                </p>

                <p>
                  <span className="uppercase tracking-widest text-sm text-white/50">
                    Location
                  </span>
                  <br />
                  Karachi · Sindh · Pakistan
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="bg-neutral-900/50 rounded-2xl p-10 space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-widest text-white/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white/60 transition"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest text-white/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white/60 transition"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest text-white/50 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white/60 transition resize-none"
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-white text-black font-bold tracking-wide hover:bg-neutral-200 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default Home;
