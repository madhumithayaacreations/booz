import React, { useState } from "react";
import {
  Box,
  Container,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ViewTransactionDetails } from "../../constant/data";
import { StyledContainer, StyledDataGrid } from "../../components/style";

const columns = (handleDeleteRow) => [
  { field: "Date", headerName: "Date", width: 150 },
  { field: "ShotsCostumed", headerName: "Shots Costumed", width: 180 },
  { field: "BottlesBoUght", headerName: "Bottles BoUght", width: 150 },
  { field: "BarVisited", headerName: "BarVisited", width: 300 },
  {
    field: "DownloadInvoice",
    headerName: "DownloadInvoice",
    width: 100,
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
  { field: "lastOrder", headerName: "lastOrder", width: 150 },
];

const ViewTransactionReport = () => {
  const [rows, setRows] = useState(ViewTransactionDetails());
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
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box mb={2}>
          <h1>View Transaction Report for Every Customer</h1>
          <span>
            Email:{" "}
            <b style={{ textDecoration: "underline" }}>sharma123@gmail.com</b>,
            Customer Name: <b style={{ textDecoration: "underline" }}>Sharma</b>
          </span>
        </Box>

        <Button
          variant="contained"
          startIcon={<FilterIcon color="blue" />}
          endIcon={<ExpandMoreIcon />}
          onClick={handleFilterClick}
          backgroundColor={"#f4f5f9"}
          color="#dde0e4"
        >
          Filter
        </Button>
      </Box>
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
          pagination={false}
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
          padding={3}
          display="flex"
          gap={1}
          justifyContent="end"
        >
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            sx={{
              backgroundColor: "#2f4cdd",
              color: "white",
              fontWeight: "bold",
              width: "130px",
              height: "40px",
              margin: "0 10px",
            }}
          >
            &lt;&lt; Previous
          </Button>
          {Array.from(
            { length: Math.ceil(rows.length / rowsPerPage) },
            (_, i) => i + 1
          ).map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              style={{
                backgroundColor: currentPage === pageNumber ? "#fff" : "#ccc",
                color: currentPage === pageNumber ? "#000" : "#000",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
                width: "40px",
                height: "40px",
               
              }}
            >
              {pageNumber}
            </Button>
          ))}
          <Button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(rows.length / rowsPerPage))
              )
            }
            sx={{
              backgroundColor: "#2f4cdd",
              color: "white",
              fontWeight: "bold",
              width: "100px",
              height: "40px",
             
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

export default ViewTransactionReport;
