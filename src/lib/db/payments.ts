import { prisma } from "../../lib/prisma";

export async function getOrderForPayment(orderId: string) {
  const cleanOrderId = orderId.trim();

  console.log("Searching orderId in DB:", JSON.stringify(cleanOrderId));

  const order = await prisma.order.findUnique({
    where: { id: cleanOrderId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
      payments: true,
      user: true,
    },
  });

  console.log("Order found in DB:", order);

  return order;
}

export async function createPaymentRecord(data: {
  orderId: string;
  provider: string;
  providerPaymentId?: string;
  amount: number;
  status: "PENDING" | "PAID" | "FAILED" | "REFUNDED";
}) {
  return prisma.payment.create({
    data,
  });
}

export async function updateOrderPaymentStatus(
  orderId: string,
  paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED",
  orderStatus: "PENDING" | "PAID" | "FAILED" | "CANCELLED" | "FULFILLED"
) {
  return prisma.order.update({
    where: { id: orderId.trim() },
    data: {
      paymentStatus,
      status: orderStatus,
    },
  });
}