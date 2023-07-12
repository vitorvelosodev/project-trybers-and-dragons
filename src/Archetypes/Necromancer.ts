import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  protected _energyType : EnergyType = 'mana';
  protected static counter = 0;

  constructor(name : string) {
    super(name);
    Necromancer.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.counter;
  }
}

export default Necromancer;