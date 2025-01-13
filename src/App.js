import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import Footer from "./customer/components/Footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import { Bounce, ToastContainer } from "react-toastify";






function App() {
  return (

    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/admin/*" element={<Admin />}></Route>
      </Routes>
      {/* </BrowserRouter>   */}
    </div>
  );
}

export default App;
