{
  class Order {
    constructor(private quantity: number, private item: { price: number }) {}

    public get price() {
      return this.basePrice * this.discountFactor;
    }

    private get basePrice() {
      return this.quantity * this.item.price;
    }

    private get discountFactor() {
      if (this.basePrice > 1000) {
        return 0.95;
      }
      return 0.98;
    }
  }
}
