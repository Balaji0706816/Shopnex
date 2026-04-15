"use client";

import { useEffect, useState } from "react";
import CheckoutForm from "../../components/checkout/checkout-form";
import OrderSummary from "../../components/checkout/order-summary";

type CartItemType = {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCart() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/cart", {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          setError("Failed to fetch cart");
          return;
        }

        const resolvedItems =
          data.items || data.cart?.items || data.cartItems || [];

        setItems(resolvedItems);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  const summaryItems = items.map((item) => ({
    id: item.id,
    name: item.product.name,
    quantity: item.quantity,
    price: item.product.price,
  }));

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 border-b border-slate-200 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Checkout
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Secure checkout
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Complete your order by entering delivery details and reviewing your payment summary.
          </p>
        </div>

        {loading ? (
          <div className="border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
            Loading checkout...
          </div>
        ) : error ? (
          <div className="border border-red-200 bg-red-50 p-8 text-red-600 shadow-sm">
            {error}
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[1.6fr_0.95fr]">
            <CheckoutForm />
            <div className="xl:sticky xl:top-24 xl:self-start">
              <OrderSummary items={summaryItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}