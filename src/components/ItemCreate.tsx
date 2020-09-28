import React, {ChangeEvent, useCallback, useReducer, useState} from "react";
import styles from '../css/ItemCreate.module.css';
import {
    CategoryType,
    ITEM_CHANGE_CAT,
    ITEM_CHANGE_COST,
    ITEM_CHANGE_TITLE,
    ItemActionType,
    NewExpenditure
} from "../modules/types";
import {MdAdd} from "react-icons/all";
import {itemReducer} from "../modules/reducer";
import Categories from "./Categories";
import {validator} from "../lib/formValidator";

type ItemCreateArgs = {
    categories: CategoryType[];
    addExpenditure: (expenditure: NewExpenditure) => void;
};

export default function ItemCreate({categories, addExpenditure}: ItemCreateArgs): JSX.Element {
    const [open, setOpen] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const reducer: (state: NewExpenditure, action: ItemActionType) => NewExpenditure = itemReducer;
    const [item, dispatch] = useReducer(reducer, {
        category: {id: 1, label: '식사'},
        title: '',
        cost: 0
    });

    function initialize() {
        dispatch({type: ITEM_CHANGE_CAT, category: {id: 1, label: '식사'}});
        dispatch({type: ITEM_CHANGE_TITLE, title: ''});
        dispatch({type: ITEM_CHANGE_COST, cost: 0});
        setInvalid(false);
        setOpen(false);
    }

    const onToggle = useCallback(() => {
        if (open) {
            initialize();
        }
        setOpen(!open);
    }, [open]);

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

    const onSubmit = () => {
        if (validator(item)) {
            addExpenditure(item);
            initialize();
        } else {
            setInvalid(true);
        }
    };

    return (
        <>
            {open && (
                <>
                    <button className={`${styles.button} ${styles.confirmBtn} ${styles.add}`} onClick={onSubmit}>
                        <MdAdd/>
                    </button>
                    <div className={styles.ItemCreate}>
                        <form className={styles.form}>
                            <Categories
                                categories={categories}
                                changeCat={changeCat}
                                inputStyle={{marginRight: '10px'}}
                                orgCatId={item.category.id}
                            />
                            <input
                                autoFocus
                                placeholder="지출 내용을 입력하세요."
                                onChange={onChange}
                                name="title"
                                value={item.title}
                                className={`${styles.input} ${invalid && styles.invalid}`}
                                style={{width: '150px'}}
                            />
                            <input
                                type="number"
                                placeholder="지출 금액을 입력하세요."
                                onChange={onChange}
                                name="cost"
                                value={item.cost}
                                className={styles.input}
                            />
                        </form>
                    </div>
                </>
            )}
            <button
                className={`${styles.button} ${styles.addBtn} ${open ? styles.close : styles.add}`}
                onClick={onToggle}
            >
                <MdAdd/>
            </button>
        </>
    );
};