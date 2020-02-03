export interface ISpells extends Document {
    schoolName: string;
    name: string;
    tier: number;
    description: string;
    spellType: number[];
    spellCostType: SPELL_COST_TYPE;
    spellCost: number[];
  }

export enum SPELL {
    NonCombat = 'NON-COMBAT',
    COMBAT = 'COMBAT',
    UTILITY = 'UTILITY',
    FORBIDDEN = 'FORBIDDEN',
    RITUAL = 'RITUAL',
}

export enum SPELL_COST_TYPE {
    NUMBER = 'NUMBER',
    PERCENTAGE = 'PERCENTAGE',
}