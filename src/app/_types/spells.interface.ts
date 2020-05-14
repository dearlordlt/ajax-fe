import { SPELL_COST_TYPE } from './enums';

export interface ISpells extends Document {
    _id?: string;
    name: string;
    schoolName: string;
    tier: number;
    description: string;
    spellType: string[];
    spellCost: number[];
}

