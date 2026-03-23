import { NextRequest, NextResponse } from "next/server";
import { addItemToCart } from "../../../../lib/db/cart";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, productId, quantity } = body;

    if (!userId || !productId) {
      return NextResponse.json(
        { error: "userId and productId are required." },
        { status: 400 }
      );
    }

    const cartItem = await addItemToCart(userId, productId, quantity ?? 1);

    return NextResponse.json({
      success: true,
      cartItem,
    });
  } catch (error) {
    console.error("POST /api/cart/add error:", error);

    return NextResponse.json(
      { error: "Failed to add item to cart." },
      { status: 500 }
    );
  }
}