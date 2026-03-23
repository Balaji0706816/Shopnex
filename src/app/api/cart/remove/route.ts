import { NextRequest, NextResponse } from "next/server";
import { removeItemFromCart } from "../../../../lib/db/cart";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, productId } = body;

    if (!userId || !productId) {
      return NextResponse.json(
        { error: "userId and productId are required." },
        { status: 400 }
      );
    }

    await removeItemFromCart(userId, productId);

    return NextResponse.json({
      success: true,
      message: "Item removed from cart.",
    });
  } catch (error) {
    console.error("POST /api/cart/remove error:", error);

    return NextResponse.json(
      { error: "Failed to remove item from cart." },
      { status: 500 }
    );
  }
}