import React from 'react'
import { Box, Button, Grid, TextField } from "@mui/material";
import { createOrder } from '../../../State/Order/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const ListAddressCard = (Address) => {

  const styles = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const address = Address.address


  const createOrderHandler = () => {
    
    const orderData = {address,navigate}
    dispatch(createOrder(orderData))
    
  };

  // console.log(address)
  return (
    <div className="p-5 shadow-lg border rounded-md m-2 " style={styles}>
      <div className="flex items-center">
        <div className="w-[10rem] h-[5rem] lg:w-[16rem] lg:h-[9rem]">
          <div className='space-y-1'>
            <p className='font-semibold'>{Address.address?.firstName + " " + Address.address?.lastName}</p>
            <p> {Address.address?.streetAddress},{Address.address?.zipCode}</p>
            <div className='space-y-1'>
              <p className='font-semibold'>Phone Number</p>
              <p>{Address.address?.mobile}</p>
            </div>
          </div>
        </div>
      </div>
      <Button       onClick={createOrderHandler}
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="button"
                  >
                    Deliver here
                  </Button>
    </div>
  )
}

export default ListAddressCard