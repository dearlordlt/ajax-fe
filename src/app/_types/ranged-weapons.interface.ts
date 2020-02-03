export interface IRangedWeapons extends Document {
    name: string;
    weaponType: RANGED_WEAPONSTYPE;
    rangeType: RANGE_STR_MULTIPLIER;
    range: number;
    baseDamage: number;
    damageDice: string[];
    strRequirement: number;
    weight: number;
    cost: string;
    description: string;
  }

export enum RANGE_STR_MULTIPLIER {
    MULTIPLIER = 'MULTIPLIER',
    NUMBER = 'NUMBER',
}

export enum RANGED_WEAPONSTYPE {
    THROWABLE = 'THROWABLE',
    BALISTIC = 'BALISTIC',
    BLACKPOWDER = 'BLACKPOWDER',
}