import React, {ChangeEvent} from "react";
import styles from '../css/Category.module.css';
import { categoryApi } from "../api/expenditureApi";
import {CategoryType} from "../modules/types";

type CategoryParams = {
    category: CategoryType;
    changeCat: (category: CategoryType) => void;
};

export default React.memo(function Category({category, changeCat}: CategoryParams): JSX.Element {
    const apiResponse = categoryApi();
    if (apiResponse.code !== 200) return <div className={styles.Category}>오류발생</div>;

    const categories = apiResponse.data;

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeCat({
            id: Number(e.target.value),
            label: e.target.options[e.target.selectedIndex].text
        });
    };

    return (
        <div className={styles.Category}>
            <h3>
                카테고리별로 보기:
                <select name="categories" className="categories" onChange={onChange}>
                    {categories.map(category => (
                        <option
                            value={category.id}
                            key={category.id}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </h3>
        </div>
    );
});