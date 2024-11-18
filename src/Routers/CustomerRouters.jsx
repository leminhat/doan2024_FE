import Footer from "../customer/components/Footer/Footer";
import HomePage from "../customer/pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPasswordForm from "../customer/Auth/ResetPasswordForm";

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path="/login" element={<HomePage/>}></Route>
            <Route path="/register" element={<HomePage/>}></Route>
            <Route path="/forgotpass" element={<HomePage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
        </Routes>

        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters