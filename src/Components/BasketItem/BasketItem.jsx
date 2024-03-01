import React from 'react';
import MyButton from "../../UI/myButton/MyButton";
import logo from '../../img/160838162.png'
import cl from './BasketItemm.module.css'
const BasketItem = ({basket, fullBasket, setBasket}) => {
    return (
        <div className={cl.basketItem}>
            <img src={logo} alt=""/>
            <div className={cl.basketItemContent}>
                <h3 className={cl.basketHiading}>{basket.product}</h3>
                <div className={cl.basketContent}>
                    <div>
                        <p className={cl.basketDescription}>Цена</p>
                        <p>{basket.price}</p>
                    </div>
                    <div>
                        <p className={cl.basketDescription}>Бренд</p>
                        <p>{basket.brand
                        ? basket.brand
                        : "Неизвестно"
                        }</p>
                    </div>
                    <div>
                        <p className={cl.basketDescription}>Количество</p>
                        <p>{basket.size}</p>
                    </div>
                    <MyButton onClick={()=>setBasket(fullBasket.filter(p => p.id!==basket.id))}>Удалить</MyButton>
                </div>
                <p>{basket.id}</p>
            </div>
        </div>
    );
};

export default BasketItem;