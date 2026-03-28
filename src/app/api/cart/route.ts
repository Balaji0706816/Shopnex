import { NextRequest, NextResponse } from "next/server";
import { getCartByUserId } from "../../../lib/db/cart";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      );
    }

    const cart = await getCartByUserId(userId);

    return NextResponse.json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("GET cart error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch cart" },
      { status: 500 }
    );
  }
}