import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  protected _race: Race;
  protected _archetype: Archetype;
  protected _maxLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;
  protected _defense: number;
  protected _dexterity: number;
  protected readonly _energy?: Energy;
  protected _name: string;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
    this._name = name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy | undefined {
    if (this._energy) {
      return this._energy;
    }
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get name(): string {
    return this._name;
  }

  attack(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  special?(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  levelUp(): void {
    throw new Error('Method not implemented.');
  }

  receiveDamage(attackPoints: number): number {
    throw new Error('Method not implemented.');
  }
}

export default Character;