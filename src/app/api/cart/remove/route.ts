import { NextRequest, NextResponse } from "next/server";
import { removeItemFromCart } from "../../../../lib/db/cart";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, productId } = body;

    if (!userId || !productId) {
      return NextResponse.json(
        { success: false, error: "userId and productId are required" },
        { status: 400 }
      );
    }

    const result = await removeItemFromCart(userId, productId);

    return NextResponse.json({
      success: true,
      cartItem: result,
    });
  } catch (error) {
    console.error("Remove cart item error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to remove item",
      },
      { status: 500 }
    );
  }
}