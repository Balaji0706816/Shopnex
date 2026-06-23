"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  MapPin,
  User,
  ChevronDown,
  Bell,
  Gift,
  Headphones,
  Store,
  Package,
  Heart,
  MapPinned,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const categoryLinks = [
  { label: "Electronics", href: "/products?category=electronics" },
  { label: "Fashion", href: "/products?category=fashion" },
  { label: "Mobiles", href: "/products?category=mobiles" },
  { label: "Beauty", href: "/products?category=beauty" },
  { label: "Home", href: "/products?category=home" },
  { label: "Appliances", href: "/products?category=appliances" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [loginOpen, setLoginOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [search, setSearch] = useState("");

  const userLabel = session?.user?.name || session?.user?.email || "Login";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="shrink-0 text-2xl font-bold tracking-tight text-slate-900"
          >
            NovaCart
          </Link>

          <div className="hidden flex-1 lg:block">
            <form
              action="/products"
              method="GET"
              className="relative mx-auto max-w-2xl"
            >
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products, brands and more"
                className="h-11 w-full rounded-md border border-slate-300 bg-slate-50 pl-12 pr-4 text-sm outline-none transition focus:border-slate-900 focus:bg-white"
              />
            </form>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/products?location=select"
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Location not set</span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setLoginOpen(true)}
              onMouseLeave={() => setLoginOpen(false)}
            >
              <button className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <User className="h-4 w-4" />
                <span className="max-w-[120px] truncate">{userLabel}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {loginOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                  {!session?.user ? (
                    <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-sm text-slate-600">
                        New customer?
                      </span>
                      <Link
                        href="/register"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        Sign Up
                      </Link>
                    </div>
                  ) : null}

                  <div className="space-y-1">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <User className="h-4 w-4" />
                      My Profile
                    </Link>

                    <Link
                      href="/orders"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Package className="h-4 w-4" />
                      Orders
                    </Link>

                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </Link>

                    <Link
                      href="/cart"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Cart
                    </Link>
                  </div>

                  <div className="mt-3 border-t border-slate-100 pt-3">
                    {session?.user ? (
                      <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        href="/login"
                        className="block w-full rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-slate-700"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                  <div className="space-y-1">
                    <Link
                      href="/seller"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Store className="h-4 w-4" />
                      Become a Seller
                    </Link>
                    <Link
                      href="/notifications"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Bell className="h-4 w-4" />
                      Notifications
                    </Link>
                    <Link
                      href="/gift-cards"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Gift className="h-4 w-4" />
                      Gift Cards
                    </Link>
                    <Link
                      href="/support"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Headphones className="h-4 w-4" />
                      24x7 Support
                    </Link>
                    <Link
                      href="/delivery-location"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <MapPinned className="h-4 w-4" />
                      Delivery Location
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm font-medium text-slate-800"
            >
              <ShoppingCart className="h-5 w-5" />
              Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden bg-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-3 text-sm font-medium text-slate-700 sm:px-6">
          {categoryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}