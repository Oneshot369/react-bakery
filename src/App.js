import "./App.css"
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import CardList from './CardList';
import EditOne from "./EditOne";
import dataSource from "./dataSource";
import User from "./User";

function App() {
  
  const [productList, setProductList] = useState([]);
  const [selectedProd, setSelectedProd] = useState(0);
  const [selectedUser, setSelectedUser] = useState(0);
  const navigate = useNavigate();
  let refresh = false;
  const loadProducts = async () => {
    const res = await dataSource.get("/products");

    setProductList(res.data);
  }

  useEffect(() =>{
    loadProducts();
  }, [refresh]);

  const ourList = productList;
  const editOne = (prod, uri) =>{
    console.log("id, in editOne App.js", prod);
    console.log("uri, in editOne App.js", uri);
    setSelectedProd(prod);
    navigate(uri);
  }
  const login = (prod) =>{
    console.log("id, in editOne App.js", prod);
    setSelectedUser(prod);
  }

  return (  
    <div>
        <NavBar/>
        <Routes>

          <Route exact path='/' element={
            <CardList prodList = {ourList} editFunc = {editOne}/>
          }/>
          <Route exact path='/add' element={
            <EditOne></EditOne>
          }/>
          <Route exact path='/edit' element={
            <EditOne prod={selectedProd} user={selectedUser}></EditOne>
          }/>
          <Route exact path='/login' element={
            <User user={selectedUser} loginFunc = {login}></User>
          }/>
        </Routes>
    </div>
  );
};

export default App;
