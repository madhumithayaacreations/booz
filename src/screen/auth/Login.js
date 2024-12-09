import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginRequest } from "../../redux/auth/AuthAction";
import { Typography, Grid, Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  StyledBox,
  StyledContainer,
  StyledButton,
  StyledButton1,
  StyledButton2,
  StyledTextField,
  styles,
} from "./LoginStyles";
import "./register.css";
import Logo from "../../image/boozLogo.png";
import "./login.css";

const Login = () => {
  // const dispatch = useDispatch();
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const loginState = useSelector((state) => state.auth || {});
  // const { error } = loginState;
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSignin = () => {
    navigate("/register");
  };

  // const handleLogin = (data) => {
  //   dispatch(loginRequest(data));
  // };

  // React.useEffect(() => {
  //   if (loginState.user) {
  //     navigate("/dashboard");
  //   }
  // }, [loginState.user, navigate]);

  const form = useForm({
    defaultValues: {
      email: "sample@gmail.com",
      password: "pass",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    // handleLogin(data);
    console.log("form data", data);
    navigate("/dashboard")
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
              Login Now
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Email"
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
              {formState.isSubmitting ? "Signing in..." : "Submit"}
            </StyledButton>
          </Grid>
          <Grid item xs={12} align="center">
            <Link
              to="/forgot-password"
              style={ styles.forgotPassword }
            >
              <Typography
                variant="body2"
                align="center"
                padding="8px"
                gutterBottom
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </Typography>
            </Link>
            <Typography variant="body2" align="center" gutterBottom>
              - - - - - - - - - - or - - - - - - - - -
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <StyledButton1 variant="contained" fullWidth onClick={handleSignin}>
              Register
            </StyledButton1>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
};

export default Login;
