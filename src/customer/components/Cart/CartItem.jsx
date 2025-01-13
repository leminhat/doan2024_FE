import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import React, { useState } from "react";


const CartItem = ({item}) => {
  
  
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  
  console.log(item)
  const size = item.size
  const sizeData = item.product.sizes.find(s => s.name === size)
  

  const handleUpdateCartItem=(num)=>{

    setQuantity(quantity+num);
 
    const data ={data:{quantity:item.quantity+num},cartItemId:item?.id}
    dispatch(updateCartItem(data))
  
    
  }


  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item.id))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md m-3">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">

          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size:{item.size}</p>
          <p className="opacity-70">Sku: {item.product.id}{item.size}</p>
          <p className="opacity-70 mt-2">Brand: {item.product.brand}</p>

          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-3">
            <p className="font-semibold">{item.discountedPrice}</p>
            <p className="opacity-50 line-through">{item.price}</p>
            <p className="text-green-600">{item.product.discountPercent}% off</p>
          </div>
        </div>
      </div>
      
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
              <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                <RemoveCircleOutlineIcon/>
              </IconButton>
              <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
              <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:"RGB(145 85 253)"}} disabled = {item.quantity>=sizeData.quantity} >
                <AddCircleOutlineIcon/>
              </IconButton>  
            </div>

            <div>
              <Button onClick={handleRemoveCartItem} sx={{color:"RGB(145 85 253)"}}>remove</Button>
            </div>
          </div>
    </div>
  );
};

export default CartItem;
