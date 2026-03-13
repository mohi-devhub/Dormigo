import { apiFetch } from './client';
import type { PagedResponse } from './products';

export interface OrderItemResponse {
  id: number;
  productId: number;
  productTitle: string;
  sellerId: number;
  sellerName: string;
  quantity: number;
  priceAtPurchase: number;
  subtotal: number;
}

export interface OrderResponse {
  id: number;
  orderNumber: string;
  buyerId: number;
  buyerName: string;
  buyerEmail: string;
  items: OrderItemResponse[];
  totalPrice: number;
  orderStatus: string;
  meetingLocation?: string;
  meetingDate?: string;
  createdAt: string;
  completedAt?: string;
}

export async function createOrder(): Promise<{ orderId: number; status: string }> {
  return apiFetch<{ orderId: number; status: string }>('/api/orders', {
    method: 'POST',
    body: JSON.stringify({}),
  });
}

export async function simulatePayment(orderId: number): Promise<OrderResponse> {
  return apiFetch<OrderResponse>(`/api/orders/${orderId}/simulate-payment`, {
    method: 'POST',
    body: JSON.stringify({}),
  });
}

export async function setMeeting(
  orderId: number,
  meetingTime: string,
  meetingLocation: string,
): Promise<OrderResponse> {
  return apiFetch<OrderResponse>(`/api/orders/${orderId}/meeting`, {
    method: 'POST',
    body: JSON.stringify({ meetingTime, meetingLocation }),
  });
}

export async function verifyOtp(orderId: number, otp: string): Promise<OrderResponse> {
  return apiFetch<OrderResponse>(`/api/orders/${orderId}/verify-otp`, {
    method: 'POST',
    body: JSON.stringify({ otp }),
  });
}

export async function cancelOrder(orderId: number): Promise<OrderResponse> {
  return apiFetch<OrderResponse>(`/api/orders/${orderId}`, {
    method: 'DELETE',
  });
}

export async function getOrders(page = 0, size = 20): Promise<PagedResponse<OrderResponse>> {
  return apiFetch<PagedResponse<OrderResponse>>(
    `/api/orders/get-orders?page=${page}&size=${size}`,
  );
}

export async function getSales(page = 0, size = 20): Promise<PagedResponse<OrderResponse>> {
  return apiFetch<PagedResponse<OrderResponse>>(
    `/api/orders/get-sales?page=${page}&size=${size}`,
  );
}

export async function getOrder(orderId: number): Promise<OrderResponse> {
  return apiFetch<OrderResponse>(`/api/orders/${orderId}`);
}
