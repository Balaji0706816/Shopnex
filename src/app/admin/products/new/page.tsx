import { prisma } from "../../../../lib/prisma";
import { redirect } from "next/navigation";

function makeSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

async function createProduct(formData: FormData) {
  "use server";

  const name = String(formData.get("name") || "");
  const description = String(formData.get("description") || "");
  const price = Number(formData.get("price") || 0);
  const imageUrl = String(formData.get("imageUrl") || "");
  const stock = Number(formData.get("stock") || 0);

  if (!name || !description || !price) {
    throw new Error("Name, description, and price are required.");
  }

  await prisma.product.create({
    data: {
      name,
      slug: makeSlug(name),
      description,
      price,
      imageUrl,
      stock,
      isActive: true,
    },
  });

  redirect("/products");
}

export default function NewProductPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Add New Product</h1>
      <p className="mt-2 text-slate-600">
        Add products directly from admin panel.
      </p>

      <form
        action={createProduct}
        className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Product Name
          </label>
          <input
            name="name"
            required
            placeholder="Example: Hair Oil"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Description
          </label>
          <textarea
            name="description"
            required
            placeholder="Write product description"
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Price
          </label>
          <input
            name="price"
            type="number"
            required
            placeholder="1299"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Image URL
          </label>
          <input
            name="imageUrl"
            placeholder="/images/products/product1.jpg"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Stock
          </label>
          <input
            name="stock"
            type="number"
            placeholder="10"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700"
        >
          Add Product
        </button>
      </form>
    </main>
  );
}