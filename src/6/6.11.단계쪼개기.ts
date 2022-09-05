interface ProductInfo {
  basePrice: number;
  discountRate: number;
  discountThreshold: number;
  quantity: number;
}
interface ShippingMethodInfo {
  discountThreshold: number;
  feePerCase: number;
  discountedFee: number;
}

class Product {
  private price: number;
  private discountRate: number;
  private discountThreshold: number;
  public quantity: number;

  constructor({ basePrice, discountRate, discountThreshold, quantity }: ProductInfo) {
    this.price = basePrice;
    this.discountRate = discountRate;
    this.discountThreshold = discountThreshold;
    this.quantity = quantity;
  }

  get basePrice() {
    return this.quantity * this.price;
  }
  private get discount() {
    return Math.max(this.quantity - this.discountThreshold, 0) * this.price * this.discountRate;
  }
  get totalPrice() {
    return this.basePrice - this.discount;
  }
}

class ShippingMethod {
  private discountThreshold: number;
  private feePerCase: number;
  private discountedFee: number;

  constructor({ feePerCase, discountThreshold, discountedFee }: ShippingMethodInfo) {
    this.discountThreshold = discountThreshold;
    this.feePerCase = feePerCase;
    this.discountedFee = discountedFee;
  }

  private calculateShippingPerCase(basePrice: number) {
    return basePrice > this.discountThreshold ? this.discountedFee : this.feePerCase;
  }
  public calculateShippingCost(product: Product) {
    const shippingPerCase = this.calculateShippingPerCase(product.basePrice);
    return product.quantity * shippingPerCase;
  }
}

export function priceOrder(product: Product, shippingMethod: ShippingMethod) {
  const shippingCost = shippingMethod.calculateShippingCost(product);
  return product.totalPrice + shippingCost;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(new Product({ ...product, quantity: 5 }), new ShippingMethod(shippingMethod));
