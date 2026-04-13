import { auth } from "../../auth";
import { prisma } from "../../lib/prisma";
import CheckoutForm from "../../components/checkout/checkout-form";
import OrderSummary from "../../components/checkout/order-summary";
import PaymentSection from "../../components/checkout/payment-section";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        <p className="mt-4 text-slate-600">Please login to continue checkout.</p>
      </div>
    );
  }

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const items = cart?.items || [];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Checkout
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <CheckoutForm />
          </div>

          <div className="space-y-6">
            <OrderSummary totalItems={totalItems} subtotal={subtotal} />
            <PaymentSection />
          </div>
        </div>
      </div>
    </section>
  );
}