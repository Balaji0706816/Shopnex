type Product = {
    id: string;
    name: string;
    slug: string;
    price: number;
    imageUrl?: string | null;
    image?: string | null;
    description?: string | null;
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
      product.imageUrl ||
      product.image ||
      "/images/headphones.jpg";
  
    return (
      <section className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={image}
                alt={product.name}
                className="h-[500px] w-full object-cover"
              />
            </div>
  
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Product Details
              </p>
  
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                {product.name}
              </h1>
  
              <p className="mt-4 text-2xl font-bold text-slate-900">
                ₹{product.price}
              </p>
  
              <p className="mt-6 text-base leading-8 text-slate-600">
                {product.description ||
                  "Premium quality product designed for modern shoppers with clean design and reliable everyday use."}
              </p>
  
              <button className="mt-8 w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700 md:w-fit">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }