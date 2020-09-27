import React, {ChangeEvent} from "react";
import {CategoryType} from "../modules/types";
import styles from "../css/Categories.module.css";

type CategoriesArgs = {
    categories: CategoryType[];
    changeCat: (category: CategoryType) => void;
    inputStyle: object;
    orgCatId?: number;
};

export default function Categories({categories, changeCat, inputStyle, orgCatId = 0}: CategoriesArgs): JSX.Element {
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeCat({
            id: Number(e.target.value),
            label: e.target.options[e.target.selectedIndex].text
        });
    };

    return (
        <select
            name="categories"
            onChange={onChange}
            className={styles.Categories}
            style={inputStyle}
            value={orgCatId}
        >
            {categories.map(category => (
                <option
                    // selected={category.id === orgCatId ? true : false}
                    value={category.id}
                    key={category.id}>
                    {category.label}
                </option>
            ))}
        </select>
    );
};