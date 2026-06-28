import ProductCard from "./product-card";

export default function ProductGrid({ products }: any) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}