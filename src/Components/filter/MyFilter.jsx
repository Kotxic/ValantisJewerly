import React, {useState} from 'react';
import cl from './MyFilter.module.css'
import MyButton from "../../UI/myButton/MyButton";
const MyFilter = ({flag, setFlag, value, setValue, setExample}) => {
    const [sort, setSort]=useState('')


    function setParams(value){
        setValue(value)
        console.log(value)
        if (value === 'brand'){
            setExample({action: 'filter', params: {brand:sort}})
        }
        if (value ==='price'){
            setExample({action: 'filter', params: {price:parseInt(sort)}})
        }
        if (value==='product'){
            setExample({action: 'filter', params: {product:sort}})
        }
        setSort('')
    }
    return (
        <div className={cl.myFilter}>
            <select className={cl.filterSelect} onChange={e=>{setValue(e.target.value)}}>
                <option value={'product'}>название</option>
                <option value={'price'}>цена</option>
                <option value={'brand'}>бренд</option>
            </select>
            <input className={cl.filterInput} value={sort} onChange={(e)=>setSort(e.target.value)} type='text' placeholder='сортировка'/>
            <MyButton onClick={()=>{setFlag(!flag);setParams(value)}}>Посик</MyButton>
            <MyButton onClick={()=>{setExample({ action: "get_ids", params: {offset: 0, limit: 49}}); setFlag(!flag);}}>Сбросить фильтр</MyButton>
        </div>
    );
};

export default MyFilter;