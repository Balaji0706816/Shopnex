import { prisma } from "../prisma";

export async function getOrderForPayment(orderId: string) {
  return prisma.order.findUnique({
    where: { id: orderId },
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
    where: { id: orderId },
    data: {
      paymentStatus,
      status: orderStatus,
    },
  });
}