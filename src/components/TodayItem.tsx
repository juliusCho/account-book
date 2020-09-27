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

    color: string;
    categories: CategoryType[];
};

export default function TodayItem(
    {
        changeExpenditure,
        removeExpenditure,
        id, category, title, cost, onUpdate,
        color, categories
    }: TodayItemArgs
): JSX.Element {
    return onUpdate ? (
        <div className={styles.TodayItem}>
            <div className={styles.box}>
                <select name="categories" className={styles.categorySelect}>
                    {categories.map(category => (
                        <option
                            value={category.id}
                            key={category.id}>
                            {category.label}
                        </option>
                    ))}
                </select>
                <input
                    className={styles.input}
                    name="title"
                    value={title}
                    style={{width: '125px', marginRight: 0}}
                />
            </div>
            <div className={styles.box}>
                <input type="number" className={styles.input} name="cost" value={cost}/>
                <MdCreate className={styles.icon} style={{marginRight: '15px'}}/>
                <MdDelete className={styles.icon}/>
            </div>
        </div>
    ) : (
        <div className={styles.TodayItem}>
            <div className={styles.box}>
                <div className={styles.categoryLbl} style={{background: color}}>
                    {category.label}
                </div>
                <div className={styles.label}>{title}</div>
            </div>
            <div className={styles.box}>
                <div className={styles.label}><b>-{moneyFormat(cost)}원</b></div>
                <MdCreate className={styles.icon} style={{marginRight: '15px'}}/>
                <MdDelete className={styles.icon}/>
            </div>
        </div>
    );
};