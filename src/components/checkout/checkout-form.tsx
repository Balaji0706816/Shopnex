export default function CheckoutForm() {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Shipping Details</h2>
  
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="First Name"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 md:col-span-2"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 md:col-span-2"
          />
          <input
            type="text"
            placeholder="City"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
          <input
            type="text"
            placeholder="State"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
          <input
            type="text"
            placeholder="Country"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>
      </div>
    );
  }