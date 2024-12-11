import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import {
  StyledContainer,
  StyledButton,
  StyledTextField,
  styles,
} from "../components/formStyles";
import CommonSnackbar from "../notification/Snackbar";
import CommonDialog from "../notification/Dialogbox";

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
            <Typography variant="h5" gutterBottom sx={styles.title}>
              Edit Product
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

        {/* Form section */}
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          {[
            { label: "Brands", id: "brand", errorKey: "brand" },
            { label: "Bottle Name", id: "bottleName", errorKey: "bottleName" },
            {
              label: "Type of Quantity",
              id: "typeOfQuantity",
              errorKey: "typeOfQuantity",
            },
            { label: "SKU", id: "sku", errorKey: "sku" },
            { label: "Price", id: "price", errorKey: "price" },
            { label: "Quantity", id: "quantity", errorKey: "quantity" },
          ].map((field, index) => (
            <Box key={index} sx={styles.textFieldContainer}>
              <StyledTextField
                label={field.label}
                id={field.id}
                size="large"
                fullWidth
                multiline
                {...register(field.id, {
                  required: `${field.label} is required`,
                })}
                error={!!errors[field.errorKey]}
                helperText={errors[field.errorKey]?.message}
              />
            </Box>
          ))}
          <Box sx={ styles.submitGap }>
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
        messageSuccess="Product updated successfully!"
        messageError="Failed to update the product."
      />
    </Container>
  );
};

export default EditProduct;
