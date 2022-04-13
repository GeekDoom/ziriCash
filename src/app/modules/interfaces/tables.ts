export interface Movements {
    sender?: string;
    receives?: string;
    movement?: any;
    amount?: number;
    date?: Date;
}

export interface Dashboard {
    name: string;
    toc: string;
    desc: string;
    amount: number;
}