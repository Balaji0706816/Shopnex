type CartItemType = {
    id: string;
    quantity: number;
    product: {
      id: string;
      name: string;
      price: number;
      imageUrl?: string | null;
      image?: string | null;
    };
  };
  
  export default function CartItem({ item }: { item: CartItemType }) {
    const image =
      item.product.imageUrl ||
      item.product.image ||
      "/images/headphones.jpg";
  
    return (
      <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="h-28 w-28 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={image}
            alt={item.product.name}
            className="h-full w-full object-cover"
          />
        </div>
  
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.product.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Quantity: {item.quantity}
            </p>
          </div>
  
          <p className="text-base font-bold text-slate-900">
            ₹{item.product.price * item.quantity}
          </p>
        </div>
      </div>
    );
  }