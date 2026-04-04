import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../auth";
import {
  createOrderFromCart,
  getOrderById,
  getOrdersByUserId,
} from "../../../lib/db/orders";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    const userId = (session?.user as any)?.id;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const searchParams = req.nextUrl.searchParams;
    const orderId = searchParams.get("orderId");

    if (orderId) {
      const order = await getOrderById(orderId);

      if (!order || order.userId !== userId) {
        return NextResponse.json(
          { success: false, error: "Order not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        order,
      });
    }

    const orders = await getOrdersByUserId(userId);

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("GET /api/orders error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(_req: NextRequest) {
  try {
    const session = await auth();
    const userId = (session?.user as any)?.id;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const order = await createOrderFromCart(userId);

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/orders error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to create order",
      },
      { status: 500 }
    );
  }
}