import {NewExpenditure} from "../modules/types";

export function validator(form: NewExpenditure): boolean {
    return form?.title ? true : false;
};