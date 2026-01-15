import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import FloatingCart from "./components/FloatingCart";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false); // ✅ REQUIRED

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* FULL PAGE LOADER */}
      {loading && <Loader />}

      {/* WEBSITE CONTENT */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />

        {/* FLOATING CART + DRAWER */}
        <FloatingCart onClick={() => setCartOpen(true)} />
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
