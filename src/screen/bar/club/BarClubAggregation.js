import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterIcons from "@mui/icons-material/FlashOnOutlined";
import { OnBoardedWholeSales } from "../../constant/data";
import { StyledContainer, StyledDataGrid } from "../../components/style";
import { getColumnWidth } from "../../../style/datagridMQ";

const columns = (handleDeleteRow) => [
  {
    field: "wholeSalesReportsImage",
    headerName: "wholeSalesReports Image",
    width: getColumnWidth("wholeSalesReportsImage"),
    renderCell: (params) => (
      <img
        src={params.value}
        alt={params.row.BottleName}
        style={{ width: "30%", height: "100%" }}
      />
    ),
  },
  {
    field: "licenseProof",
    headerName: "License Proof",
    width: getColumnWidth("licenseProof"),
  },
  {
    field: "wholeSalesName",
    headerName: "WholeSales Name",
    width: getColumnWidth("wholeSalesName"),
  },
  { field: "Address", headerName: "Address", width: getColumnWidth("Address") },
  { field: "emailId", headerName: "Email", width: getColumnWidth("emailId") },
  {
    field: "phoneNo",
    headerName: "Phone No",
    width: getColumnWidth("phoneNo"),
  },
  {
    field: "officeTimings",
    headerName: "Office Timings",
    width: getColumnWidth("officeTimings"),
  },

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
  const navigator = useNavigate();

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
  const handleBarClubAdd = (event) => {
    navigator("/barAggregation/add");
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box>
            <h1>Bar/Club Aggregation</h1>
            <p>Completed App Product List Data</p>
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={4} lg={4} xl={5}></Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              startIcon={<FilterIcons sx={{ color: "white" }} />}
              onClick={handleBarClubAdd}
              sx={{
                backgroundColor: "#b52fec",
                color: "#fff",
              }}
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
              sx={{
                marginLeft: "10px",
              }}
            >
              Filter
            </Button>
          </Box>
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
          padding={{ xs: 1, sm: 3 }}
          display="flex"
          justifyContent="end"
        >
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            sx={{
              backgroundColor: "#2f4cdd",
              color: "white",
              fontWeight: "bold",
              width: { xs: "130px", sm: "130px" },
              height: "40px",
              margin: "0 10px",
            }}
          >
            &lt;&lt; Previous
          </Button>
          <Box bgcolor={"#e3e4eb"}>
            {Array.from(
              { length: Math.ceil(rows.length / rowsPerPage) },
              (_, i) => i + 1
            ).map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                sx={{
                  borderRadius: "5px",
                  width: { xs: "5px", sm: "10px" },
                  height: "30px",
                  backgroundColor:
                    currentPage === pageNumber ? "#fff" : "#e3e4eb",
                  border: "none",
                  color: currentPage === pageNumber ? "#000" : "#b6bee8",
                  cursor: "pointer",
                  margin: { xs: "2px 2px", sm: "5px 5px" },
                  minWidth: "34px",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "inline",
                    lg: "inline",
                    xl: "inline",
                  },
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
              backgroundColor: "#2f4cdd",
              color: "white",
              fontWeight: "bold",
              width: { xs: "130px", sm: "100px" },
              height: "40px",
              margin: "0 10px",
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
