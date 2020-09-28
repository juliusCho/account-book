export type CategoryType = {
    id: number;
    label?: string;
    color?: string;
};

export interface NewExpenditure {
    category: CategoryType;
    title: string;
    cost: number;
};

export interface ExpenditureType extends NewExpenditure {
    id: number;
    onUpdate: boolean;
};

export const SET_CAT = 'SET_CAT' as const;
export const EXP_LIST = 'EXP_LIST' as const;
export const CREATE = 'CREATE' as const;
export const UPDATE = 'UPDATE' as const;
export const DELETE = 'DELETE' as const;

export type CategoryAction = { type: 'SET_CAT', category: CategoryType };
export type ExpenditureAction =
    { type: 'EXP_LIST', category: CategoryType | undefined } |
    { type: 'CREATE', category: CategoryType, expenditure: NewExpenditure } |
    { type: 'UPDATE', category: CategoryType, expenditure: ExpenditureType } |
    { type: 'DELETE', category: CategoryType, id: number };

export const ITEM_CHANGE_CAT = 'item/CHANGE_CAT' as const;
export const ITEM_CHANGE_TITLE = 'item/CHANGE_TITLE' as const;
export const ITEM_CHANGE_COST = 'item/CHANGE_COST' as const;

export type ItemActionType =
    {type: 'item/CHANGE_CAT'; category: CategoryType} |
    {type: 'item/CHANGE_TITLE'; title: string} |
    {type: 'item/CHANGE_COST'; cost: number};

export {};