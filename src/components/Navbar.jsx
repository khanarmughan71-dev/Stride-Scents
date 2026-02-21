import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Navbar({ menuOpen, setMenuOpen }) {

  // Lock body scroll when drawer is open (premium UX)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent text-white">
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
              to={
                item === "Home"
                  ? "/"
                  : item === "Shop"
                  ? "/products"
                  : `/${item.toLowerCase()}`
              }
              className="px-5 py-2 rounded-full text-white/90 transition-all duration-300
                         hover:text-white hover:bg-white/10 hover:backdrop-blur-md"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* RIGHT: WhatsApp + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/9203223661499"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="
    w-10 h-10 rounded-full
    border border-neutral-700
    flex items-center justify-center
    text-green-500
    hover:bg-green-500 hover:text-black hover:border-green-500
    transition
  "
          >
            <FaWhatsapp size={20} />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER – MODERN */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`
      absolute right-0 top-0 h-full
      w-[100%] max-w-sm
      bg-black
      border-l border-neutral-800
      transform transition-transform duration-300 ease-in-out
      ${menuOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-neutral-800">
            <span className="text-sm tracking-[0.3em] uppercase text-white/70">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col px-8 pt-6 space-y-4 text-base font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white/80 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
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
          </nav>

          {/* WhatsApp CTA – Proper Button */}
          <div className="mt-auto px-8 pt-6">
            <a
              href="https://wa.me/9203223661499"
              target="_blank"
              rel="noopener noreferrer"
              className="
          flex items-center justify-center gap-3
          w-full py-3 rounded-full
          bg-green-500 text-black font-medium
          hover:bg-green-400 transition
        "
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp.
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
