import {
    SET_CAT, CREATE, UPDATE, DELETE,
    ExpenditureAction,
    NewExpenditure,
    ExpenditureType,
    CategoryType, CategoryAction
} from "./types";

export const setCat = (category: CategoryType): CategoryAction => ({type: SET_CAT, category});

export const createExpenditure = (
    expenditure: NewExpenditure,
    category: CategoryType
): ExpenditureAction => ({type: CREATE, expenditure, category});

export const updateExpenditure = (
    expenditure: ExpenditureType,
    category: CategoryType
): ExpenditureAction => ({type: UPDATE, expenditure, category});

export const deleteExpenditure = (
    id: number,
    category: CategoryType
): ExpenditureAction => ({type: DELETE, id, category});