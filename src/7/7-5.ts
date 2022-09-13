{
  class Person {
    private phoneNumber: Phone;
    constructor(public name: string, private areaCode: string, private number: string) {
      this.phoneNumber = new Phone(this.areaCode, this.number);
    }

    get telephoneNumber() {
      return this.phoneNumber.telephoneNumber;
    }
  }

  class Phone {
    constructor(public areaCode: string, public num: string) {}
    get telephoneNumber() {
      return `(${this.areaCode}) ${this.num}`;
    }
  }

  const person = new Person('엘리', '010', '12345678');
}
