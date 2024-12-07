import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessPage = () => {
  const handleAddMoreProducts = () => {
    alert("Redirecting to add more products...");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* Success Icon */}
      <CheckCircleIcon
        sx={{
          fontSize: "80px",
          color: "green",
          marginBottom: "20px",
        }}
      />

      {/* Success Message */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Product Uploaded Successfully
      </Typography>

      {/* Add More Products Button */}
      <Button
        variant="contained"
        onClick={handleAddMoreProducts}
        sx={{
          marginTop: "20px",
          backgroundColor: "#00296b",
          color: "#fff",
          textTransform: "none",
          padding: "10px 30px",
          "&:hover": {
            backgroundColor: "#001d4a",
          },
        }}
      >
        Add More Products
      </Button>
    </Box>
  );
};

export default SuccessPage;
