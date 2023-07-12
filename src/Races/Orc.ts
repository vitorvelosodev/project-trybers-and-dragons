import Race from './Race';

class Orc extends Race {
  private _maxLifePoints : number;
  protected static counter = 0;

  constructor(nameArg: string, dexArg: number) {
    super(nameArg, dexArg);
    this._maxLifePoints = 74;
    Orc.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.counter;
  }
}

export default Orc;