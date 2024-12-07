import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  Grid,
  Snackbar,
  Alert,
  Container
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {
  cardStyles,
  typographyTitleStyles,
  uploadOuterBoxStyles,
  uploadBoxStyles,
  chooseFileButtonStyles,
  fileNameTextStyles,
  saveButtonStyles,
  formStyles,
  textFieldStyles,
  submitButtonStyles,
} from "./ProductStyles";

const AddProductPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 200 * 1024) {
        setFileError("File size should not exceed 200KB");
        setSnackbarOpen(true);
        setSelectedFile(null);
      } else {
        setFileError("");
        setSelectedFile(file);
      }
    }
  };

  const onSubmit = (data) => {
    if (!selectedFile) {
      alert("Please upload an image");
      return;
    }
    alert("Product Added!");
    console.log({ ...data, file: selectedFile });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Typography variant="h5" sx={typographyTitleStyles}>
        Add Products
      </Typography>

      <Grid container spacing={4}>
        {/* Image Upload Section */}
        <Grid item xs={12} >
          <Box sx={uploadOuterBoxStyles}>
            <Box sx={{ display: "flex", alignItems: "left" }}>
              <Box
                sx={uploadBoxStyles}
                onClick={() => document.getElementById("upload-image").click()}
              >
                <Typography
                  variant="body2"
                >
                  Upload Image
                </Typography>
              </Box>

              <Box sx={{ marginLeft: "10px" }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#a0a0a0", textAlign: "right", display: "block", marginBottom: "20px" }}
                >
                  Please upload a square image, size less than 200KB
                </Typography>

                <Button
                  component="span"
                  variant="outlined"
                  sx={chooseFileButtonStyles}
                  onClick={() => document.getElementById("upload-image").click()}
                >
                  Choose File
                </Button>

                <Typography variant="caption" sx={fileNameTextStyles}>
                  {selectedFile ? selectedFile.name : "No File Chosen"}
                </Typography>
              </Box>
            </Box>

            <input
              accept="image/*"
              id="upload-image"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <Button
              variant="contained"
              sx={saveButtonStyles}
              onClick={() => alert("Image Saved")}
              disabled={!selectedFile || !!fileError}
            >
              Save
            </Button>
          </Box>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={formStyles}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Brand"
                  variant="outlined"
                  {...field}
                  error={!!errors.brand}
                  helperText={errors.brand ? "Brand is required" : ""}
                  sx={textFieldStyles}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name="bottleName"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Bottle Name"
                  variant="outlined"
                  {...field}
                  error={!!errors.bottleName}
                  helperText={errors.bottleName ? "Bottle Name is required" : ""}
                  sx={textFieldStyles}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name="typeOfQuantity"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Type of Quantity"
                  variant="outlined"
                  {...field}
                  error={!!errors.typeOfQuantity}
                  helperText={errors.typeOfQuantity ? "Type of Quantity is required" : ""}
                  sx={textFieldStyles}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name="sku"
              control={control}
              render={({ field }) => (
                <TextField
                  label="SKU"
                  variant="outlined"
                  {...field}
                  error={!!errors.sku}
                  helperText={errors.sku ? "SKU is required" : ""}
                  sx={textFieldStyles}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Price"
                  type="number"
                  variant="outlined"
                  {...field}
                  error={!!errors.price}
                  helperText={errors.price ? "Price is required" : ""}
                  sx={textFieldStyles}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Quantity"
                  type="number"
                  variant="outlined"
                  {...field}
                  error={!!errors.quantity}
                  helperText={errors.quantity ? "Quantity is required" : ""}
                  sx={textFieldStyles}
                />
              )}
              rules={{ required: true }}
            />
            <Button type="submit" variant="contained" sx={submitButtonStyles}>
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          File size should not exceed 200KB
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddProductPage;