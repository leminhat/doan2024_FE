  import Footer from "../customer/components/Footer/Footer";
  import HomePage from "../customer/pages/HomePage/HomePage";
  import Navigation from "../customer/components/Navigation/Navigation";
  import Product from "../customer/components/Product/Product";
  import ProductDetail from "../customer/components/ProductDetails/ProductDetail";
  import React from "react";
  import { Route, Routes } from "react-router-dom";
  import ResetPasswordForm from "../customer/Auth/ResetPasswordForm";
  import Checkout from "../customer/components/Checkout/Checkout";
  import Order from "../customer/components/Order/Order";
  import OrderDetails from "../customer/components/Order/OrderDetails";
  import Cart from "../customer/components/Cart/Cart";
  import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
  import VnpayCallback from "../customer/components/Payment/VnpayCallBack";
import ProductReview from "../customer/components/ProductReview/ProductReview";

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
              <Route path="/:LevelOne/:LevelTwo/:LevelThree" element={<Product />}></Route>
              <Route path="/reset_password" element={<HomePage />}></Route>
              <Route path="/recover_code" element={<HomePage/>}></Route>
              <Route path="/product/:productId" element={<ProductDetail />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/account/order" element={<Order />}></Route>
              <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
              <Route path="/account/review/:productId" element={<ProductReview/>}></Route>
              <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>
              {/* <Route path="/payment/vnpay_return" element={<VnpayCallback />} /> */}
          </Routes>
          <div>
            <Footer/>
          </div>
      </div>
    );
  };

  export default CustomerRouters;
