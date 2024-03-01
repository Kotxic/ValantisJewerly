import {useEffect, useState} from "react";
import '../style/style.css'
import API from "../API/API";
import MyFilter from "../Components/filter/MyFilter";
import ProductList from "../Components/ProductList/ProductList";
import MyButton from "../UI/myButton/MyButton";
function Catalog({basket, setBasket}) {
    function basketSet(item){
        setBasket(item)
    }

    const [exampleData, setExampleData]=useState({
        action: "get_ids",
        params: {offset: 0, limit: 49}
    })
    const [page, setPage]=useState(0)
    const [products, setProducts]= useState([])
    const [isPoductLoader, setIsProductLoader]=useState(false)
    const [value, setValue]=useState({})
    const [flag, setFlag]=useState(false)
    useEffect(()=>{
        getPost()

    },[])
    useEffect(()=>{
        getPost()

    },[page, flag])


    async function getPost(){
        setIsProductLoader(true)
        const response = await API.postData(exampleData)
        if (response && response.result) {
            const result = await API.postData({action: 'get_items', params: {ids: response.result}});
            if (result && result.result){
                console.log(result);
                setProducts(result.result);
            }
            else{
                console.error('Ошибка: Ответа на второй запрос')
            }

        } else {
            console.error("Ошибка: Ответ первого запроса не содержит свойства 'result'");
        }
        setTimeout(setIsProductLoader(false), 10000)
    }

    return (
        <div >
            <MyFilter flag={flag} setFlag={setFlag} value={value} setValue={setValue} setExample={setExampleData}/>
            <ProductList isLoader={isPoductLoader} products={products} basket={basket} setBasket={basketSet}/>
            <div className='catalog__button'>
                <MyButton onClick={()=>{if(page>0){setPage(page-1)};setExampleData({action: 'get_ids', params: {offset: page*49, limit: 49}})}}>Предыдущая страница</MyButton>
                <p className='catalog__button__text'> Страница {page+1}</p>
                <MyButton onClick={()=>{setPage(page+1);setExampleData({action: 'get_ids', params: {offset: page*49, limit: 49}})}}>Следующая страница</MyButton>
            </div>
        </div>
    );
}

export default Catalog;
