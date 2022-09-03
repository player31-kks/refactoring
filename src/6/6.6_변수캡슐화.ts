let defaultOwner = { firstName: '마틴', lastName: '파울러' };

class Person {
  constructor(private firstName: string, private lastName: string) {}

  get name(): string {
    return this.firstName + this.lastName;
  }
}

export function getDefaultOwner() {
  let defaultOwner = new Person('마틴', '파울러');
  return defaultOwner;
}
