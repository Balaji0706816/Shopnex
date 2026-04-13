import { auth } from "../../auth";
import { prisma } from "../../lib/prisma";
import CartItem from "../../components/cart/cart-item";
import CartSummary from "../../components/cart/cart-summary";
import EmptyCart from "../../components/cart/empty-cart";

export default async function CartPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900">Cart</h1>
        <p className="mt-4 text-slate-600">Please login to view your cart.</p>
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

  const items = cart?.items ?? [];
  const validItems = items.filter((item) => item.product);

  const totalItems = validItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = validItems.reduce(
    (sum, item) => sum + item.quantity * (item.product?.price ?? 0),
    0
  );

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          My Cart
        </h1>

        {validItems.length === 0 ? (
          <div className="mt-10">
            <EmptyCart />
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
            <div className="space-y-4">
              {validItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div>
              <CartSummary totalItems={totalItems} subtotal={subtotal} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}