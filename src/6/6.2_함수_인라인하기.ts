// 예제 1
// 실제 코드의 내용과 이름이 추상화가 아닌 일치한다면 그 함수는 불필요하다!

class Driver {
  constructor(public numberOfLate: number) {}

  isBestDriver() {
    return this.numberOfLate < 5;
  }
}

export function rating(driver: Driver) {
  if (driver.isBestDriver()) {
    return 1;
  }
  return 2;
}

// 예제 2
class Customer {
  constructor(public name: string, public location: string) {}

  get info() {
    const lines = [];
    lines.push(['name', this.name]);
    lines.push(['location', this.location]);
    return lines;
  }
}

function reportLines(customer: Customer) {
  return customer.info;
}
