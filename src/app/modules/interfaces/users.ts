export interface User {
    id: string;
    name: string;
    dni: string;
    email: string;
    password: string;
    type: boolean;
    balance: number;
    country: string;
    avatar: string;
    positive: number;
    negative: number;
    creation: Date;
}
