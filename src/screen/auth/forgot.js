import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Avatar } from "@mui/material";
import {
  StyledBox,
  StyledContainer,
  StyledButton,
  StyledTextField,
<<<<<<< HEAD
} from "../components/LoginStyles";
import "../../style/register.css";
=======
} from "./LoginStyles";
import "./register.css";
>>>>>>> 05cc3b7be8005867d296d493b5bf752bf249da87
import Logo from "../../image/boozLogo.png";

export default function ForgotPassword() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("form data", data);
    form.reset();
  };
  return (
    <StyledBox>
      <StyledContainer maxWidth="xs">
        <Grid container spacing={2} className="login-page">
          <Grid item xs={12} align="center">
            <Avatar src={Logo} className="avatar" />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="p"
              align="center"
              fontWeight={600}
              gutterBottom
            >
              Forgot Password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Email Address"
              id="email"
              size="small"
              fullWidth
              {...register("email", {
                required: {
                  value: true,
                  message: "Missing Field Email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Invalid Email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="OTP"
              id="otp"
              size="small"
              type="text"
              fullWidth
              {...register("otp", {
                required: {
                  value: true,
                  message: "OTP is Required",
                },
                pattern: {
                  value: /^[1-9]{6}$/,
                  message: "Invalid OTP",
                },
              })}
              error={!!errors.otp}
              helperText={errors.otp?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              id="Password"
              size="small"
              label="Password"
              type="password"
              fullWidth
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              size="small"
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (fieldValue) =>
                  fieldValue === watch("password") || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message || ""}
            />
          </Grid>

          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Saving the Changes..." : "Submit"}
            </StyledButton>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
}
