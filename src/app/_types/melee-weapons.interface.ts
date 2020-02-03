export interface IMeleeWeapons extends Document {
    name: string;
    range: number[];
    swingbaseDamage: number;
    swingDices: string[];
    thrustbaseDamage: number;
    thrustDices: string[];
    strRequirement: number;
    weight: number;
    cost: string;
    description: string;
}
