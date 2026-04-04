export default function FrontendHomepageStarter() {
  const featured = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$129",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      tag: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$79",
      tag: "Trending",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Minimal Keyboard",
      price: "$149",
      tag: "Editor Pick",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const categories = [
    "Headphones",
    "Smart Watches",
    "Accessories",
    "Gaming",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-tight">NovaCart</div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="transition hover:text-slate-500">Home</a>
            <a href="#products" className="transition hover:text-slate-500">Products</a>
            <a href="#categories" className="transition hover:text-slate-500">Categories</a>
            <a href="#orders" className="transition hover:text-slate-500">Orders</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
              Login
            </button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Modern eCommerce Experience
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
              Build a storefront that feels like a real brand.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Clean shopping experience, fast checkout, beautiful product browsing,
              and a polished layout built for real users.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                Shop Now
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold hover:bg-slate-50">
                Explore Categories
              </button>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-slate-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-slate-500">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-slate-500">Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-slate-100" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-slate-200" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
                alt="Hero product"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Shop by Category
              </p>
              <h2 className="mt-2 text-3xl font-bold">Popular Collections</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center text-lg font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-white"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Featured Products
              </p>
              <h2 className="mt-2 text-3xl font-bold">Designed for a premium shopping feel</h2>
            </div>
            <button className="w-fit rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50">
              View All Products
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative overflow-hidden bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
                    {product.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">High-quality premium tech for everyday use.</p>
                    </div>
                    <p className="text-base font-bold">{product.price}</p>
                  </div>
                  <button className="mt-5 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 rounded-[2rem] bg-slate-900 px-8 py-10 text-white md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-sm text-slate-300">
                Reliable shipping and real-time order updates for customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Secure Checkout</h3>
              <p className="mt-2 text-sm text-slate-300">
                Built with safe payment handling and professional shopping flow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Premium Support</h3>
              <p className="mt-2 text-sm text-slate-300">
                Clear order tracking, support, and post-purchase experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NovaCart. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
