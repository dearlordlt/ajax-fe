import { RANGED_WEAPONSTYPE, RANGE_STR_MULTIPLIER } from '.';

export interface IRangedWeapons extends Document {
  _id?: string;
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

