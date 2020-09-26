import {
    Expenditure,
    ExpenditureAction,
    SET_CAT, CREATE, UPDATE, DELETE, Category, CategoryAction
} from "./types";
import {
    ApiResponse,
    deleteApi, insertApi, selectApi, updateApi
} from "../api/expenditureApi";
import { combineReducers } from "redux";

const category = (state: Category, action: CategoryAction): Category => {
    switch (action.type) {
        case SET_CAT:
            return action?.category || {id: 0};
        default:
            // let response: ApiResponse<number> = {code: 415, data: 0, error: true};
            // console.log({...response, message: 'Unhandled action type for reducer'});
            return state || {id: 0};
    }
}

const expenditure = (state: Expenditure, action: ExpenditureAction): Expenditure[] => {
    let response: ApiResponse<number> = {code: 415, data: 0, error: false};

    switch (action.type) {
        case CREATE:
            response = insertApi(action.expenditure);
            break;
        case UPDATE:
            response = updateApi(action.expenditure);
            break;
        case DELETE:
            response = deleteApi(action.id);
            break;
        default:
            // console.log({...response, error: true, message: 'Unhandled action type for reducer'});
            break;
    }
    if (response.code !== 200) {
        if (action.type === CREATE || action.type === UPDATE || action.type === DELETE) {
            console.log({...response, error: true, message: 'Somethings wrong while requesting api.'});
        }
    }
    return selectApi(action.category).data;
};

const reducer = combineReducers({category, expenditure});
export default reducer;

export type RootState = ReturnType<typeof reducer>;