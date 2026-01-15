import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when drawer is open (premium UX)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black backdrop-blur-md text-white border-b border-neutral-800">
      <div className="max-w-8x1 mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* LEFT: Logo + Brand */}
        <div className="flex items-center gap-4">
          {/* Logo Circle */}
          <div
            className="
      w-11 h-11 rounded-full
      bg-black/90
      ring-2 ring-white/40
      overflow-hidden
      flex items-center justify-center
      transition-all duration-300 ease-out
      hover:ring-white/60
      hover:scale-105
    "
          >
            <img
              src="/stride-logo.png"
              alt="Stride Scents Logo"
              className="
        w-12 h-12 object-contain
        transition-transform duration-300 ease-out
        group-hover:scale-105
      "
            />
          </div>

          {/* Brand Text */}
          <span className="text-lg md:text-xl font-extrabold tracking-widest">
            STRIDE SCENTS
          </span>
        </div>

        {/* CENTER: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 text-sm uppercase tracking-wider">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : item === "Shop" ? "/products" : `/${item.toLowerCase()}`}
              className="px-5 py-2 rounded-full text-white/90 transition-all duration-300
                         hover:text-white hover:bg-white/10 hover:backdrop-blur-md"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* RIGHT: Cart + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/Cart"
            className="relative border border-neutral-700 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            Cart
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center gap-1"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-100 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-black border-l border-neutral-800
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-xl"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Drawer Links */}
          <div className="flex flex-col pt-28 px-8 space-y-6 text-sm uppercase tracking-widest">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white/80 transition"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white/80 transition"
            >
              Shop
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white/80 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white/80 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
