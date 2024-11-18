import LoginForm from "./LoginForm";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Box, Modal, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ForgotPassForm from "./ForgotPassForm";
import ResetPasswordForm from "./ResetPasswordForm";
import HomePage from "../pages/HomePage/HomePage";


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

const AuthModal = ({ open, handleClose }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {location.pathname === "/login" && <LoginForm />}
        {location.pathname === "/" && <LoginForm />}
        {location.pathname === "/register" && <RegisterForm />}
        {location.pathname === "/forgotpass" && <ForgotPassForm />}


          {/* {location.pathname === "/login" ?
            <LoginForm />:<RegisterForm/>} */}

          {/*{location.pathname === "/login" ? (*/}
          {/*  <LoginForm />*/}
          {/*) : location.pathname === "/register" ? (*/}
          {/*  <RegisterForm />*/}
          {/*) : location.pathname === "/reset_password" ? (*/}
          {/*  <ResetPasswordForm />*/}
          {/*) : location.pathname === "/recover_code" ? (*/}
          {/*  <RecoverCode />*/}
          {/*) : (*/}
          {/*  <LoginForm/>*/}
          {/*)}*/}
      
      
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
