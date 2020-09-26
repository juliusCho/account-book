import React from "react";
import styles from '../css/TodayItem.module.css';
import { MdCreate, MdDelete } from "react-icons/md";
import {CategoryType, ExpenditureType} from "../modules/types";
import {moneyFormat} from "../lib/formatter";

type TodayItemArgs = {
    changeExpenditure: (expenditure: ExpenditureType) => void;
    removeExpenditure: (id: number) => void;
    id: number;
    category: CategoryType;
    title: string;
    cost: number;
    onUpdate: boolean;
};

export default function TodayItem(
    {
        changeExpenditure,
        removeExpenditure,
        id, category, title, cost, onUpdate
    }: TodayItemArgs
): JSX.Element {
    return (
        <div className={styles.TodayItem}>
            <div>{category.label}</div>
            <div>{title}</div>
            <div>{moneyFormat(cost)}원</div>
            <MdCreate/>
            <MdDelete/>
        </div>
    );
};