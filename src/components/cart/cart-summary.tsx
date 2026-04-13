type CartSummaryProps = {
    totalItems: number;
    subtotal: number;
  };
  
  export default function CartSummary({
    totalItems,
    subtotal,
  }: CartSummaryProps) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
  
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Total Items</span>
            <span className="font-medium text-slate-900">{totalItems}</span>
          </div>
  
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-medium text-slate-900">₹{subtotal}</span>
          </div>
        </div>
  
        <a
          href="/checkout"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Proceed to Checkout
        </a>
      </div>
    );
  }