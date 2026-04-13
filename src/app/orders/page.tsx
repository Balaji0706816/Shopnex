import { auth } from "../../auth";
import { prisma } from "../../lib/prisma";
import OrderCard from "../../components/orders/order-card";

export default async function OrdersPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900">My Orders</h1>
        <p className="mt-4 text-slate-600">
          Please login to view your orders.
        </p>
      </div>
    );
  }

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">
          My Orders
        </h1>

        <div className="mt-10 space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
}