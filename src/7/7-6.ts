export class Shipment {
  constructor(public info: { shippingCompany: string; trackingNumber: number }) {}
  get trackingInfo() {
    return `${this.info.shippingCompany}: ${this.info.trackingNumber}`;
  }
}

const shipment = new Shipment({ trackingNumber: 999, shippingCompany: 'Maersk' });
console.log(shipment.trackingInfo);
