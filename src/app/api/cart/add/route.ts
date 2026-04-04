import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { addItemToCart } from "../../../../lib/db/cart";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const userId = (session?.user as any)?.id;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { productId, quantity } = body;

    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { success: false, error: "productId and quantity are required" },
        { status: 400 }
      );
    }

    const qty = Number(quantity);

    if (Number.isNaN(qty) || qty <= 0) {
      return NextResponse.json(
        { success: false, error: "quantity must be a positive number" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    const cartItem = await addItemToCart(userId, productId, qty);

    return NextResponse.json({
      success: true,
      cartItem,
    });
  } catch (error) {
    console.error("POST /api/cart/add error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}