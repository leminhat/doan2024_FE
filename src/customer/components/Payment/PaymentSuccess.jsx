import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid, Grid2 } from "@mui/material";

import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "../Order/OrderTracker";


const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferebceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  console.log(order.order)

  const params = Object.fromEntries(searchParams.entries());

  console.log(params.vnp_ResponseCode)

  useEffect(() => {
    const data = { orderId, paymentId, params };
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">

        {params.vnp_ResponseCode == "00" ? (
          <Alert
            variant="filled"
            severity="success"
            sx={{ mb: 6, width: "fit-content" }}
          >
            <AlertTitle>Payment Success</AlertTitle>
            Congratulation Your Order Get Placed
          </Alert>
        ) : (<Alert
          variant="filled"
          severity="error"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Fail</AlertTitle>
          Payment Error. Please Try Again
        </Alert>)}

      </div>
      {params.vnp_ResponseCode == "00" ? (
        <OrderTracker activeStepLabel="PLACED" />
      ) : (<OrderTracker activeStepLabel="PENDING" />)}


      <Grid2 container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid2 item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />

                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text xs font-semibold-x-5">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Brand: {item.product.brand}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </Grid2>
            <Grid2 item>
              <AddressCard address={order.order.shippingAddress} />
            </Grid2>
          </Grid>
        ))}
      </Grid2>
    </div>
  );
};

export default PaymentSuccess;
