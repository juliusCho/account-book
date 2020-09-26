import React from "react";
import styles from '../css/ItemCreate.module.css';
import {NewExpenditure} from "../modules/types";

type ItemCreateArgs = {
    addExpenditure: (expenditure: NewExpenditure) => void;
}

export default function ItemCreate({addExpenditure}: ItemCreateArgs): JSX.Element {



    const handleAdd = () => {

    };

    return (
        <div className={styles.ItemCreate}>

        </div>
    );
};