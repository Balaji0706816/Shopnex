export default function TrustSection() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 rounded-[2rem] bg-slate-900 px-8 py-10 text-white md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Reliable shipping and smooth order updates for every customer.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Secure Checkout</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Safe payment experience built for a modern ecommerce flow.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Premium Support</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Friendly support and a shopping journey customers can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }