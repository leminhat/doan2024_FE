import React from 'react'
import { Box, Button, Grid, TextField } from "@mui/material";
import { createOrder } from '../../../State/Order/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const AddressCard = (address) => {

  const styles = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  };

  
  

  // console.log(address)
  return (
    <div className="p-5 shadow-lg border rounded-md m-2 " style={styles}>
      <div className="flex items-center">
        <div className="w-[10rem] h-[5rem] lg:w-[16rem] lg:h-[9rem]">
          <div className='space-y-1'>
            <p className='font-semibold'>{address.address?.firstName + " " + address.address?.lastName}</p>
            <p> {address.address?.streetAddress},{address.address?.zipCode}</p>
            <div className='space-y-1'>
              <p className='font-semibold'>Phone Number</p>
              <p>{address.address?.mobile}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressCard