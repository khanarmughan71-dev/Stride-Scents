import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [sending, setSending] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const generateOrderNumber = () =>
    `SS-${Date.now().toString().slice(-6)}`;

  const orderItemsText = cartItems
    .map(
      (item) =>
        `${item.name} × ${item.quantity || 1} — Rs. ${
          item.price * (item.quantity || 1)
        }`
    )
    .join("\n");

  /* ================================
     CLEAR CART AFTER SUCCESS
  ================================= */
  useEffect(() => {
    if (orderPlaced) {
      clearCart();
    }
  }, [orderPlaced, clearCart]);

  const handlePlaceOrder = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (cartItems.length === 0) return;

    setSending(true);

    const newOrderNumber = generateOrderNumber();

    // ✅ Freeze cart snapshot
    const frozenItems = JSON.parse(JSON.stringify(cartItems));

    const templateParams = {
      order_number: newOrderNumber,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      customer_address: formData.address,
      order_items: orderItemsText,
      order_total: total,
    };

    try {
      await emailjs.send(
        "service_29n2tde",
        "order_admin",
        templateParams,
        "1CvgFVPPB3owY-zG2"
      );

      setOrderSummary({
        orderNumber: newOrderNumber,
        customer: formData,
        items: frozenItems,
        total,
      });

      setOrderPlaced(true);
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setSending(false);
    }
  };

  /* ================================
     ORDER SUCCESS RECEIPT (MODAL)
  ================================= */
  if (orderPlaced && orderSummary) {
    return (
      <section className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4">
        <div
          className="
            bg-neutral-900 text-white
            w-full max-w-md
            rounded-3xl p-6
            max-h-[85vh] overflow-y-auto
          "
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">🎉 Order Confirmed</h2>
            <p className="text-white/60 text-sm mt-1">
              Thank you for your purchase
            </p>
          </div>

          {/* Order Number */}
          <div className="border border-white/10 rounded-xl p-4 text-center mb-6">
            <p className="text-xs text-white/50">Order Number</p>
            <p className="text-lg font-semibold tracking-wider">
              {orderSummary.orderNumber}
            </p>
          </div>

          {/* Customer Info */}
          <div className="text-sm text-white/70 space-y-1 mb-6">
            <p><strong>Name:</strong> {orderSummary.customer.name}</p>
            <p><strong>Email:</strong> {orderSummary.customer.email}</p>
            <p><strong>Phone:</strong> {orderSummary.customer.phone}</p>
            <p><strong>Address:</strong> {orderSummary.customer.address}</p>
          </div>

          <div className="border-t border-white/10 my-4" />

          {/* Items */}
          <div className="space-y-3 text-sm">
            {orderSummary.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity || 1}
                </span>
                <span>
                  Rs. {item.price * (item.quantity || 1)}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between mt-5 pt-4 border-t border-white/10 font-semibold">
            <span>Total</span>
            <span>Rs. {orderSummary.total}</span>
          </div>

          <p className="mt-6 text-xs text-center text-white/50">
            Please save this receipt for your records.
          </p>

          <Link
            to="/"
            className="mt-6 block w-full text-center py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  /* ================================
     CHECKOUT FORM
  ================================= */
  return (
    <section className="bg-black text-white min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              Billing Details
            </h2>

            <div className="space-y-5">
              {["name", "email", "phone", "address"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field.toUpperCase()}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              ))}

              <textarea
                placeholder="Order Notes (optional)"
                rows="3"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg"
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-neutral-900 rounded-3xl p-6 md:p-8 h-fit">
            <h2 className="text-xl font-semibold mb-6">
              Your Order
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm border-b border-white/10 pb-3"
                >
                  <span>
                    {item.name} × {item.quantity || 1}
                  </span>
                  <span>
                    Rs. {item.price * (item.quantity || 1)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6 text-lg font-semibold">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0 || sending}
              className="
                mt-8 w-full py-3 rounded-full
                bg-white text-black font-medium
                hover:bg-neutral-200 transition
                disabled:opacity-40
              "
            >
              {sending ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
