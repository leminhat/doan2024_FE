import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { register } from "../../State/Auth/Action";

const RecoverCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("code"),
    };
    dispatch(register(userData));
    console.log("userData", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <TextField
              required
              id="code"
              name="code"
              label="Mã xác nhận"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
              onClick={() => navigate("/login")}
            >
              Nhập mã
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RecoverCode;
