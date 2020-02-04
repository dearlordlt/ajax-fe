export interface IMeleeWeapons extends Document {
    name: string;
    range: number[];
    swingBaseDamage: number;
    swingDices: string[];
    thrustBaseDamage: number;
    thrustDices: string[];
    strRequirement: number;
    weight: number;
    cost: string;
    description: string;
}
