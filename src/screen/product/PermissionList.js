import React from "react";
import { Grid, Box, Typography, Paper, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const AccessControlGrid = () => {
  const handleToggle = (currentState) => {
    return currentState === "tick" ? "cross" : "tick";
  };

  const renderButton = (state, setState) => {
    return (
      <Button
        onClick={() => setState(handleToggle(state))}
        sx={{ minWidth: "60px", minHeight: "60px" }}
      >
        {state === "tick" ? (
          <CheckCircleIcon sx={{ color: "green", fontSize: "40px" }} />
        ) : (
          <CancelIcon sx={{ color: "red", fontSize: "40px" }} />
        )}
      </Button>
    );
  };

  const [adminView, setAdminView] = React.useState("tick");
  const [adminEdit, setAdminEdit] = React.useState("tick");
  const [adminDelete, setAdminDelete] = React.useState("tick");
  const [wholesalerView, setWholesalerView] = React.useState("tick");
  const [wholesalerEdit, setWholesalerEdit] = React.useState("tick");
  const [wholesalerDelete, setWholesalerDelete] = React.useState("tick");
  const [clubView, setClubView] = React.useState("tick");
  const [clubEdit, setClubEdit] = React.useState("tick");
  const [clubDelete, setClubDelete] = React.useState("cross");

  return (
    <Box sx={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Access Control Panel
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                justifyItems: "center",
              }}
            >
              {renderButton(adminView, setAdminView)}
              {renderButton(adminEdit, setAdminEdit)}
              {renderButton(adminDelete, setAdminDelete)}

              {renderButton(wholesalerView, setWholesalerView)}
              {renderButton(wholesalerEdit, setWholesalerEdit)}
              {renderButton(wholesalerDelete, setWholesalerDelete)}

              {renderButton(clubView, setClubView)}
              {renderButton(clubEdit, setClubEdit)}
              {renderButton(clubDelete, setClubDelete)}
            </Box>
          </Box>
        </Grid>

        {/* Info Section */}
        <Grid item xs={3}>
          <Box>
            <Paper
              elevation={3}
              sx={{
                padding: "15px",
                marginBottom: "10px",
                backgroundColor: "#2f4cdd",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Admin Access
              </Typography>
              <Typography variant="body2">
                Admins have all (view, edit & delete) access for Wholesaler &
                Club.
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                padding: "15px",
                marginBottom: "10px",
                backgroundColor: "#2f4cdd",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Wholesaler Access
              </Typography>
              <Typography variant="body2">
                Wholesalers have (view, edit & delete) access for Club.
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                padding: "15px",
                marginBottom: "10px",
                backgroundColor: "#2f4cdd",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Club Access
              </Typography>
              <Typography variant="body2">
                Club access will have only (view & edit) access to Club data.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccessControlGrid;
