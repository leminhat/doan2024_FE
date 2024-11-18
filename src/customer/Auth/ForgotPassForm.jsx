import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPass, getUser, login } from "../../State/Auth/Action";

const ForgotPassForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    const userData = {
      email:data.get("email"),
    }
    dispatch(forgotPass(userData))
    console.log("userData", userData);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      
    </div>
  );
};

export default ForgotPassForm;
