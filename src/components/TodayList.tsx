import React from "react";
import styles from '../css/TodayList.module.css';
import TodayItem from "./TodayItem";
import {ExpenditureType} from "../modules/types";

type TodayListArgs = {
    expenditureList: ExpenditureType[];
    changeExpenditure: (expenditure: ExpenditureType) => void;
    removeExpenditure: (id: number) => void;
};

export default function TodayList(
    {
          expenditureList, changeExpenditure, removeExpenditure
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
                    />
                ))}
            </div>
        </>
    );
};