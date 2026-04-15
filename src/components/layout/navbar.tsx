"use client";

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
];

export default function Navbar() {
  const { data: session, status } = useSession();

  const userLabel =
    session?.user?.name || session?.user?.email || "Account";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 gap-4">
        
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            NovaCart
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search */}
        <div className="hidden flex-1 max-w-md lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 rounded-full border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:border-slate-900"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <Link
            href="/cart"
            className="relative rounded-full border border-slate-300 p-2 hover:bg-slate-50"
          >
            <ShoppingCart className="h-5 w-5 text-slate-700" />
          </Link>

          {/* Auth */}
          {status === "loading" ? (
            <span className="text-sm text-slate-500">...</span>
          ) : session?.user ? (
            <>
              <div className="hidden md:flex items-center gap-2 border px-3 py-1.5 rounded-full text-sm">
                <User className="h-4 w-4" />
                <span className="truncate max-w-[120px]">{userLabel}</span>
              </div>

              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}