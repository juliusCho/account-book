import React from "react";
import styles from '../css/TodayList.module.css';
import TodayItem from "./TodayItem";
import {CategoryType, ExpenditureType} from "../modules/types";

type TodayListArgs = {
    expenditureList: ExpenditureType[];
    changeExpenditure: (expenditure: ExpenditureType) => void;
    removeExpenditure: (id: number) => void;
    categories: CategoryType[];
};

export default function TodayList(
    {
          expenditureList, changeExpenditure, removeExpenditure, categories
    }: TodayListArgs
): JSX.Element {
    return (
        <>
            <div className={styles.TodayList}>
                {expenditureList.map(expenditure => (
                    <TodayItem
                        key={expenditure.id}
                        changeExpenditure={changeExpenditure}
                        removeExpenditure={removeExpenditure}
                        {...expenditure}
                        color={categories.find(cat => cat.id === expenditure.category.id)?.color || 'white'}
                        categories={categories}
                    />
                ))}
            </div>
        </>
    );
};