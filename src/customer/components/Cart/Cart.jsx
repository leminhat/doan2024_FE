import { Button, Divider } from "@mui/material";
import CartItem from "./CartItem";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";


const style = {
    padding: "15px",
    borderRadius: "5%",
    borderColor: "rgb(203 203 200)",
}

const Cart = () => {
  const navigate = useNavigate();
  const {cart} = useSelector((store) => store);
  const dispatch = useDispatch();
  const handlerCheckout = () => {
    navigate("/checkout?step=2");
  };

  console.log(cart.cart)

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.sort((pre,now)=>pre.id-now.id).map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border" style={style}>
            <p className="uppercase font-bold opacity-60 pb-4">price details</p>
            <Divider />
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>{cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className=" text-green-600">{cart.cart?.discounte}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className=" text-green-600">{cart.cart?.deliveryCharges}</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className=" text-green-600">
                  {cart.cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>

            <Button
              onClick={handlerCheckout}
              className="w-full mt-5"
              variant="contained"
              sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
            >
              Check out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
