import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints : number;

  constructor(nameArg: string, dexArg: number) {
    super(nameArg, dexArg);
    this._maxLifePoints = 80;
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;