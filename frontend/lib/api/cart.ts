import { apiFetch } from './client';

export interface CartItemResponse {
  id: number;
  productId: number;
  productTitle: string;
  productImage: string | null;
  price: number;
  totalPrice: number;
  quantity: number;
  availableStock: number;
  isAvailable: boolean;
}

export interface CartResponse {
  cartItems: CartItemResponse[];
  totalPrice: number;
}

export async function getCart(): Promise<CartResponse> {
  return apiFetch<CartResponse>('/api/cart');
}

export async function addToCart(productId: number, quantity: number): Promise<CartResponse> {
  return apiFetch<CartResponse>('/api/cart/items', {
    method: 'POST',
    body: JSON.stringify({ productId, quantity }),
  });
}

export async function updateCartItem(cartItemId: number, quantity: number): Promise<void> {
  return apiFetch<void>(`/api/cart/items/${cartItemId}`, {
    method: 'POST',
    body: JSON.stringify({ quantity }),
  });
}

export async function removeCartItem(cartItemId: number): Promise<void> {
  return apiFetch<void>(`/api/cart/items/${cartItemId}`, {
    method: 'DELETE',
  });
}

export async function clearCart(): Promise<void> {
  return apiFetch<void>('/api/cart', {
    method: 'DELETE',
  });
}
