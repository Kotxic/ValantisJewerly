import React, {useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import cl from './ProductList.module.css'

const ProductList = ({isLoader, products, basket, setBasket}) => {
    function basketSet(item){
        setBasket(item)
    }

    return (
        <div className={cl.productList}>
            {isLoader
                ? <h1>Посты грузятся</h1>
                :products.map((item)=>
                    <ProductItem basket={basket} setBasket={basketSet} item={item}/>
                )

            }
        </div>
    );
};

export default ProductList;