import {
    SET_CAT, EXP_LIST, CREATE, UPDATE, DELETE,
    ExpenditureAction,
    NewExpenditure,
    ExpenditureType,
    CategoryType, CategoryAction
} from "./types";


export const setCat = (category: CategoryType): CategoryAction => ({type: SET_CAT, category});

export const listAction = (category: CategoryType | undefined): ExpenditureAction => ({type: EXP_LIST, category});

export const createAction = (
    {expenditure, category}: {expenditure: NewExpenditure, category: CategoryType}
    ): ExpenditureAction => ({type: CREATE, expenditure, category});

export const updateAction = (
    {expenditure, category}: {expenditure: ExpenditureType, category: CategoryType}
    ): ExpenditureAction => ({type: UPDATE, expenditure, category});

export const deleteAction = (
    {id, category}: {id: number, category: CategoryType}
    ): ExpenditureAction => ({type: DELETE, id, category});