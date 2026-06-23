import Link from "next/link";
import ProductGrid from "../../components/products/product-grid";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category?: string | null;
  imageUrl?: string | null;
  image?: string | null;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products || [];
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;
  const category = params.category?.toLowerCase() || "";
  const search = params.search?.toLowerCase() || "";

  const products = await getProducts();

  const filteredProducts = products.filter((product) => {
    const productCategory = product.category?.toLowerCase() || "";
    const productName = product.name?.toLowerCase() || "";

    const matchesCategory = category
      ? productCategory === category
      : true;

    const matchesSearch = search
      ? productName.includes(search)
      : true;

    return matchesCategory && matchesSearch;
  });

  const pageTitle = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
    : search
    ? `Search Results for "${params.search}"`
    : "All Products";

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-3xl font-bold">{pageTitle}</h1>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            No products found
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            We do not have products in this category yet.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            View All Products
          </Link>
        </div>
      )}
    </div>
  );
}