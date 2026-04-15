import ProductGrid from "../../components/products/product-grid";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products || [];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-3xl font-bold">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}