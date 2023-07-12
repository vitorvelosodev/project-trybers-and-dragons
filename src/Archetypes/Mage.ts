import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  protected _energyType : EnergyType = 'mana';
  protected static counter = 0;

  constructor(name : string) {
    super(name);
    Mage.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Mage.counter;
  }
}

export default Mage;