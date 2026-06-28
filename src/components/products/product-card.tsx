import Link from "next/link";
import { Heart, Star } from "lucide-react";

type Props = {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    category?: string | null;
    imageUrl?: string | null;
    image?: string | null;
  };
};

export default function ProductCard({ product }: Props) {
  const image =
    product.imageUrl ||
    product.image ||
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80";

  const originalPrice = Math.round(product.price * 1.25);
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className="group relative border-b border-slate-200 bg-white p-5 transition hover:shadow-md">
      <button className="absolute right-5 top-5 rounded-full bg-white p-2 text-slate-400 shadow-sm hover:text-red-500">
        <Heart className="h-5 w-5" />
      </button>

      <div className="grid grid-cols-[220px_1fr] gap-6">
        <Link href={`/products/${product.slug}`} className="flex h-56 items-center justify-center bg-white">
          <img
            src={image}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition group-hover:scale-105"
          />
        </Link>

        <div className="pr-10">
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-lg font-semibold text-slate-900 hover:text-blue-600">
              {product.name}
            </h3>
          </Link>

          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-green-600 px-2 py-0.5 text-xs font-semibold text-white">
              4.3 <Star className="h-3 w-3 fill-white" />
            </span>
            <span className="text-sm text-slate-500">(2,431 Ratings & 318 Reviews)</span>
          </div>

          <ul className="mt-4 space-y-1 text-sm text-slate-600">
            <li>• High quality product</li>
            <li>• Fast delivery available</li>
            <li>• 7 days replacement policy</li>
            <li>• Secure payment and easy returns</li>
          </ul>

          <div className="mt-5">
            <div className="flex items-end gap-3">
              <p className="text-2xl font-bold text-slate-900">₹{product.price}</p>
              <p className="text-sm text-slate-400 line-through">₹{originalPrice}</p>
              <p className="text-sm font-semibold text-green-600">{discount}% off</p>
            </div>

            <p className="mt-1 text-sm font-medium text-green-600">Free delivery</p>
            <p className="mt-1 text-xs text-slate-500">Bank offers available</p>
          </div>
        </div>
      </div>
    </div>
  );
}