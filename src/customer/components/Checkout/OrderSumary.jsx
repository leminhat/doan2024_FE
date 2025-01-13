import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const style = {
  padding: "15px",
  borderRadius: "5%",
  borderColor: "rgb(203 203 200)",
}

const OrderSumary = () => {
  const dispatch = useDispatch();
  const location =useLocation();
  const {order} = useSelector(store=>store);
  const searchParams=new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

  const handlerCheckOut = () => {
      console.log(order.order);
      dispatch(createPayment(order.order));
  }

  useEffect(()=>{
    console.log("OrderSummary")
    dispatch(getOrderById(orderId))
  },[orderId])

  return (
    <div>
      <div className="p-5 shadow-lg  rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative m-4">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item}/>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 pt-3">
            <div className="border p-3"  style={style}>
              <p className="uppercase font-bold opacity-60">
                Price details
              </p>
              <Divider />
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>{order.order?.totalPrice}</span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className=" text-green-600">{order.order?.discounte}</span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className=" text-green-600">Free</span>
                </div>

                <div className="flex justify-between pt-3 text-black font-bold">
                  <span>Total Amount</span>
                  <span className=" text-green-600">{order.order?.toltalDiscountedPrice}</span>
                </div>
              </div>

              <Button onClick={handlerCheckOut} variant="contanined" className="w-full mt-5" sx={{px:"2.5rem", py:".7rem", bgcolor:"#9155fd"}}>
                PAYMENT
              </Button>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSumary;
