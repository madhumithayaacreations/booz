import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const FailurePage = () => {
  const handleReupload = () => {
    alert("Redirecting to reupload products...");
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
      {/* Error Icon */}
      <ErrorIcon
        sx={{
          fontSize: "80px",
          color: "red",
          marginBottom: "20px",
        }}
      />

      {/* Failure Message */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Product Uploaded Failed
      </Typography>

      {/* Reupload Products Button */}
      <Button
        variant="contained"
        onClick={handleReupload}
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
        Reupload Products
      </Button>
    </Box>
  );
};

export default FailurePage;
