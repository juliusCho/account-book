import React, {ChangeEvent} from "react";
import styles from '../css/Category.module.css';
import {CategoryType} from "../modules/types";

type CategoryArgs = {
    category: CategoryType;
    categories: CategoryType[];
    changeCat: (category: CategoryType) => void;
};

export default React.memo(function Category({category, categories, changeCat}: CategoryArgs): JSX.Element {
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
                <select name="categories" onChange={onChange}>
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