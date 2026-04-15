"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  productId: string;
};

export default function AddToCartButton({ productId }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleAddToCart() {
    try {
      setLoading(true);

      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error || "Failed to add to cart");
        return;
      }

      router.push("/cart");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="mt-8 rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}