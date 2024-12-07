import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Box, styled, Avatar } from "@mui/material";
import { StyledBox,
  StyledContainer,
  StyledButton,
  StyledButton1,
  StyledButton2,
  StyledTextField,
  styles,
 } from "./LoginStyles";
import "./register.css";
import Logo from "../../image/boozLogo.png";


export default function Register() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
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
              Register Now
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Email"
              required
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
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Signing in..." : "Sign In"}
            </StyledButton>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="body2" align="center" gutterBottom>
              - - - - - - - - - - or - - - - - - - - -
            </Typography>
            <Typography variant="body2" align="center" gutterBottom sx={styles.loginDirectly}>
              Login Directly?
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <StyledButton1
              variant="contained"
              fullWidth
            >
              LOGIN WITH GOOGLE
            </StyledButton1>
          </Grid>
          <Grid item xs={12} align="center">
            <StyledButton2
              variant="contained"
              fullWidth
            >
              LOGIN WITH FACEBOOK
            </StyledButton2>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
} 