import ProductInfo from "../../../components/products/product-info";
import AddToCartButton from "../../../components/products/add-to-cart-button";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description?: string | null;
  imageUrl?: string | null;
  image?: string | null;
};

async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  const image =
    product.imageUrl || product.image || "/images/headphones.jpg";

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border bg-slate-50">
          <img
            src={image}
            alt={product.name}
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div>
          <ProductInfo
            name={product.name}
            price={product.price}
            description={product.description || undefined}
          />
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}