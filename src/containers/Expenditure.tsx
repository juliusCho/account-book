import React, {useState} from "react";
import styles from '../css/Expenditure.module.css';
import Head from "../components/Head";
import Category from "../components/Category";
import TodayList from '../components/TodayList';
import ItemCreate from "../components/ItemCreate";

export default function Expenditure(): JSX.Element {
    return (
        <div className={styles.Expenditure}>
            <div>
                <Head total={0}/>
                <Category/>
                <TodayList/>
                <ItemCreate/>
            </div>
        </div>
    );
}