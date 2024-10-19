import Footer from "../components/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import Navigation from "../components/Navigation/Navigation";
import Product from "../components/Product/Product";
import React from "react";
import { Route, Routes } from "react-router-dom";

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path="/login" element={<HomePage/>}></Route>
            <Route path="/register" element={<HomePage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
        </Routes>

        
    </div>
  )
}

export default CustomerRouters