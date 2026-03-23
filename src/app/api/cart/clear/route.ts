import { NextRequest, NextResponse } from "next/server";
import { clearCart } from "../../../../lib/db/cart";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required." },
        { status: 400 }
      );
    }

    await clearCart(userId);

    return NextResponse.json({
      success: true,
      message: "Cart cleared successfully.",
    });
  } catch (error) {
    console.error("POST /api/cart/clear error:", error);

    return NextResponse.json(
      { error: "Failed to clear cart." },
      { status: 500 }
    );
  }
}