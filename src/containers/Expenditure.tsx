import React, {useEffect} from "react";
import styles from '../css/Expenditure.module.css';
import Head from "../components/Head";
import TodayList from '../components/TodayList';
import ItemCreate from "../components/ItemCreate";
import Category from "../components/Category";
import {CategoryAction, CategoryType, ExpenditureAction, ExpenditureType, NewExpenditure} from "../modules/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules/reducer";
import {createExpenditure, deleteExpenditure, setCat, updateExpenditure} from "../modules/actions";
import {Dispatch} from "redux";
import {categoryApi} from "../api/expenditureApi";

function getTotalCost(expenditureList: ExpenditureType[]): number {
    return expenditureList.length === 0
        ? 0
        : expenditureList
            .map(expenditure => expenditure.cost)
            .reduce((acc, next) => acc + next);
}

const apiResponse = categoryApi();
const searchCategories = apiResponse.error ? [] : apiResponse.data;
const categories = searchCategories.filter(category => category.id !== 0);

export default function Expenditure(): JSX.Element {
    const category: CategoryType = useSelector((state: RootState) => state.category);
    const expenditureList: ExpenditureType[] = useSelector((state: RootState) => state.expenditure);
    let totalCost = getTotalCost(expenditureList);

    const catDispatcher: Dispatch<CategoryAction> = useDispatch();
    const expDispatcher: Dispatch<ExpenditureAction> = useDispatch();

    const changeCat = (category: CategoryType) => {
        catDispatcher(setCat(category));
    };
    const addExpenditure = (expenditure: NewExpenditure) => {
        expDispatcher(createExpenditure(expenditure, category));
    };
    const changeExpenditure = (expenditure: ExpenditureType) => {
        expDispatcher(updateExpenditure(expenditure, category));
    };
    const removeExpenditure = (id: number) => {
        expDispatcher(deleteExpenditure(id, category));
    };

    useEffect(() => {
        totalCost = getTotalCost(expenditureList);
    }, [catDispatcher, expDispatcher]);

    return (
        <div className={styles.Expenditure}>
            <div className={styles.template}>
                <Head total={totalCost}/>
                <Category
                    category={category}
                    categories={searchCategories}
                    changeCat={changeCat}
                />
                <TodayList
                    expenditureList={expenditureList}
                    changeExpenditure={changeExpenditure}
                    removeExpenditure={removeExpenditure}
                    categories={categories}
                />
                <ItemCreate
                    categories={categories}
                    addExpenditure={addExpenditure}
                />
            </div>
        </div>
    );
};