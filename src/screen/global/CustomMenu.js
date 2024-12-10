import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { styled } from "@mui/material";

const CustomMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "isCollapsed" && prop !== "isActive",
})(({ theme, isCollapsed, isActive }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: isCollapsed ? "center" : "flex-start",
  height: "50px",
  marginBottom: "10px",
  textDecoration: "none",
  color: isActive ? "#0056D2" : "silver",
  backgroundColor: isActive ? "white" : "white",
  boxSizing: "border-box",
  cursor: "pointer",
  padding: isCollapsed ? "0" : "0px 5px",
  boxShadow: isCollapsed ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  borderLeft: isActive ? "4px solid #0056D2" : "4px solid transparent",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    backgroundColor: isCollapsed ? "transparent" : "#f0f0f0",
    boxShadow: isCollapsed ? "none" : "0px 6px 8px rgba(0, 0, 0, 0.2)",
  },

  "&:active": {
    backgroundColor: isCollapsed ? "transparent" : "#e0e0e0",
    boxShadow: isCollapsed ? "none" : "inset 0px 4px 6px rgba(0, 0, 0, 0.15)",
  },
}));

export default CustomMenuItem;
