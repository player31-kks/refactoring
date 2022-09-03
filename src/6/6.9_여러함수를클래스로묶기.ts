const BASE_RATE = 0.2;
const EVENT = {
  year: 2017,
  month: 5,
};

// 데이터가 공통적으로 나타나는 것은 클래스로 묶자!!!
class Reading {
  constructor(private customer: string, private quantity: number, private month: number, private year: number) {}

  public get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }

  public get baseCharge() {
    return this.baseRate * this.quantity;
  }

  private get baseRate(): number {
    if (this.year === EVENT.year && this.month === EVENT.month) {
      return BASE_RATE / 2;
    }
    return BASE_RATE;
  }

  private get taxThreshold() {
    return 0.1;
  }
}
