import React, {useEffect, useState} from 'react';
import BasketItem from "../Components/BasketItem/BasketItem";
import BasketFooter from "../Components/BasketFooter/BasketFooter";

const Basket = ({basket, setBasket}) => {
    const [cost, setCost]=useState(0)

    useEffect(()=>{
        getCost()
    },[])
    useEffect(()=>{
        getCost()
    },[basket])
    function getCost(){
        let a=0;
        basket.map((item)=>{
            console.log(item)
            a=a+ item.price*item.size
        })
        setCost(a)
    }
    return (
        <div className='basket'>
            {basket
                ? basket.map((item)=>
                    <BasketItem basket={item} fullBasket={basket} setBasket={setBasket}/>
                )
                : <h1>Корзина пуста</h1>

            }
            <BasketFooter cost={cost}/>
        </div>
    );
};

export default Basket;