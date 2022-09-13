export class Person {
  private _name: string;
  private _courses: Course[];
  constructor(name: string) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return [...this._courses];
  }

  addCourse(courses: Course) {
    this._courses.push(courses);
  }
}

export class Course {
  private _name: string;
  private _isAdvanced: boolean;

  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

const ellie = new Person('엘리');
ellie.addCourse(new Course('리팩토링', true));

console.log(ellie.courses.length);
