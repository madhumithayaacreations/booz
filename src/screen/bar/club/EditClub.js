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
} from "./ClubStyles";

const EditClub = () => {
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
      console.log("Form Data:", { ...data, fileName: selectedFile.name });
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
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#3E4954",
                fontWeight: "bold",
              }}
            >
              Edit Bar/Club Information
            </Typography>
            <Typography variant="p" gutterBottom sx={styles.photoHeading}>
              Add Minimum 2 Images Bar/Club
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
                    style={{ borderRadius: "4px" }}
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
        <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
          <Box marginTop="26px">
            <Typography variant="p" gutterBottom sx={styles.photoHeading}>
              Add Minimum 2 Images Bar/Club
            </Typography>
            <StyledContainer>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
                  <img
                    src={imagePreview || "https://via.placeholder.com/80"}
                    alt="Customer Profile"
                    width={80}
                    height={80}
                    style={{ borderRadius: "4px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
                  <Typography variant="p" gutterBottom>
                    Upload Minimum 2 Govt ID Proof Of Bar/club
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
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box>
            <Typography variant="h6" fontSize={16} sx={{ mt: 1, mb: 1 }}>
              Name
            </Typography>
            <StyledTextField
              label="yXdxfL"
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
            <Typography variant="h6" fontSize={16} sx={{ mt: 1, mb: 1 }}>
              Address
            </Typography>
            <StyledTextField
              label="6 Raffles, Roofles Link,
              #01-20, Singapore"
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
            <Typography variant="h6" fontSize={16} sx={{ mt: 1, mb: 1 }}>
              Goole Map URL
            </Typography>
            <StyledTextField
              label="https://ww.goggle.com/location"
              id="googleMap"
              size="large"
              fullWidth
              multiline
              {...register("googleMap", {
                required: "Google Map URL is required",
              })}
              error={!!errors.googleMap}
              helperText={errors.googleMap ? errors.googleMap.message : ""}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={{ mt: 1, mb: 1 }}>
              Latitude
            </Typography>
            <StyledTextField
              label="9.67891597"
              id="latitude"
              size="large"
              fullWidth
              multiline
              {...register("latitude", {
                required: "Latitude is required",
              })}
              error={!!errors.latitude}
              helperText={errors.latitude ? errors.latitude.message : ""}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={{ mt: 1, mb: 1 }}>
              Longitude
            </Typography>
            <StyledTextField
              label="82.187696"
              id="longitude"
              size="large"
              fullWidth
              multiline
              {...register("longitude", {
                required: "Longitude is required",
              })}
              error={!!errors.longitude}
              helperText={errors.longitude ? errors.longitude.message : ""}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={{ mt: 1, mb: 1 }}>
              Working Time
            </Typography>
            <StyledTextField
              label="9amto10pm"
              id="shop"
              size="large"
              fullWidth
              multiline
              {...register("shop", {
                required: "Working Time is required",
              })}
              error={!!errors.shop}
              helperText={errors.shop ? errors.shop.message : ""}
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

export default EditClub;
