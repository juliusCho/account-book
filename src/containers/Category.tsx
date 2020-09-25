import React from "react";
import styles from './Category.module.css';

export default function Category(): JSX.Element {
    const categories = [
        '식사', '식료품', '교통', '생활', '의료'
    ];

    return (
        <div className={styles.Category}>
            <h3>
                카테고리별로 보기:
                <select name="categories" className="categories">
                    {categories.map(category => (
                        <option value={category}>{category}</option>
                    ))}
                </select>
            </h3>
        </div>
    );
}