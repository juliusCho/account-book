import React from "react";
import styles from '../css/TodayList.module.css';
import TodayItem from "./TodayItem";
import { useSelector } from "react-redux";
import {RootState} from "../modules/reducer";
import {Expenditure} from "../modules/types";

export default function TodayList(): JSX.Element {
    const expenditureList: Expenditure[] = useSelector((state: RootState) => state.expenditure);

    return (
        <div className={styles.TodayList}>
            {expenditureList.map(expenditure => (
                <TodayItem
                    key={expenditure.id}
                    {...expenditure}
                />
            ))}
        </div>
    );
};