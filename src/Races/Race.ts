abstract class Race {
  protected _name : string;
  protected _dexterity : number;

  constructor(nameArg : string, dexArg : number) {
    this._name = nameArg;
    this._dexterity = dexArg;
  }

  get name() : string {
    return this._name;
  }

  get dexterity() : number {
    return this._dexterity;
  }

  static createdRacesInstances() : number {
    throw new Error('Not implemented');
  }

  abstract maxLifePoints() : number;
}

export default Race;