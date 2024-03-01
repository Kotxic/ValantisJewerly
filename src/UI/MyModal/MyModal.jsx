import React, {useEffect, useState} from 'react';
import cl from './MyModal.module.css'
import logo from '../../img/160838162.png'
import MyButton from "../myButton/MyButton";
const MyModal = (props) => {
    const [size, setSize]=useState(1)
    const rootClass= [cl.myModal]
    if (props.product.visible){
        rootClass.push(cl.active)
    }
    useEffect(()=>{
        proverka()
    }, [props.basket])
    function proverka() {
        props.basket.map((item) => {
            if (item.id === props.product.product.id) {
                props.setInBasket(true)
            }
        })
    }

    return (
        <div onClick={()=>props.visible({visible:false, product:props.product.product})} className={rootClass.join(' ')}>
            <div onClick={e=>e.stopPropagation()} className={cl.myModalContent}>
                <img className={cl.myModalImg} src={logo} alt=""/>
                <div className={cl.myModalInfo}>
                    <h3>{props.product.product.product}</h3>
                    <div className={cl.myModalInfoDop}>
                        <div>
                            <p className={cl.myModalDescription}>бренд</p>
                            <p>{props.product.product.brand
                                ? props.product.product.brand
                                : 'Неизвество'
                            }</p>
                        </div>
                        <div>
                            <p className={cl.myModalDescription}>цена</p>
                            <p>{props.product.product.price}</p>
                        </div>
                    </div>
                    <p>{props.product.product.id}</p>
                    <div className={cl.myModalButton}>
                        <div>
                            <p>Количество</p>
                            <div className={cl.myModalSize}>
                                <p className={cl.myModalButtons} onClick={()=>{if(size>1) {setSize(size-1)}}}>-</p>
                                <p>{size}</p>
                                <p className={cl.myModalButtons} onClick={()=>setSize(size+1)}>+</p>
                            </div>
                        </div>
                        <MyButton onClick={()=>props.setBasket(props.product.product, size)}>
                            {props.inBasket
                                ? 'Убрать из корзины'
                                : 'Добавить в корзину'
                            }

                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;