import "./App.css";
import CustomerRouters from "./customer/Routers/CustomerRouters";
import Footer from "./customer/components/Footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="" >
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CustomerRouters/>}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <Navigation/>
      <div>
        {/* <HomePage/> 
        <Product/>
      </div>
      <div>
        <Footer/>
      </div> */}

        <div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
