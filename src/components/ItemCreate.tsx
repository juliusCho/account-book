import React from "react";
import styles from '../css/ItemCreate.module.css';
import {CategoryType, NewExpenditure} from "../modules/types";

type ItemCreateArgs = {
    categories: CategoryType[];
    addExpenditure: (expenditure: NewExpenditure) => void;
};

export default function ItemCreate({categories, addExpenditure}: ItemCreateArgs): JSX.Element {



    const handleAdd = () => {

    };

    return (
        <div className={styles.ItemCreate}>

        </div>
    );
};