import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 12999,
    image: "/images/headphones.jpg",
    category: "Audio",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 15999,
    image: "/images/watch.jpg",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 4999,
    image: "/images/mouse.jpg",
    category: "Gaming",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 8999,
    image: "/images/keyboard.jpg",
    category: "Accessories",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Explore top picks for modern shoppers
            </h2>
          </div>

          <Link
            href="/products"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  {product.category}
                </p>

                <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>

                <p className="text-xl font-bold text-slate-900">
                  ₹{product.price}
                </p>

                <div className="pt-1">
                  <Link
                    href="/products"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}