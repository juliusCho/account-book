import React from "react";
import styles from '../css/TodayList.module.css';
import TodayItem from "./TodayItem";
import {ExpenditureType} from "../modules/types";

export default function TodayList({expenditureList}: {expenditureList: ExpenditureType[]}): JSX.Element {
    return (
        <>
            <div className={styles.TodayList}>
                {expenditureList.map(expenditure => (
                    <TodayItem
                        key={expenditure.id}
                        {...expenditure}
                    />
                ))}
            </div>
        </>
    );
};