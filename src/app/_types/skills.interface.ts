import { SKILL } from '.';

export interface ISkills extends Document {
    name: string;
    description: string;
    skillType: SKILL;
}
