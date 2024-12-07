import React from "react";
import { Category as CategoryIcon } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

const menuItems = [
    {
      key: "dashboard",
      icon: <SpeedIcon />,
      label: "Dashboard",
      url: "/dashboard"
    },
    {
      key: "products",
      icon: <PeopleOutlineOutlinedIcon />,
      label: "Add Products To App",
      submenu: [
        { name: "Add New", url: "/products/add" },
        { name: "Edit", url: "/products/edit" },
        { name: "Products", url: "/products/productlist" },
        { name: "Permission", url: "/products/permision" },
      ]
    },
    {
      key: "wholeSalerAggregation",
      icon: <CloudSyncOutlinedIcon />,
      label: "Wholesaler Aggregation",
      submenu: [
        { name: "Add New", url: "/wholeSalerAggregation/add" },
        { name: "Edit", url: "/wholeSalerAggregation/edit" },
        { name: "OnBoarded Whole Saler", url: "/wholeSalerAggregation/onboarded" },
        { name: "Wholesaler Reports", url: "/wholeSalerAggregation/wholesalerreport" },
        { name: "Complete Sales Report", url: "/wholeSalerAggregation/completesalesreport" },
      ]
    },
    {
        key: "barAggregation",
        icon: <CloudSyncOutlinedIcon />,
        label: "Bar Aggregation",
        submenu: [
          { name: "Add New", url: "/barAggregation/add" },
          { name: "Edit", url: "/barAggregation/edit" },
          { name: "Bar/Club Sales Report", url: "/barAggregation/barclubsalesreport" },
          { name: "Sales Report", url: "/barAggregation/salesreport" },
          { name: "Complete Sales Report", url: "/barAggregation/completesalesreport" },
          { name: "BarClubAggregation", url: "/barAggregation/aggregation" },

          { name: "General Customers", url: "/barAggregation/generalcustomers" },
          { name: "Customer Transaction", url: "/barAggregation/customertransaction" },
          { name: "Bottles Order", url: "/barAggregation/bootlesorder" },
          { name: "Shorts Order", url: "/barAggregation/shortssorder" },
          
        ]
      },
      {
        key: "customerOrder",
        icon: <BorderColorOutlinedIcon />,
        label: "Customer Order",
        submenu: [
          { name: "Edit Customer", url: "/customerOrder/edit" },
          { name: "General Customers", url: "/customerOrder/general" },
          { name: "Bottles Ordered", url: "/customerOrder/bottle-order" },
          { name: "Shots Ordered", url: "/customerOrder/shots-order" },

        ]
      },
      {
        key: "masterAdminAccess",
        icon: <ReceiptLongOutlinedIcon />,
        label: "Master Admin Access",
        submenu: [
          { name: "Add New", url: "/masterAdminAccess/add" },
          { name: "Edit", url: "/masterAdminAccess/edit" },
        ]
      },
  ];

  export default menuItems;

