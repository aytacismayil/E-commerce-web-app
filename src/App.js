import React from 'react';
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductInfo from "./pages/ProductInfo";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import "./stylesheets/layout.css";
import "./stylesheets/products.css";


const App = () => {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/login" exact element={<LoginPage/>}/>
        <Route path="/register" exact element={<RegisterPage/>}/>
        <Route path="/Productinfo/:productid" exact element={<ProductInfo/>}/>
        <Route path="/cart" exact element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;

