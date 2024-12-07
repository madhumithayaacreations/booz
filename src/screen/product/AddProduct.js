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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  StyledContainer,
  StyledButton,
  StyledTextField,
  styles,
} from "./ProductStyles";

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
  const [openDialog, setOpenDialog] = useState(false);
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

  const onSubmit = (data) => {
    if (selectedFile) {
      console.log("Saving product details with file:", selectedFile.name);
      showSnackbar(
        `Product details saved with file: ${selectedFile.name}`,
        "success"
      );
      setIsSuccess(true); // Set to true for tick icon
      setOpenDialog(true); // Show dialog after submission
    } else {
      showSnackbar("Please choose a file before saving.", "error");
      setIsSuccess(false); // Set to false for X mark
      setOpenDialog(true); // Show dialog after submission
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
    setOpenDialog(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
          <Box>
            <Typography variant="h5" gutterBottom sx={styles.title}>
              Add Products
            </Typography>
          </Box>
          <Box>
            <StyledContainer>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
                  <img
                    src={imagePreview || "https://via.placeholder.com/80"}
                    alt="Product Preview"
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
        {/* content area */}
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box sx={{ mt: 1, mb: 1, color: "#788088" }}>
            <StyledTextField
              label="Brands"
              id="brand"
              size="large"
              fullWidth
              multiline
              {...register("name", { required: "Brand is required" })}
              error={!!errors.brand}
              helperText={errors.brand ? errors.brand.message : ""}
            />
          </Box>
          <Box sx={{ mt: 3, mb: 1, color: "#788088" }}>
            <StyledTextField
              label="Bottle Name"
              id="bottleName"
              size="large"
              fullWidth
              multiline
              {...register("Bottle Name", {
                required: "Type of Quantity is required",
              })}
              error={!!errors.bottleName}
              helperText={errors.bottleName ? errors.bottleName.message : ""}
            />
          </Box>
          <Box sx={{ mt: 3, mb: 1, color: "#788088" }}>
            <StyledTextField
              label="Type of Quantity"
              id="typeOfQuantity"
              size="large"
              fullWidth
              multiline
              {...register("typeOfQuantity", {
                required: "Type of Quantity is required",
              })}
              error={!!errors.typeOfQuantity}
              helperText={errors.typeOfQuantity ? errors.typeOfQuantity.message : ""}
            />
          </Box>
          <Box sx={{ mt: 3, mb: 1, color: "#788088" }}>
            <StyledTextField
              label="SKU"
              id="sku"
              size="large"
              fullWidth
              multiline
              {...register("sku", {
                required: "SKU is required",
              })}
              error={!!errors.sku}
              helperText={errors.sku ? errors.sku.message : ""}
            />
          </Box>
          <Box sx={{ mt: 3, mb: 1, color: "#788088" }}>
            <StyledTextField
              label="Price"
              id="price"
              size="large"
              fullWidth
              multiline
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
            />
          </Box>
          <Box sx={{ mt: 3, mb: 1, color: "#788088" }}>
            <StyledTextField
              label="Quantity"
              id="quantity"
              size="large"
              fullWidth
              multiline
              {...register("quantity", { required: "Quantity is required" })}
              error={!!errors.quantity}
              helperText={errors.quantity ? errors.quantity.message : ""}
            />
          </Box>
          <Box sx={{ mt: 4, mb: 3 }}>
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

       {/* Pop-up Dialog */}
       <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          {isSuccess ? (
            <CheckCircleIcon sx={{ color: "green", marginRight: 1, }} />
          ) : (
            <CancelIcon sx={{ color: "red", marginRight: 1, }} />
          )}
          {isSuccess ? "Success" : "Error"}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {isSuccess
              ? "Your product details have been saved successfully!"
              : "There was an error saving the product details. Please try again."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EditProduct;
