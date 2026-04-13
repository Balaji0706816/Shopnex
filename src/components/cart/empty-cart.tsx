import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
      <p className="mt-3 text-slate-600">
        Looks like you haven’t added any products yet.
      </p>

      <Link
        href="/products"
        className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}