import Race from './Race';

class Elf extends Race {
  private _maxLifePoints : number;

  constructor(nameArg: string, dexArg: number) {
    super(nameArg, dexArg);
    this._maxLifePoints = 99;
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;