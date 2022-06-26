interface Order {
  basePrice: number;
}

export function isDeliveryFree(anOrder: Order) {
  return anOrder.basePrice > 1000;
}
