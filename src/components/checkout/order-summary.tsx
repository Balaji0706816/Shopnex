type CheckoutSummaryProps = {
    totalItems: number;
    subtotal: number;
  };
  
  export default function OrderSummary({
    totalItems,
    subtotal,
  }: CheckoutSummaryProps) {
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
  
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span className="font-medium text-slate-900">Free</span>
          </div>
  
          <div className="border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-900">Total</span>
              <span className="text-base font-bold text-slate-900">₹{subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }