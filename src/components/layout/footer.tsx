import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 NovaCart. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link href="/" className="transition hover:text-slate-900">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-slate-900">
            Products
          </Link>
          <Link href="/orders" className="transition hover:text-slate-900">
            Orders
          </Link>
        </div>
      </div>
    </footer>
  );
}