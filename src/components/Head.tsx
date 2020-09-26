import React from "react";
import styles from '../css/Head.module.css';
import {moneyFormat} from "../lib/formatter";

export default function Head({ total }: { total: number }): JSX.Element {
    const today = new Date();
    const dateString: string = (
        String(today.getFullYear()) + '년 ' +
            String(today.getMonth() + 1) + '월 ' +
            String(today.getDate()) + '일'
    );

    return (
        <div className={styles.Head}>
            <h1 className={styles.title}>오늘의 지출</h1>
            <h3 className={styles.title}>{dateString}</h3>
            <h3 className={`${styles.title} ${styles.total}`}>
                총 지출:<b>-{moneyFormat(total)}원</b>
            </h3>
        </div>
    );
};