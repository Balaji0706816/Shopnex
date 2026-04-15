"use client";

import { useEffect, useMemo, useState } from "react";
import CartItem from "../../components/cart/cart-item";
import CartSummary from "../../components/cart/cart-summary";
import EmptyCart from "../../components/cart/empty-cart";

type CartProduct = {
  id: string;
  name: string;
  price: number;
  imageUrl?: string | null;
  image?: string | null;
};

type CartItemType = {
  id: string;
  quantity: number;
  product: CartProduct;
};

export default function CartPage() {
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

  function handleQuantityChange(itemId: string, nextQuantity: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: nextQuantity } : item
      )
    );
  }

  function handleRemove(itemId: string) {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {loading ? (
          <div className="border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
            Loading cart...
          </div>
        ) : error ? (
          <div className="border border-red-200 bg-red-50 p-8 text-red-600 shadow-sm">
            {error}
          </div>
        ) : items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
            <div className="space-y-4">
              <div className="border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900">My Cart</h1>
                <p className="mt-1 text-sm text-slate-500">
                  {totalItems} item(s) in your cart
                </p>
              </div>

              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className="xl:sticky xl:top-24 xl:self-start">
              <CartSummary totalItems={totalItems} subtotal={subtotal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}