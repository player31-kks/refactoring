interface Customer {
  id: number;
}

export default class Book {
  private reservations: Customer[];

  constructor() {
    this.reservations = [];
  }

  addReservation(customer: Customer) {
    this.reservations.push(customer);
  }

  hasReservation(customer: Customer): boolean {
    return this.reservations.some((reservedCustomer) => reservedCustomer.id === customer.id);
  }
}
