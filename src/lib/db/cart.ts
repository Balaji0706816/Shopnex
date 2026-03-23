import { prisma } from "../prisma";

export async function getCartByUserId(userId: string) {
  return prisma.cart.findUnique({
    where: {
      userId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}

export async function createCartForUser(userId: string) {
  return prisma.cart.create({
    data: {
      userId,
    },
    include: {
      items: true,
    },
  });
}

export async function getOrCreateCart(userId: string) {
  const existingCart = await getCartByUserId(userId);

  if (existingCart) {
    return existingCart;
  }

  return createCartForUser(userId);
}

export async function addItemToCart(
  userId: string,
  productId: string,
  quantity: number = 1
) {
  const cart = await getOrCreateCart(userId);

  const existingItem = await prisma.cartItem.findUnique({
    where: {
      cartId_productId: {
        cartId: cart.id,
        productId,
      },
    },
  });

  if (existingItem) {
    return prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: existingItem.quantity + quantity,
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
        cartId: cart.id,
        productId,
      },
    },
  });

  if (!existingItem) {
    throw new Error("Cart item not found.");
  }

  return prisma.cartItem.delete({
    where: {
      id: existingItem.id,
    },
  });
}

export async function clearCart(userId: string) {
  const cart = await getCartByUserId(userId);

  if (!cart) {
    throw new Error("Cart not found.");
  }

  return prisma.cartItem.deleteMany({
    where: {
      cartId: cart.id,
    },
  });
}