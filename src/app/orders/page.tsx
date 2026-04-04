import { prisma } from "../../lib/prisma";
import { auth } from "../../auth";

export default async function OrdersPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Please login</div>;
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
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Orders</h1>

      {orders.length === 0 && <p>No orders found</p>}

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Status:</b> {order.status}</p>
          <p><b>Payment:</b> {order.paymentStatus}</p>
          <p><b>Total:</b> ₹{order.totalAmount}</p>

          <h4>Items:</h4>

          {order.items.map((item: any) => (
            <div key={item.id}>
              - {item.product.name} × {item.quantity}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}