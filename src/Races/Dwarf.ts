import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints : number;
  protected static counter = 0;

  constructor(nameArg: string, dexArg: number) {
    super(nameArg, dexArg);
    this._maxLifePoints = 80;
    Dwarf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.counter;
  }
}

export default Dwarf;