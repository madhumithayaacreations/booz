import React, { useState } from "react";

import {
  Box,
  Container,
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
import { useNavigate } from "react-router-dom";
import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterIcons from "@mui/icons-material/FlashOnOutlined";

import { OnBoardedWholeSales } from "../../constant/data";
import { StyledContainer, StyledDataGrid } from "../../components/style";

const columns = (handleDeleteRow) => [

  {
    field: "wholeSalesReportsImage",
    headerName: "wholeSalesReports Image",
    width: 150,
    renderCell: (params) => (
      <img
        src={params.value}
        alt={params.row.BottleName}
        style={{ width: "30%", height: "100%" }}
      />
    ),
  },
  { field: "licenseProof", headerName: "License Proof", width: 100 },
  { field: "wholeSalesName", headerName: "WholeSales Name", width: 150 },
  { field: "Address", headerName: "Address", width: 230 },
  { field: "emailId", headerName: "Email", width: 150 },
  { field: "phoneNo", headerName: "Phone No", width: 150 },
  { field: "officeTimings", headerName: "Office Timings", width: 100 },

  {
    field: "actions",
    headerName: "Actions",
    width: 100,
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

const BarClubSalesReport = () => {
  const [rows, setRows] = useState(OnBoardedWholeSales());
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const navigator=useNavigate();

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
  const handlenbarclubadd = (event) => {
    navigator("/barAggregation/add")
  };
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterCondition = (condition) => {
    switch (condition) {
      case "Condition 1":
        setRows((prevRows) =>
          prevRows.sort((a, b) => a.BottleName.localeCompare(b.BottleName))
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
        <Box>
          <h1>Bar/Club Aggregation</h1>
          <p>Completed App Product List Data</p>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >

        <Button
            variant="contained"
            startIcon={<FilterIcons sx={{ color: "white" }} />}
            onClick={handlenbarclubadd}
            sx={{ backgroundColor: "#b52fec", color: "#fff" }}
          >
            Add new Bar/Club
          </Button>

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

export default BarClubSalesReport;
