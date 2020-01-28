export enum SKILL {
    COMBAT = 'COMBAT',
    SOCIAL = 'SOCIAL',
}

export interface ISkills extends Document {
    name: string;
    description: string;
    type: SKILL;
}
