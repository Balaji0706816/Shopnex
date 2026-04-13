const categories = [
    "Headphones",
    "Watches",
    "Accessories",
    "Gaming",
  ];
  
  export default function CategoriesSection() {
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Categories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Shop by collection
          </h2>
  
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-[2rem] border border-slate-200 bg-white px-6 py-10 text-center text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }