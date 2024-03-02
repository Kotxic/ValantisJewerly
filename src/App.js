import './style/style.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Catalog from "./page/Catalog";
import Basket from "./page/Basket";
import {useState} from "react";
import Header from "./Components/header/Header";
function App() {
    const [basket, setBasket]=useState([])
    function basketSet(item){
        setBasket(item)
        console.log(basket)
    }
  return (
    <BrowserRouter>
      <div className='wrapper'>
          <Header/>
      <Routes>
            <Route path={'/ValantisJewerly'} element={<Catalog basket={basket} setBasket={basketSet}/>}/>
            <Route path={'/basket'} element={<Basket basket={basket} setBasket={setBasket}/>}/>
            <Route path="*" element={<Navigate to='/ValantisJewerly' replace/>}/>
      </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
