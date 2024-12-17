import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    const userData = {
      email:data.get("email"),
      password:data.get("password"),
    }
    dispatch(login(userData,navigate))
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
              Đăng nhập
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Bạn chưa có tài khoản?</p>
          <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Đăng ký</Button>
        </div>
        <div className="py-3 flex items-center">
          <p>Bạn quên mật khẩu?</p>
          <Button onClick={()=>navigate("/forgotpass")} className='ml-5' size='small'>Quên mật khẩu</Button>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
      
      </div>
     
    </div>
  );
};

export default LoginForm;
