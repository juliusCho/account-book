import React from "react";
import styles from '../css/TodayItem.module.css';
import { MdCreate, MdDelete } from "react-icons/md";
import {ExpenditureType} from "../modules/types";

export default function TodayItem({id, category, title, cost, onUpdate}: ExpenditureType): JSX.Element {
    return (
        <div className={styles.TodayItem}>
            <div>{category.label}</div>
            <div>{title}</div>
            <div>{cost}</div>
            <MdCreate/>
            <MdDelete/>
        </div>
    );
};