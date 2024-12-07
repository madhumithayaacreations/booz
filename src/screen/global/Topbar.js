import React from "react";
import { Box, IconButton, Typography, Badge, InputBase, Avatar } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Topbar.css";
import Logo from "../../image/boozLogo.png"

const Topbar = ({ onSidebarToggle }) => {
  return (
    <Box className="topbar-container">
      {/* Logo */}
      <Box className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </Box>

      {/* Sidebar Toggle */}
     <IconButton onClick={onSidebarToggle}>
        <MenuOutlinedIcon />
      </IconButton>

      {/* Search Bar */}
      <Box className="search-bar">
        <InputBase className="search-input" placeholder="Search here" />
      </Box>

      {/* Icons and Profile */}
      <Box className="topbar-right">
        <Box className="notification">
          <Badge badgeContent={12} color="error">
            <NotificationsOutlinedIcon className="icon" />
          </Badge>
        </Box>
        <Box className="setting">
          <Badge badgeContent="!" color="error">
            <SettingsOutlinedIcon className="icon" />
          </Badge>
        </Box>
        <Box className="profile-section">
          <Box className="profile-text-background">
            <Typography className="profile-text">Hello, Sam</Typography>
            <Avatar
            alt="Profile Picture"
            src="https://via.placeholder.com/40"
            className="profile-picture"
          />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
