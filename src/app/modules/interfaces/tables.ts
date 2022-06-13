export interface Movements {
    sender?: string;
    receives?: string;
    movement?: number;
    amount?: number;
    date?: Date;
}

export interface Dashboard {
    name: string;
    toc: string;
    desc: string;
    amount: number;
}

export interface Transactions {
    sender?: string;
    receives?: string;
    movement?: number;
    amount?: number;
    date?: string;
}
