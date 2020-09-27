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
    return expenditureList.length === 0
        ? (
            <div
                className={styles.TodayList}
                style={{fontWeight: 700, color: '#43484e', marginTop: '10px'}}
            >
                지출 내역이 없습니다.
            </div>
        ) : (
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