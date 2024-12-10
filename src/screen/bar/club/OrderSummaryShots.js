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
import CalendarMonthIcon from "@mui/icons-material/CalendarToday";
import { orderSummery } from "../../constant/data";
import {
  StyledContainer,
  StyledDataGrid,
  paginationStyles,
} from "../../components/style";
import { getColumnWidth } from "../../../style/datagridMQ";

const columns = (handleDeleteRow) => [
  {
    field: "OrderID",
    headerName: "Order ID",
    width: getColumnWidth("OrderID"),
  },
  {
    field: "OrderDate",
    headerName: "Order Date",
    width: getColumnWidth("OrderDate"),
  },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: getColumnWidth("CustomerName1"),
  },
  {
    field: "Location",
    headerName: "Location",
    width: getColumnWidth("Location"),
  },
  { field: "Amount", headerName: "Amount", width: getColumnWidth("Amount") },
  {
    field: "ViewTransactionReport",
    headerName: "View Transaction Report",
    width: getColumnWidth("ViewTransactionReport"),
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
    field: "actions",
    headerName: "Actions",
    width: getColumnWidth("actions3"),
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

const OrderSummaryShots = () => {
  const [rows, setRows] = useState(orderSummery());
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
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();

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
      case "This Month":
        setRows((prevRows) =>
          prevRows.filter((row) => {
            const rowDate = new Date(row.OrderDate);
            return rowDate.getMonth() === currentMonth;
          })
        );
        break;
      case "Today":
        setRows((prevRows) =>
          prevRows.filter((row) => {
            const rowDate = new Date(row.OrderDate);
            return (
              rowDate.getMonth() === currentMonth &&
              rowDate.getDate() === currentDay
            );
          })
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
      <Grid container spacing={2} padding={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box>
            <h1>Order Summary(Shots Ordered)</h1>
            <p>Here is your Order List Data</p>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={4} lg={4} xl={5}></Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
          <Button
            variant="contained"
            startIcon={<CalendarMonthIcon sx={{ color: "blue" }} />}
            onClick={handleFilterClick}
            sx={{
              backgroundColor: "#f4f5f9",
              color: "#999ea5",
              marginTop: "20px",
            }}
          >
            Today
          </Button>
        </Grid>
      </Grid>
      <StyledContainer>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem onClick={() => handleFilterCondition("This Month")}>
            This Month
          </MenuItem>
          <MenuItem onClick={() => handleFilterCondition("Today Date")}>
            Today Date
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

export default OrderSummaryShots;
