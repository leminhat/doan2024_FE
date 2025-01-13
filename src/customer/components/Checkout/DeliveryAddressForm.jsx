import React, { useEffect } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { create } from "@mui/material/styles/createTransitions";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../../State/Address/Action";
import ListAddressCard from "../AddressCard/ListAddressCard";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {address} = useSelector( (store) => store)
  
 

  useEffect(()=>{
    dispatch(getAddress())
  },[dispatch])


  const handleSubmit=(event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const address ={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      zipCode:data.get("zip"),
      // provice:data.get("provice"),
      mobile:data.get("phoneNumber"),
    }

    const orderData={address,navigate}
    dispatch(createOrder(orderData))
    console.log("address",address)

    

  }

  

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
          {address.address?.map((item)=><ListAddressCard address={item}/>)}
          </div>
        </Grid>

        <Grid item sx={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />

                 
                </Grid>

                

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid> */}

                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="provice"
                    name="provice"
                    label="Provice"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid> */}

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver here
                  </Button>
                </Grid>


              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
