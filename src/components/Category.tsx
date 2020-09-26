import React from "react";
import styles from '../css/Category.module.css';
import { categoryApi } from "../api/expenditureApi";

export default function Category(): JSX.Element {
    const apiResponse = categoryApi();
    if (apiResponse.code !== 200) return <div className={styles.Category}>오류발생</div>;

    const categories = apiResponse.data;

    return (
        <div className={styles.Category}>
            <h3>
                카테고리별로 보기:
                <select name="categories" className="categories">
                    {categories.map(category => (
                        <option value={category.id} key={category.id}>{category.label}</option>
                    ))}
                </select>
            </h3>
        </div>
    );
}