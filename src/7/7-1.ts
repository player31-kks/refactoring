{
  class Organization {
    private _name: string;
    private _country: string;
    constructor(name: string, country: string) {
      this._name = name;
      this._country = country;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }
  }
}
