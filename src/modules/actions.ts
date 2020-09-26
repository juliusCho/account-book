import {
    SET_CAT, EXP_LIST, CREATE, UPDATE, DELETE,
    ExpenditureAction,
    NewExpenditure,
    Expenditure,
    Category, CategoryAction
} from "./types";


export const setCat = (category: Category): CategoryAction => ({type: SET_CAT, category});

export const listAction = (category: Category | undefined): ExpenditureAction => ({type: EXP_LIST, category});

export const createAction = (
    {expenditure, category}: {expenditure: NewExpenditure, category: Category}
    ): ExpenditureAction => ({type: CREATE, expenditure, category});

export const updateAction = (
    {expenditure, category}: {expenditure: Expenditure, category: Category}
    ): ExpenditureAction => ({type: UPDATE, expenditure, category});

export const deleteAction = (
    {id, category}: {id: number, category: Category}
    ): ExpenditureAction => ({type: DELETE, id, category});