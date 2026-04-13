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

    const contentType = req.headers.get("content-type") || "";

    let productId: string | undefined;
    let quantity: number | undefined;

    if (contentType.includes("application/json")) {
      const body = await req.json();
      productId = body.productId;
      quantity = Number(body.quantity);
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      productId = String(formData.get("productId") || "");
      quantity = Number(formData.get("quantity"));
    }

    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { success: false, error: "productId and quantity required" },
        { status: 400 }
      );
    }

    if (Number.isNaN(quantity) || quantity <= 0) {
      return NextResponse.json(
        { success: false, error: "Invalid quantity" },
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

    const cartItem = await addItemToCart(userId, productId, quantity);

    return NextResponse.json({
      success: true,
      cartItem,
    });
  } catch (error) {
    console.error("POST /api/cart/add error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to add item" },
      { status: 500 }
    );
  }
}