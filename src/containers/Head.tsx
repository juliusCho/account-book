import React from "react";
import styles from './Head.module.css';

function moneyFormat(total: number = 0): string {
    let totalStrs: string[] = String(total).split('');
    let result = '';

    let commaPoint = 3;
    for (let i = totalStrs.length - 1, ii = 0; i >= ii; i--) {
        if (commaPoint === 0) {
            result = totalStrs[i] + ',' + result;
            commaPoint = 2;
        } else {
            result = totalStrs[i] + result;
            commaPoint--;
        }
    }
    return result;
}

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