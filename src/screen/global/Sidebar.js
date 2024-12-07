import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box } from "@mui/material";
import menuItems from "./MenuItems";
import sidebarStyles from "./SidebarStyles";
import PerfectScrollbar from "react-perfect-scrollbar";

const SideBar = ({ isOpen }) => {
  const [selected, setSelected] = useState("Dashboard");
  const [openSubmenus, setOpenSubmenus] = useState({});
  const classes = sidebarStyles();

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box sx={classes.sidebarContainer}>
      <Sidebar collapsed={!isOpen}>
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <Menu iconShape="square">
            {menuItems.map((menuItem) => (
              <React.Fragment key={menuItem.key}>
                <MenuItem
                  icon={menuItem.icon}
                  style={{ fontWeight: selected === menuItem.label ? "bold" : "normal" }}
                  onClick={() =>
                    menuItem.submenu
                      ? toggleSubmenu(menuItem.key)
                      : setSelected(menuItem.label)
                  }
                >
                  {menuItem.label}
                </MenuItem>
                {menuItem.submenu && openSubmenus[menuItem.key] && (
                  <Box sx={classes.submenuBox}>
                    {menuItem.submenu.map((submenuItem, idx) => (
                      <MenuItem
                        key={`${menuItem.key}-${idx}`}
                        onClick={() => setSelected(submenuItem.name)}
                      >
                        {submenuItem.name}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Menu>
        </PerfectScrollbar>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
