import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { Box, Modal, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

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

    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const { token } = useParams(); 
    console.log("token", token)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        
        // const confirmPassword = e.target[1].value;

        const tokenData = {
            token:token,
            newPassword:data.get("password"),
          }

        console.log("tokenData", tokenData)
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, tokenData);            
            setMessage(response.data);
            alert("Thay doi mat khau thanh cong")
            navigate("/")
        } catch (error) {
            setMessage('Có lỗi xảy ra: ' + error.response.data.message);
        }
        
    };

    return (
      <Box sx={style}>
        <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            
  
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
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
                Xác nhận
              </Button>
            </Grid>
          </Grid>
        </form>
  
        <div className="flex justify-center flex-col items-center">
          
        </div>
      </div>
      </Box>
      );
    };


export default ResetPasswordForm;
