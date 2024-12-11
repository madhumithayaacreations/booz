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
  iconStyle,
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
                  <TableCell sx={tableCellHeaderStyles}>          
                   {/* Access */}
                  </TableCell>
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
                            <CheckCircleIcon sx={iconStyle} />
                          ) : (
                            <CancelIcon sx={iconStyle} />
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
        {/* content section */}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccessControl;
