import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  protected _energyType : EnergyType = 'stamina';
  protected static counter = 0;

  constructor(name : string) {
    super(name);
    Ranger.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Ranger.counter;
  }
}

export default Ranger;