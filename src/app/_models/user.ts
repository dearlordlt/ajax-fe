export enum Role {
    User = 'USER',
    Admin = 'ADMIN'
}

export class User {
    id: number;
    username: string;
    password: string;
    role: Role;
    token?: string;
}
