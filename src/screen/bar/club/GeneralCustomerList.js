import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { generalCustomers } from "../../constant/data";
import {
  StyledContainer,
  StyledDataGrid,
  paginationStyles,
} from "../../components/style";
import { getColumnWidth } from "../../../style/datagridMQ";
const columns = (handleDeleteRow) => [
  {
    field: "UserName",
    headerName: "UserName",
    width: getColumnWidth("UserName"),
  },
  { field: "email", headerName: "Email", width: getColumnWidth("email") },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: getColumnWidth("CustomerName"),
  },
  {
    field: "Address",
    headerName: "Address",
    width: getColumnWidth("Address2"),
  },
  {
    field: "ViewTransactionDetails",
    headerName: "View Transaction Details",
    width: getColumnWidth("ViewTransactionDetails"),
    renderCell: (params) => (
      <div
        onClick={() => alert(`Viewing details for ${params.row.CustomerName}`)}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "#80878f",
        }}
      >
        link
      </div>
    ),
  },
  {
    field: "LastOrder",
    headerName: "Last Order",
    width: getColumnWidth("LastOrder"),
    renderCell: (params) => (
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#ccc",
          color: params.value.length > 10 ? "#000" : "#666",
          textAlign: "center",
          padding: "3px 10px",
          borderRadius: "5px",
          margin: "2px",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: getColumnWidth("actions2"),
    renderCell: (params) => (
      <ActionMenu user={params.row} onDelete={handleDeleteRow} />
    ),
  },
];

const ActionMenu = ({ user, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
  };

  const handleDelete = () => {
    onDelete(user.id);
    handleClose();
  };

  const handleBan = () => {
    console.log(`Ban user: ${user.UserName}`);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleBan}>Ban</MenuItem>
      </Menu>
    </>
  );
};

const GeneralCustomers = () => {
  const [rows, setRows] = useState(generalCustomers());
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleDeleteRow = (id) => {
    setUserToDelete(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== userToDelete));
    setOpenDialog(false);
    setUserToDelete(null);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterCondition = (condition) => {
    switch (condition) {
      case "Condition 1":
        setRows((prevRows) =>
          prevRows.sort((a, b) => a.UserName.localeCompare(b.UserName))
        );
        break;
      case "Condition 2":
        setRows((prevRows) =>
          prevRows.sort((a, b) => b.LastOrder - a.LastOrder)
        );
        break;
      default:
        console.log(`Unknown filter condition: ${condition}`);
    }
    handleFilterClose();
  };

  const paginatedRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box>
            <h1>General Customers</h1>
            {/* <p>Here is your general customers list data</p> */}
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={4} lg={4} xl={5}></Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
          <Button
            variant="contained"
            startIcon={<FilterIcon color="blue" />}
            endIcon={<ExpandMoreIcon />}
            onClick={handleFilterClick}
            sx={{
              backgroundColor: "#f4f5f9",
              color: "#999ea5",
              marginTop: "20px",
            }}
          >
            Filter
          </Button>
        </Grid>
      </Grid>
      <StyledContainer>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem onClick={() => handleFilterCondition("Condition 1")}>
            UserName A-Z
          </MenuItem>
          <MenuItem onClick={() => handleFilterCondition("Condition 2")}>
            Last order higher to lower
          </MenuItem>
        </Menu>
        <StyledDataGrid
          rows={paginatedRows}
          columns={columns(handleDeleteRow)}
          pageSize={rowsPerPage}
          pagination={true}
          onSelectionModelChange={(newSelection) => {
            setSelection(newSelection);
          }}
        />
        {selection.length > 0 && (
          <div>
            <h2>Selected Rows:</h2>
            {selection.map((id) => (
              <div key={id}>
                {rows.find((row) => row.id === id).CustomerName}
              </div>
            ))}
          </div>
        )}
        <Box
          className="button-box"
          padding={{ xs: 1, sm: 3 }}
          display="flex"
          justifyContent="end"
        >
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            sx={paginationStyles.PreviousButton}
          >
            &lt;&lt; Previous
          </Button>
          <Box sx={{ backgroundColor: "#e3e4eb" }}>
            {Array.from(
              { length: Math.ceil(rows.length / rowsPerPage) },
              (_, i) => i + 1
            ).map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                sx={{
                  backgroundColor:
                    currentPage === pageNumber ? "#fff" : "#e3e4eb",
                  color: currentPage === pageNumber ? "#000" : "#b6bee8",
                  ...paginationStyles.arrayButtons,
                }}
              >
                {pageNumber}
              </Button>
            ))}
          </Box>
          <Button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(rows.length / rowsPerPage))
              )
            }
            sx={{
              ...paginationStyles.nextButton,
            }}
          >
            Next &gt;&gt;
          </Button>
        </Box>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this row?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={confirmDelete} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </StyledContainer>
    </>
  );
};

export default GeneralCustomers;
