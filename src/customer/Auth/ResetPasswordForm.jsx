import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { Box, Modal, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ResetPasswordForm = () => {

  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    outline: "none",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

 

  const { token } = useParams();
  console.log("token", token)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);


    console.log( data.get("password"))

    console.log( data.get("confirmPassword"))

    const tokenData = {
      token: token,
      newPassword: data.get("password"),
    }

    console.log("tokenData", tokenData)
    if(data.get("password")==data.get("confirmPassword"))
    {
     
    try {
      const responsePromise = axios.post(`${API_BASE_URL}/auth/reset-password`, tokenData);
      toast.promise(
        responsePromise,
        {
          pending: "Processing your request...",
          success: "Update Password Success 🎉",
          error: "Something went wrong. Server not responding 😞",
        }
      );
      const response = await responsePromise;
      navigate("/")
    } catch (error) {
     console.log('Something went wrong. Server not responding')
     
    }
  } else{
    toast.error("Password does not match")
  }

  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png" alt="logo" />
          Ecommerce
        </a>

        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <label for="password" class="block mb-4 text-sm font-medium text-gray-900 dark:text-white">New Password</label>

                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  autoComplete="password"
                />
              </Grid>

              <Grid item xs={12}>
                <label for="password" class="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <TextField
                  required
                  id="password"
                  name="confirmPassword"
                  label="Password"
                  type="password"
                  fullWidth
                  autoComplete="password"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
                >
                  RESET PASSWORD
                </Button>
              </Grid>

            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
          </div>
        </div>
      </div>
    </section >

  );
};


export default ResetPasswordForm;
