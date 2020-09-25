import React from "react";
import styles from './Expenditure.module.css';
import Head from "./Head";
import Category from "./Category";

export default function Expenditure(): JSX.Element {
    return (
        <div className={styles.Expenditure}>
            <div>
                <Head total={0}/>
                <Category/>
            </div>
        </div>
    );
}