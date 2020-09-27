import React, {ChangeEvent, useEffect, useReducer} from "react";
import styles from '../css/TodayItem.module.css';
import {MdClear, MdCreate, MdDelete, MdDone} from "react-icons/md";
import {CategoryType, ExpenditureType, ITEM_CHANGE_CAT, ITEM_CHANGE_COST, ITEM_CHANGE_TITLE} from "../modules/types";
import {moneyFormat} from "../lib/formatter";
import {itemReducer} from "../modules/reducer";

type TodayItemArgs = {
    changeExpenditure: (expenditure: ExpenditureType) => void;
    removeExpenditure: (id: number) => void;

    id: number;
    category: CategoryType;
    title: string;
    cost: number;
    onUpdate: boolean;

    color: string;
    categories: CategoryType[];
};

export default React.memo(function TodayItem(
    {
        changeExpenditure,
        removeExpenditure,
        id, category, title, cost, onUpdate,
        color, categories
    }: TodayItemArgs
): JSX.Element {
    const [item, dispatch] = useReducer(itemReducer, {id, category, title, cost, onUpdate});

    const onChangeCat = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: ITEM_CHANGE_CAT, category: {
            id: Number(e.target.value),
            label: e.target.options[e.target.selectedIndex].text
        }});
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'title') {
            dispatch({type: ITEM_CHANGE_TITLE, title: value});
        } else if (name === 'cost') {
            dispatch({type: ITEM_CHANGE_COST, cost: Number(value)});
        }
    };

    const onDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            removeExpenditure(id);
        }
    };
    const onSubmit = () => {
        changeExpenditure(item);
    };
    const toggleUpdate = () => {
        changeExpenditure({id, category, title, cost, onUpdate: !onUpdate});
    };

    return onUpdate ? (
        <div className={`${styles.TodayItem} ${styles.highlight}`}>
            <div className={styles.box}>
                <select
                    name="categories"
                    className={styles.categorySelect}
                    onChange={onChangeCat}
                >
                    {categories.map(category => (
                        <option
                            selected={category.id === item.category.id}
                            value={category.id}
                            key={category.id}>
                            {category.label}
                        </option>
                    ))}
                </select>
                <input
                    className={styles.input}
                    name="title"
                    value={item.title}
                    style={{width: '125px', marginRight: 0}}
                    onChange={onChange}
                />
            </div>
            <div className={styles.box}>
                <input
                    type="number"
                    className={styles.input}
                    name="cost"
                    value={item.cost}
                    onChange={onChange}
                />
                <MdDone className={styles.icon} onClick={onSubmit}/>
                <MdClear className={styles.icon} onClick={toggleUpdate}/>
            </div>
        </div>
    ) : (
        <div className={styles.TodayItem}>
            <div className={styles.box}>
                <div className={styles.categoryLbl} style={{background: color}}>
                    {category.label}
                </div>
                <div className={styles.label}>{title}</div>
            </div>
            <div className={styles.box}>
                <div className={styles.label}><b>-{moneyFormat(cost)}원</b></div>
                <MdCreate className={styles.icon} onClick={toggleUpdate}/>
                <MdDelete className={styles.icon} onClick={onDelete}/>
            </div>
        </div>
    );
});