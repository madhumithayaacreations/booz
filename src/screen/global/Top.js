import React from "react";
import {
  Box,
  IconButton,
  Badge,
  Typography,
  useTheme,
  Grid,
  InputBase,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { topbarStyles } from "./TopStyles"; 

const Topbar = () => {
  const theme = useTheme();

  return (
    <Box p={2}>
      <Grid container justifyContent="space-between" alignItems="center">
        {/* SEARCH BAR */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={topbarStyles.searchBar}>
            <InputBase sx={topbarStyles.searchInput} placeholder="Search here" />
            <IconButton type="button" sx={topbarStyles.searchButton}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* ICONS AND PROFILE */}
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
            {/* Notifications Icon */}
            <Badge badgeContent={3} color="secondary" overlap="rectangular">
              <IconButton sx={topbarStyles.notificationButton}>
                <NotificationsOutlinedIcon sx={topbarStyles.notificationIcon} />
              </IconButton>
            </Badge>

            {/* Settings Icon */}
            <Badge badgeContent="!" color="error" overlap="rectangular">
              <IconButton sx={topbarStyles.settingsButton}>
                <SettingsOutlinedIcon sx={topbarStyles.settingsIcon} />
              </IconButton>
            </Badge>

            {/* Profile Section */}
            <Box sx={topbarStyles.profileContainer}>
              <Box sx={topbarStyles.profileBox} />
              <Typography sx={topbarStyles.profileText}>Hello, Sam</Typography>
              <Box sx={topbarStyles.profileImageContainer}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  style={topbarStyles.profileImage}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topbar;
