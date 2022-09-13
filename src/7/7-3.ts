class Priority {
  static HIGH = new Priority('high', 4);
  static RUSH = new Priority('rush', 3);
  static NORMAL = new Priority('normal', 2);
  static LOW = new Priority('low', 1);

  constructor(private value: string, private index: number) {}

  higherThan(other: Priority) {
    return this.index > other.index;
  }
}

export class Order {
  priority: Priority;

  constructor(priority: Priority) {
    this.priority = priority;
  }
}

// class Predict {
//   static isHigh(item: Priority) {
//     return item.isHigh();
//   }

//   static isNormal(item: Priority) {
//     return item.isNormal();
//   }
// }

const orders = [new Order(Priority.HIGH), new Order(Priority.NORMAL), new Order(Priority.RUSH)];
const highPriorityCount = orders.filter((o) => o.priority.higherThan(Priority.NORMAL)).length;
