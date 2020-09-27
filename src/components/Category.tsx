import React from "react";
import styles from '../css/Category.module.css';
import {CategoryType} from "../modules/types";
import Categories from "./Categories";

type CategoryArgs = {
    category: CategoryType;
    categories: CategoryType[];
    changeCat: (category: CategoryType) => void;
};

export default React.memo(function Category({category, categories, changeCat}: CategoryArgs): JSX.Element {
    return (
        <div className={styles.Category}>
            <h3>
                카테고리별로 보기:
                <Categories
                    categories={categories}
                    changeCat={changeCat}
                    inputStyle={{marginLeft: '10px'}}
                    orgCatId={category.id}
                />
            </h3>
        </div>
    );
});