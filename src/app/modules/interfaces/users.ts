export interface User {
    name: string;
    dni: string;
    email: string;
    password: string;
    type: number;
    balance: string;
    movements: any[];
    country: string;
    positive: number;
    negative: number;
}
