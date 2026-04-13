import Link from "next/link";

type Props = {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    imageUrl?: string | null;
    image?: string | null;
  };
};

export default function ProductCard({ product }: Props) {
  const image =
    product.imageUrl ||
    product.image ||
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="h-72 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-2 text-base font-bold text-slate-900">₹{product.price}</p>
      </div>
    </Link>
  );
}