import React from 'react';
import MyButton from "../../UI/myButton/MyButton";
import cl from './BasketFooter.module.css'
const BasketFooter = ({cost}) => {
    return (
        <footer className={cl.basketFooter}>
            <div className={cl.basketContent}>
                <p>Общая стоимость покупки</p>
                <p>{cost}</p>
                <MyButton>Купить</MyButton>
            </div>
        </footer>
    );
};

export default BasketFooter;