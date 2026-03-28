import { prisma } from "../prisma";

export async function getOrCreateCart(userId: string) {
  let cart = await prisma.cart.findUnique({
    where: { userId },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
    });
  }

  return cart;
}

export async function getCartByUserId(userId: string) {
  const cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart) {
    return {
      items: [],
      totalItems: 0,
      subtotal: 0,
    };
  }

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.items.reduce((sum, item) => {
    const price = Number(item.product.price);
    return sum + price * item.quantity;
  }, 0);

  return {
    ...cart,
    totalItems,
    subtotal,
  };
}

export async function addItemToCart(
  userId: string,
  productId: string,
  quantity: number
) {
  const cart = await getOrCreateCart(userId);

  const existingCartItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingCartItem) {
    return prisma.cartItem.update({
      where: { id: existingCartItem.id },
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
      include: {
        product: true,
      },
    });
  }

  return prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      quantity,
    },
    include: {
      product: true,
    },
  });
}

export async function removeItemFromCart(userId: string, productId: string) {
  const cart = await getCartByUserId(userId);

  if (!cart) {
    throw new Error("Cart not found.");
  }

  const existingItem = await prisma.cartItem.findUnique({
    where: {
      cartId_productId: {
        cartId: cart.items[0].cartId,
        productId,
      },
    },
  });

  if (!existingItem) {
    throw new Error("Cart item not found.");
  }

  if (existingItem.quantity > 1) {
    return prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: existingItem.quantity - 1,
      },
      include: {
        product: true,
      },
    });
  }

  return prisma.cartItem.delete({
    where: {
      id: existingItem.id,
    },
  });
}

export async function clearCartByUserId(userId: string) {
  const cart = await prisma.cart.findUnique({
    where: { userId },
  });

  if (!cart) {
    throw new Error("Cart not found");
  }

  await prisma.cartItem.deleteMany({
    where: {
      cartId: cart.id,
    },
  });

  return true;
}