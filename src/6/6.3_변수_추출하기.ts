interface Order {
  quantity: number;
  itemPrice: number;
}

const MAX_DELIVERY_FEE = 100;
const DISCOUNT_BASELINE = 500;
const DISCOUNT_PERCENTAGE = 0.05;
export function price(order: Order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const discountByQuantity = Math.max(0, order.quantity - DISCOUNT_BASELINE) * order.itemPrice * DISCOUNT_PERCENTAGE;
  const deliveryFee = Math.min(order.quantity * order.itemPrice * 0.1, MAX_DELIVERY_FEE);

  return basePrice - discountByQuantity + deliveryFee;
}
