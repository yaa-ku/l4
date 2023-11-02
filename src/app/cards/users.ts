export type Gender = 'male' | 'female';
export interface User {
    name: string;
    surname: string;
    age: number;
    gender: Gender;
}

export const users: User[]  = [
    {
        name: 'Илья',
        surname: 'Орлов',
        age: 21,
        gender: 'male',
    },
    {
        name: 'Влад',
        surname: 'Гурин',
        age: 21,
        gender: 'male',
    },
    {
        name: 'Денис',
        surname: 'Никаноров',
        age: 23,
        gender: 'male',
    },
    {
        name: 'Джо',
        surname: 'Доу',
        age: 17,
        gender: 'female',
    }
]