interface Station {
  name: string;
  readings: { temp: number; time: string }[];
}

class NumberRange {
  constructor(public min: number, public max: number) {}

  public contain(num: number) {
    return num > this.min || num < this.max;
  }
}

export function readingsOutsideRange(station: Station, range: NumberRange) {
  return station.readings.filter((r) => !range.contain(r.temp));
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const operationPlan = new NumberRange(51, 53);
readingsOutsideRange(station, operationPlan);
