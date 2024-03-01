import React, {useEffect, useState} from 'react';
import cl from './ProductItem.module.css'
import MyButton from "../../UI/myButton/MyButton";
import logo from '../../img/160838162.png'
import MyModal from "../../UI/MyModal/MyModal";
const ProductItem = (props) => {
    const [inBasket, setInBasket]=useState(false)
    const [modal, setModal]=useState({visible:false, product :{id:null, brand:null, price:null, product:null}})
    useEffect(()=>{
        proverka()
    },[props.basket])
    function proverka() {
        props.basket.map((item) => {
            if (item.id === props.item.id) {
                setInBasket(true)
            }

        })
    }
    function setBasket(item, size){
        if (!inBasket){
            props.setBasket([...props.basket, {brand:item.brand, price:item.price, id:item.id, product:item.product, size:size}])
        }
        else{
            props.setBasket(props.basket.filter(p => p.id!==item.id))
            setInBasket(false)
        }


    }

    function openModal(item){
        setModal({visible: true, product: item})
    }
    return (
        <div className={cl.product}>
            <MyModal product={modal} visible={setModal} basket={props.basket} setBasket={setBasket} inBasket={inBasket} setInBasket={setInBasket}/>
            <div onClick={()=>openModal(props.item)} className={cl.productItem}>
                <img className={cl.productImage} src={logo} alt=""/>
                <h3>{props.item.product}</h3>
                <div  className={cl.productItem__info}>
                    <div>
                        <p className={cl.productDescription}>цена</p>
                        <p>{props.item.price}</p>
                    </div>
                    <div>
                        <p className={cl.productDescription}>бренд</p>
                        <p>{props.item.brand
                        ? props.item.brand
                        : "Неизвестно"}</p>
                    </div>
                    <MyButton onClick={(e)=>{e.stopPropagation();setBasket(props.item, 1)}}>
                        {inBasket
                            ? 'Убрать из корзины'
                            : 'Добавить в корзину'
                        }
                    </MyButton>
                </div>
                <p>{props.item.id}</p>
            </div>
        </div>
    );
};

export default ProductItem;