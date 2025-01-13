import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)

  useEffect(()=>{                                                             
    if(jwt){
      dispatch(getUser(jwt))
    }
    
  },[jwt,auth.jwt])



  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    const userData = {
      firstname:data.get("firstname"),
      lastname: data.get("lastname"),
      email:data.get("email"),
      password:data.get("password"),
    }
    dispatch(register(userData))
    console.log("userData", userData);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstname"
              name="firstname"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastname"
              name="lastname"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

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
              sign up
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Bạn đã có tài khoản?</p>
          <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
