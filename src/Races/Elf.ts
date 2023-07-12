import Race from './Race';

class Elf extends Race {
  private _maxLifePoints : number;
  protected static counter = 0;

  constructor(nameArg: string, dexArg: number) {
    super(nameArg, dexArg);
    this._maxLifePoints = 99;
    Elf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.counter;
  }
}

export default Elf;