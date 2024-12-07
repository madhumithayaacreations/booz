import React from "react";
import { Stack, Box, Typography, Paper, Button,styled } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./PermissionStyles.css";

const AccessControlGrid = () => {
  const handleToggle = (currentState) => {
    return currentState === "tick" ? "cross" : "tick";
  };
  const Item = styled("div")(({ theme }) => ({
    // backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      // backgroundColor: '#1A2027',
    }),
  }));
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
      <Stack spacing={4} direction="row">
        {/* Main Content */}
        <Stack spacing={2} sx={{ width: "70%" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}
          >
            Access Control Panel
          </Typography>

          {/* Headings Outside the Box */}
          <Stack spacing={2} direction="row" sx={{ marginBottom: "10px", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold", width: "25%" , marginLeft: "80px" }}>View</Typography>
            <Typography sx={{ fontWeight: "bold", width: "25%" }}>Edit</Typography>
            <Typography sx={{ fontWeight: "bold", width: "25%" }}>Delete</Typography>
          </Stack>

          {/* Buttons Inside the Box */}
          {/* <Stack
            spacing={2}
            direction="column"
            // sx={{ border: "1px solid #ddd", padding: "20px", flexWrap: "wrap" }}
          > */}
          <Stack direction="row" spacing={2}>
          <Item>
           
            {/* Admin Row */}
            <Stack spacing={1} sx={{ width: "25%" }} alignItems="">
              {renderButton(adminView, setAdminView)}
            </Stack>
            <Stack spacing={1} sx={{ width: "25%" }} alignItems="">
              {renderButton(adminEdit, setAdminEdit)}
            </Stack>
            <Stack spacing={1} sx={{ width: "25%" }} alignItems="">
              {renderButton(adminDelete, setAdminDelete)}
            </Stack>
            </Item>
            <Item>
            {/* Wholesaler Row */}
            <Stack spacing={1} sx={{ width: "25%", marginLeft: "70px" }} alignItems="center">
              {renderButton(wholesalerView, setWholesalerView)}
            </Stack>
            <Stack spacing={1} sx={{ width: "25%", marginLeft: "70px" }} alignItems="center">
              {renderButton(wholesalerEdit, setWholesalerEdit)}
            </Stack>
            <Stack spacing={1} sx={{ width: "25%", marginLeft: "70px" }} alignItems="center">
              {renderButton(wholesalerDelete, setWholesalerDelete)}
            </Stack>
            </Item>
            <Item>
            {/* Club Row */}
            <Stack spacing={1} sx={{ width: "25%", marginLeft: "50px" }} alignItems="center">
              {renderButton(clubView, setClubView)}
            </Stack>
            <Stack spacing={1} sx={{ width: "25%", marginLeft: "50px"  }} alignItems="center">
              {renderButton(clubEdit, setClubEdit)}
            </Stack>
            <Stack spacing={1} sx={{ width: "25%", marginLeft: "50px"  }} alignItems="center">
              {renderButton(clubDelete, setClubDelete)}
            </Stack>
            </Item>
          </Stack>

          {/* Headings (Admin, Wholesaler, Club) in a Left-Aligned Column */}
          <Stack spacing={2} direction="column" sx={{ marginTop: "120px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Admin Access</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Wholesaler Access</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Club Access</Typography>
          </Stack>
        </Stack>

        {/* Info Section */}
        <Stack spacing={2} sx={{ width: "30%" }}>
          <Paper elevation={3} sx={{ padding: "15px", borderRadius: "20px", backgroundColor: "#2f4cdd", color: "#fff" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Admin Access</Typography>
            <Typography variant="body2">
              Admins have all (view, edit & delete) access for Wholesaler & Club.
            </Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: "15px", borderRadius: "20px", backgroundColor: "#2f4cdd", color: "#fff" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Wholesaler Access</Typography>
            <Typography variant="body2">
              Wholesalers will only have (view, edit & delete) access to Club.
            </Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: "15px", borderRadius: "20px", backgroundColor: "#2f4cdd", color: "#fff" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Club Access</Typography>
            <Typography variant="body2">
              Club access will have only (view & edit) access to Club data.
            </Typography>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AccessControlGrid;
