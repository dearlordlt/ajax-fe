import { SKILL } from '.';

export interface ISkills extends Document {
    _id?: string;
    name: string;
    description: string;
    skillType: SKILL;
}
