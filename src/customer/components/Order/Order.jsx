import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser } from "../../../State/Order/Action";
import  { useEffect } from "react";

const orderStatus = [
  { lable: "On The Way", value: "on the way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];

const Order = () => {

  const {order} = useSelector((store) => store)
  console.log(order)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderByUser());
  }, [dispatch]);


  return (
    <div className="px:5 lg:px-20 ">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option) => (
                <div className="flex items-center ">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300
                             text-indigo-600 focus:ring-indigo-500"
                  />

                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.lable}
                  </label>

                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>

<div className="space-y-5">
{order.orders.map((item)=><OrderCard order={item}/>)}
    
    </div>          
        </Grid>

      </Grid>
    </div>
  );
};

export default Order;
