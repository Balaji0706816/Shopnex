import { NextRequest, NextResponse } from "next/server";
import { clearCartByUserId } from "../../../../lib/db/cart";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      );
    }

    await clearCartByUserId(userId);

    return NextResponse.json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    console.error("Clear cart error:", error);

    const message =
      error instanceof Error ? error.message : "Failed to clear cart";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}