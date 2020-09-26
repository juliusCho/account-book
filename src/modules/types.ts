export type Category = { id: number; label?: string; };

export interface NewExpenditure {
    category: Category;
    title: string;
    cost: number;
};

export interface Expenditure extends NewExpenditure {
    id: number;
    onUpdate: boolean;
};

export const SET_CAT = 'SET_CAT' as const;
export const EXP_LIST = 'EXP_LIST' as const;
export const CREATE = 'CREATE' as const;
export const UPDATE = 'UPDATE' as const;
export const DELETE = 'DELETE' as const;

export type CategoryAction = { type: 'SET_CAT', category: Category };
export type ExpenditureAction =
    { type: 'EXP_LIST', category: Category | undefined } |
    { type: 'CREATE', category: Category, expenditure: NewExpenditure } |
    { type: 'UPDATE', category: Category, expenditure: Expenditure } |
    { type: 'DELETE', category: Category, id: number };

export {}