import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Grid,
  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import {
  StyledContainer,
  StyledButton,
  StyledTextField,
  styles,
} from "./CustomerStyles";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 200 * 1024) {
        setSelectedFile(file);
        setImagePreview(URL.createObjectURL(file));
        setValue("fileName", file.name);
      } else {
        showSnackbar("Please select a file smaller than 200kB.", "error");
      }
    }
  };

  const onSubmit = (data) => {
    if (selectedFile) {
      console.log("Saving customer details with file:", selectedFile.name);
      showSnackbar(
        `Customer details saved with file: ${selectedFile.name}`,
        "success"
      );
    } else {
      showSnackbar("Please choose a file before saving.", "error");
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
          <Box>
            <Typography variant="h5" gutterBottom sx={styles.title}>
              Edit Customer Details
            </Typography>
          </Box>
          <Box>
            <StyledContainer>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
                  <img
                    src={imagePreview || "https://via.placeholder.com/80"}
                    alt="Customer Profile"
                    width={80}
                    height={80}
                    style={styles.image}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
                  <Typography variant="p" gutterBottom>
                    Upload Actual Photos Size, less than 200kB
                  </Typography>
                  <Box sx={styles.fileButtonContainer}>
                    <Button
                      variant="outlined"
                      component="label"
                      sx={styles.chooseFileButton}
                      size="small"
                    >
                      Choose File
                      <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                    <Button
                      variant="contained"
                      sx={styles.fileNameButton(selectedFile)}
                      disabled={!selectedFile}
                      size="small"
                    >
                      {selectedFile ? selectedFile.name : "No File Chosen"}
                    </Button>
                  </Box>
                  <Box sx={styles.saveButtonContainer}>
                    <Button
                      variant="contained"
                      sx={styles.saveButton}
                      onClick={handleSubmit(onSubmit)}
                      size="small"
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </StyledContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={5}></Grid>
        {/* Form section */}
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{ mt: 1, mb: 1, color: "#788088" }}
            >
              Name 
            </Typography>
            <StyledTextField
              label="XclusLv"
              id="name"
              size="large"
              fullWidth
              multiline
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{ mt: 1, mb: 1, color: "#788088" }}
            >
              Address 
            </Typography>
            <StyledTextField
              label="6, Raffle, raffles link, singapore"
              id="address"
              rows={4}
              size="large"
              fullWidth
              multiline
              {...register("address", { required: "Address is required" })}
              error={!!errors.address}
              helperText={errors.address ? errors.address.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{ mt: 1, mb: 1, color: "#788088" }}
            >
              Email Address
            </Typography>
            <StyledTextField
              label=" afgh@gmail.com"
              id="email"
              size="large"
              fullWidth
              multiline
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{ mt: 1, mb: 1, color: "#788088" }}
            >
              User Name
            </Typography>
            <StyledTextField
              label=" 9.235476"
              id="username"
              size="large"
              fullWidth
              multiline
              {...register("username", {
                required: "User  Name is required",
              })}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{ mt: 1, mb: 1, color: "#788088" }}
            >
              Reset Password 
            </Typography>
            <StyledTextField
              label="jndiobh"
              id="password"
              type="password"
              size="large"
              fullWidth
              multiline
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          </Box>
          <Box sx={{ mt: 4, mb: 3 }}>
            <Grid item xs={3}>
              <StyledButton
                sx={styles.submitButtonContainer}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </StyledButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default EditProduct;
