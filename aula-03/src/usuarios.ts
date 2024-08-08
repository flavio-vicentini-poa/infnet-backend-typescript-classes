export type User = {
    id: number;
    name: string;
};

export class UserClass {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export const users: User[] = [
    {
        id: 1,
        name: 'Nikola Tesla',
    },
    {
        id: 2,
        name: 'Albert Eistein',
    },
];
