import Race from './Race';

class Halvling extends Race {
  private _maxLifePoints : number;
  protected static counter = 0;

  constructor(nameArg: string, dexArg: number) {
    super(nameArg, dexArg);
    this._maxLifePoints = 60;
    Halvling.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halvling.counter;
  }
}

export default Halvling;