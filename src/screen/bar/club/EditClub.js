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
} from "../../components/formStyles";
import CommonSnackbar from "../../notification/Snackbar";
import CommonDialog from "../../notification/Dialogbox";

const EditClub = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [proofSelected, setProofSelected] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [proofPreview, setProofPreview] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

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

  const handleProofChange = (event) => {
    const proof = event.target.files[0];
    if (proof) {
      if (proof.size <= 200 * 1024) {
        setProofSelected(proof);
        setProofPreview(URL.createObjectURL(proof));
        setValue("proofName", proof.name);
      } else {
        showSnackbar("Please select a file smaller than 200kB.", "error");
      }
    }
  };

  const handleImage = () => {
    if (selectedFile) {
      showSnackbar(
        `Product details saved with file: ${selectedFile.name}`,
        "success"
      );
    } else {
      showSnackbar("Please choose a file before saving.", "error");
    }
  }

  const proofImage = () => {
    if (proofSelected) {
      showSnackbar(
        `Product details saved with file: ${proofSelected.name}`,
        "success"
      );
    } else {
      showSnackbar("Please choose a file before saving.", "error");
    }
  }
  
    const onSubmit = (data) => {
      if (data) {
        setIsSuccess(true);
        setDialogOpen(true);
      } else {
        setIsSuccess(false);
        setDialogOpen(true);
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

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
          <Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={ styles.title }
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
                    style={ styles.image }
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
                      onClick={handleImage}
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
                    src={proofPreview || "https://via.placeholder.com/80"}
                    alt="Customer Profile"
                    width={80}
                    height={80}
                    style={ styles.image }
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
                      <input type="file" hidden onChange={handleProofChange} />
                    </Button>
                    <Button
                      variant="contained"
                      sx={styles.fileNameButton(proofSelected)}
                      disabled={!proofSelected}
                      size="small"
                    >
                      {proofSelected ? proofSelected.name : "No File Chosen"}
                    </Button>
                  </Box>
                  <Box sx={styles.saveButtonContainer}>
                    <Button
                      variant="contained"
                      sx={styles.saveButton}
                      onClick={proofImage}
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
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              Name
            </Typography>
            <StyledTextField
              label="Name"
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
              sx={ styles.textFieldContainer }
            >
              Address
            </Typography>
            <StyledTextField
              label="Address"
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
              sx={ styles.textFieldContainer }
            >
              Goole Map URL
            </Typography>
            <StyledTextField
              label="Goole Map URL"
              id="googleMap"
              size="large"
              fullWidth
              multiline
              {...register("googleMap", { required: "Google Map URL is required" })}
              error={!!errors.googleMap}
              helperText={errors.googleMap ? errors.googleMap.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              Latitude
            </Typography>
            <StyledTextField
              label="Latitude"
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
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              Longitude
            </Typography>
            <StyledTextField
              label="Longitude"
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
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              Working Time
            </Typography>
            <StyledTextField
              label="Working Time"
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
          <Box sx={ styles.submitGap }>
            <Grid item xs={3}>
              <StyledButton
                sx={ styles.submitButtonContainer }
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </StyledButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* Snackbar */}
      <CommonSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />

      {/* Dialog */}
      <CommonDialog
        open={dialogOpen}
        isSuccess={isSuccess}
        onClose={handleDialogClose}
        messageSuccess="Bar/Club updated successfully!"
        messageError="Failed to update the bar/club."
      />
    </Container>
  );
};

export default EditClub;
