import FeaturedProducts from "../components/home/featured-products";
import PromoGrid from "../components/home/promo-grid";

const categories = [
  "For You",
  "Women",
  "Men",
  "Beauty",
  "Hair Care",
  "Shoes",
  "Bags",
  "Food & Grocery",
  "Home Essentials",
  "Deals",
  "New Arrivals",
];

export default function HomePage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex gap-4 overflow-x-auto rounded-xl bg-white px-4 py-3 shadow-sm">
          {categories.map((item) => (
            <button
              key={item}
              className="shrink-0 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {item}
            </button>
          ))}
        </div>

        <PromoGrid />

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Trending Products
            </h2>
            <a href="/products" className="text-sm font-semibold text-blue-600">
              View All
            </a>
          </div>
          <FeaturedProducts />
        </section>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Women&apos;s Collection
          </h2>
          <FeaturedProducts />
        </section>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Men&apos;s Collection
          </h2>
          <FeaturedProducts />
        </section>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Beauty & Hair Care
          </h2>
          <FeaturedProducts />
        </section>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Food & Grocery
          </h2>
          <FeaturedProducts />
        </section>
      </section>
    </main>
  );
}