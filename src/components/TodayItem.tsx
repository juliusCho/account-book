import React, {ChangeEvent, useReducer, useState} from "react";
import styles from '../css/TodayItem.module.css';
import {MdClear, MdCreate, MdDelete, MdDone} from "react-icons/md";
import {
    CategoryType,
    ExpenditureType,
    ITEM_CHANGE_CAT,
    ITEM_CHANGE_COST,
    ITEM_CHANGE_TITLE,
    ItemActionType
} from "../modules/types";
import {moneyFormat} from "../lib/formatter";
import {itemReducer} from "../modules/reducer";
import Categories from "./Categories";
import {validator} from "../lib/formValidator";

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
    const reducer: (state: ExpenditureType, action: ItemActionType) => ExpenditureType = itemReducer;
    const [item, dispatch] = useReducer(reducer, {id, category, title, cost, onUpdate});

    const [invalid, setInvalid] = useState(false);

    function initialize() {
        dispatch({type: ITEM_CHANGE_CAT, category});
        dispatch({type: ITEM_CHANGE_TITLE, title});
        dispatch({type: ITEM_CHANGE_COST, cost});
        setInvalid(false);
    }

    const changeCat = (changedCat: CategoryType) => {
        dispatch({type: ITEM_CHANGE_CAT, category: changedCat});
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
        if (validator(item)) {
            changeExpenditure(item);
            setInvalid(false);
        } else {
            setInvalid(true);
        }
    };
    const toggleUpdate = () => {
        changeExpenditure({id, category, title, cost, onUpdate: !onUpdate});
        initialize();
    };

    return onUpdate ? (
        <div className={`${styles.TodayItem} ${styles.highlight}`}>
            <div className={styles.box}>
                <Categories
                    categories={categories}
                    changeCat={changeCat}
                    inputStyle={{marginRight: '10px'}}
                    orgCatId={item.category.id}
                />
                <input
                    placeholder="지출 내용을 입력하세요."
                    className={`${styles.input} ${invalid && styles.invalid}`}
                    name="title"
                    value={item.title}
                    style={{width: '125px', marginRight: 0}}
                    onChange={onChange}
                />
            </div>
            <div className={styles.box}>
                <input
                    placeholder="지출 금액을 입력하세요."
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