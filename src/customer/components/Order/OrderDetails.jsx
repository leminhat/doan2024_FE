import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector(store => store);
  
  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  

  return (
    <div className="px:5 lg:px-20 ">
      <div>
        <h1 className="font-semibold text-lg py-5">Delivery Address</h1>
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className="py-10">
      <OrderTracker activeStepLabel={order.order?.orderStatus}/>
      
      </div>

      <Grid container spacing={2}>
        {order.order?.orderItems.map((orderitem) =>
          <Grid
            item
            container
            className="shadow-xl rounded-md border p-5 m-2"
            sx={{ alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>

            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={orderitem.product.imageUrl}
                  alt=""
                />

                <div className="space-y-2 ml-5">

                  <p className='font-semibold'>{orderitem.product.title}</p>
                  <p className='opacity-50 text-xs font-semibold'>Size: {orderitem.size},   Quantity: {orderitem.quantity}   </p>
                 
                  <p>Brand: {orderitem.product.brand}</p>
                  <p>{orderitem.discountedPrice} VND</p>


                </div>

              </div>

            </Grid>

            <Grid>
              <Box onClick={()=>navigate(`/account/review/${orderitem.product.id}`)} sx={{ color: deepPurple[500] }}>
                <StarBorderIcon   sx={{ fontSize: "2rem" }} className="px-2" />
                <Button>Rate & Review Product</Button>

              </Box>
            </Grid>

          </Grid>)
        }

      </Grid>
    </div>
  );
};

export default OrderDetails;
