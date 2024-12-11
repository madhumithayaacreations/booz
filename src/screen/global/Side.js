import React, { useState, useEffect } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Box, IconButton, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link, useLocation } from "react-router-dom";
import CustomMenuItem from "./CustomMenu";
import menuItems from "./MenuItems";
import sidebarStyles from "./SideStyles";
import Logo from "../../image/boozLogo.png";
import "./Side.css";

const SideBar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeOtherSubmenus = (key) => {
    setOpenSubmenus((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((submenuKey) => {
        if (submenuKey !== key) {
          newState[submenuKey] = false;
        }
      });
      return newState;
    });
  };

  const classes = sidebarStyles(theme);

  return (
    <Box sx={classes.sidebarContainer}>
      <Sidebar collapsed={isCollapsed}>
        {/* Sidebar Header */}
        <Box sx={classes.sidebarHeader}>
          {!isCollapsed && <img src={Logo} alt="Logo" style={classes.logo} />}
          <IconButton
            style={classes.toggle}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        {/* Scrollable Menu */}
        <PerfectScrollbar
          options={{ suppressScrollX: true, wheelPropagation: false }}
          style={{
            ...classes.scrollableMenu,
            ...(isCollapsed ? classes.menuContainerClosed : {}),
          }}
        >
          <Menu iconShape="square">
            {menuItems.map((menuItem) => {
              const isParentActive =
                selected === menuItem.url ||
                (menuItem.submenu &&
                  menuItem.submenu.some((submenu) => submenu.url === selected));
              return (
                <React.Fragment key={menuItem.key}>
                  {/* Top-Level Menu Item */}
                  <Link to={menuItem.url || "#"} style={classes.menuLinkStyle}>
                    <CustomMenuItem
                      icon={menuItem.icon}
                      isCollapsed={isCollapsed}
                      isActive={isParentActive}
                      onClick={() => {
                        if (menuItem.url) setSelected(menuItem.url);
                        if (menuItem.submenu) {
                          toggleSubmenu(menuItem.key);
                          closeOtherSubmenus(menuItem.key);
                        }
                      }}
                    >
                      {!isCollapsed && menuItem.label}
                    </CustomMenuItem>
                  </Link>
                  {/* Submenu Items */}
                  {menuItem.submenu &&
                    openSubmenus[menuItem.key] &&
                    !isCollapsed && (
                      <Box sx={classes.submenuBox}>
                        {menuItem.submenu.map((submenuItem, idx) => (
                          <Link
                            to={submenuItem.url}
                            key={`${menuItem.key}-${idx}`}
                            style={classes.menuLinkStyle}
                          >
                            <CustomMenuItem
                              icon={submenuItem.icon}
                              isActive={selected === submenuItem.url}
                              onClick={() => setSelected(submenuItem.url)}
                            >
                              {submenuItem.name}
                            </CustomMenuItem>
                          </Link>
                        ))}
                      </Box>
                    )}
                </React.Fragment>
              );
            })}
          </Menu>
        </PerfectScrollbar>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
