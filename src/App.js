import "./App.css"
import { useEffect, useState } from 'react';
import products from "./products.json"
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import CardList from './CardList';

function App() {
  const [productList, setProductList] = useState([]);

  let refresh = false;

  const loadProducts = async () => {
    const res = await products;

    setProductList(res.data);
  }

  useEffect(() =>{
    loadProducts();
  }, [refresh]);

  return (  
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route exact path='/' element={
            <CardList prodList = {products}/>
          }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
