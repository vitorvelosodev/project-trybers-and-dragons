import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  protected _energyType : EnergyType = 'stamina';
  protected static counter = 0;

  constructor(name : string) {
    super(name);
    Warrior.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Warrior.counter;
  }
}

export default Warrior;