<<<<<<< HEAD
import React, { useState } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
=======
import React from "react";
import { Grid, Box, Typography, Paper, Button } from "@mui/material";
>>>>>>> 05cc3b7be8005867d296d493b5bf752bf249da87
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  containerStyles,
  tableContainerStyles,
  tableStyles,
  tableCellHeaderStyles,
  tableCellBodyStyles,
  tableRowLabelCellStyles,
  stackStyles,
  paperStyles,
  typographyBody1Styles,
} from "../components/formStyles";

const AccessControl = () => {
  const [accessState, setAccessState] = useState({
    admin: { view: true, edit: true, delete: true },
    wholesaler: { view: true, edit: true, delete: true },
    club: { view: true, edit: true, delete: false },
  });

  const toggleAccess = (role, accessType) => {
    setAccessState((prevState) => ({
      ...prevState,
      [role]: {
        ...prevState[role],
        [accessType]: !prevState[role][accessType],
      },
    }));
  };

  const roles = [
    { key: "admin", label: "Admin Access" },
    { key: "wholesaler", label: "Wholesaler Access" },
    { key: "club", label: "Club Access" },
  ];

<<<<<<< HEAD
  const accessTypes = ["view", "edit", "delete"];

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" align="center" gutterBottom></Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <TableContainer sx={tableContainerStyles}>
            <Table sx={tableStyles}>
              <TableHead>
                <TableRow>
                  <TableCell sx={tableCellHeaderStyles}></TableCell>
                  {accessTypes.map((accessType) => (
                    <TableCell key={accessType} sx={tableCellHeaderStyles}>
                      {accessType.charAt(0).toUpperCase() + accessType.slice(1)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {roles.map((role, rowIndex) => (
                  <TableRow key={role.key}>
                    <TableCell sx={tableRowLabelCellStyles}>
                      {role.label}
                    </TableCell>
                    {accessTypes.map((accessType, index) => (
                      <TableCell
                        key={accessType}
                        align="center"
                        sx={tableCellBodyStyles(
                          index,
                          rowIndex,
                          roles.length
                        )}
                      >
                        <IconButton
                          onClick={() => toggleAccess(role.key, accessType)}
                          color={
                            accessState[role.key][accessType]
                              ? "success"
                              : "error"
                          }
                        >
                          {accessState[role.key][accessType] ? (
                            <CheckCircleIcon sx={{ fontSize: "40px" }} />
                          ) : (
                            <CancelIcon sx={{ fontSize: "40px" }} />
                          )}
                        </IconButton>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2} sx={stackStyles}>
            {roles.map((role) => (
              <Paper key={role.key} elevation={3} sx={paperStyles}>
                <Typography variant="body1" sx={typographyBody1Styles}>
                  {role.label}
                </Typography>
                <Typography variant="body2">
                  {role.key === "admin" &&
                    "Admins have all (view, edit & delete) access for Wholesaler & Club."}
                  {role.key === "wholesaler" &&
                    "Wholesalers have view, edit & delete access for Club."}
                  {role.key === "club" &&
                    "Clubs have only view & edit access for Club data."}
                </Typography>
              </Paper>
            ))}
          </Stack>
=======
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
>>>>>>> 05cc3b7be8005867d296d493b5bf752bf249da87
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccessControl;
