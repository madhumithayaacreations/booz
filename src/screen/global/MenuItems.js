import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export const APP_LINK = {
  LOGIN: "/",
  REGISTER: "/register",
  FORGOTPASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  ADDPRODUCT: "/products/add",
  EDITPRODUCT: "/products/edit",
  PRODUCTLIST: "/products/productlist",
  PERMISSION: "/products/permision",
  ADDWHOLESALER: "/wholeSalerAggregation/add",
  EDITWHOLESALER: "/wholeSalerAggregation/edit",
  ONBOARDEDWHOLESALER: "/wholeSalerAggregation/onboarded",
  WHOLESALESREPORTS: "/wholeSalerAggregation/wholesalerreport",
  COMPLETESALESREPORTS: "/wholeSalerAggregation/completesalesreport",
  ADDMASTERADMIN: "/masterAdminAccess/add",
  EDITMASTERADMIN: "/masterAdminAccess/edit",
  ADDBARAGGREGATION: "/barAggregation/add",
  EDITBARAGGREGATION: "/barAggregation/edit",
  BARCLUBSALESREPORT: "/barAggregation/barclubsalesreport",
  BARAGGREGATIONSREPORT: "/barAggregation/salesreport",
  COMPLETEBARAGGREGATIONREPORT: "/barAggregation/completesalesreport",
  BARCLUBAGGREGATION: "/barAggregation/aggregation",
  GENERALCUSTOMERS: "/barAggregation/generalcustomers",
  CUSTOMERTRANSACTION: "/barAggregation/customertransaction",
  BOTTLESORDER: "/barAggregation/bootlesorder",
  SHORTSORDER: "/barAggregation/shortssorder",
  EDITCUSTOMERORDER: "/customerOrder/edit",
  GENERALCUSTOMERORDER: "/customerOrder/general",
  BOTTLESORDERED: "/customerOrder/bottle-order",
  SHOTSORDERED: "/customerOrder/shots-order",
}; 

export const items = [
  {
    url: APP_LINK.LOGIN,
  },
  {
    url: APP_LINK.REGISTER,
  },
  {
    url: APP_LINK.FORGOTPASSWORD,
  },
]

const menuItems = [
  {
    key: "dashboard",
    icon: <SpeedIcon />,
    label: "Dashboard",
    url: APP_LINK.DASHBOARD,
  },
  {
    key: "products",
    icon: <PeopleOutlineOutlinedIcon />,
    label: "Add Product To App",
    submenu: [
      { name: "Add New", url: APP_LINK.ADDPRODUCT },
      { name: "Edit", url: APP_LINK.EDITPRODUCT },
      { name: "Products", url: APP_LINK.PRODUCTLIST },
      { name: "Permissions", url: APP_LINK.PERMISSION },
    ],
  },
  {
    key: "wholeSalerAggregation",
    icon: <CloudSyncOutlinedIcon />,
    label: "Wholesaler Aggregation",
    submenu: [
      { name: "Add New", url: APP_LINK.ADDWHOLESALER },
      { name: "Edit", url: APP_LINK.EDITWHOLESALER },
      { name: "OnBoarded Whole Saler", url: APP_LINK.ONBOARDEDWHOLESALER },
      { name: "Wholesaler Reports", url: APP_LINK.WHOLESALESREPORTS },
      { name: "Complete Sales Report", url: APP_LINK.COMPLETESALESREPORTS },
    ],
  },
  {
    key: "barAggregation",
    icon: <CloudSyncOutlinedIcon />,
    label: "Bar Aggregation",
    submenu: [
      { name: "Add New", url: APP_LINK.ADDBARAGGREGATION },
      { name: "Edit", url: APP_LINK.EDITBARAGGREGATION },
      { name: "Bar/Club Sales Report", url: APP_LINK.BARCLUBSALESREPORT },
      { name: "Sales Report", url: APP_LINK.BARAGGREGATIONSREPORT },
      {
        name: "Complete Sales Report",
        url: APP_LINK.COMPLETEBARAGGREGATIONREPORT,
      },
      { name: "BarClubAggregation", url: APP_LINK.BARCLUBAGGREGATION },
      { name: "General Customers", url: APP_LINK.GENERALCUSTOMERS },
      { name: "Customer Transaction", url: APP_LINK.CUSTOMERTRANSACTION },
      { name: "Bottles Order", url: APP_LINK.BOTTLESORDER },
      { name: "Shorts Order", url: APP_LINK.SHORTSORDER },
    ],
  },
  {
    key: "customerOrder",
    icon: <BorderColorOutlinedIcon />,
    label: "Customer Order",
    submenu: [
      { name: "Edit Customer", url: APP_LINK.EDITCUSTOMERORDER },
      { name: "General Customers", url: APP_LINK.GENERALCUSTOMERORDER },
      { name: "Bottles Ordered", url: APP_LINK.BOTTLESORDERED },
      { name: "Shots Ordered", url: APP_LINK.SHOTSORDERED },
    ],
  },
  {
    key: "masterAdminAccess",
    icon: <ReceiptLongOutlinedIcon />,
    label: "Master Admin Access",
    submenu: [
      { name: "Add New", url: APP_LINK.ADDMASTERADMIN },
      { name: "Edit", url: APP_LINK.EDITMASTERADMIN },
    ],
  },
];

export default menuItems;

