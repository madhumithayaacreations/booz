import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { createCustomTheme } from "./theme";
import SideBar from "./screen/global/Side";
import TopBar from "./screen/global/Top";
import Login from "./screen/auth/Login";
import Signup from "./screen/auth/Signup";
import ForgotPassword from "./screen/auth/forgot";
import Dashboard from "./screen/Dashboard";
import Logout from "./screen/Logout";
import AddProduct from "./screen/product/AddProduct";
import EditProduct from "./screen/product/EditProduct";
import ProductList from "./screen/product/ProductList";
import Permission from "./screen/product/PermissionList";
import AddClub from "./screen/bar/club/AddClub";
import EditClub from "./screen/bar/club/EditClub";
import AddWholeSalerAggregation from "./screen/wholesaler/AddWholeSaler";
import EditWholeSalerAggregation from "./screen/wholesaler/EditWholeSaler";
import OnBoardedWholeSaler from "./screen/wholesaler/OnBoardedWholeSaler";
import WholeSalerReport from "./screen/wholesaler/WholeSalesReport";
import CompleteWholeSalerReport from "./screen/wholesaler/CompleteSalesReportWholeSaler";
import BarClubAggregation from "./screen/bar/club/BarClubAggregation";
import BarClubSalesReport from "./screen/bar/club/BarClubSalesReport";
import CompleteSalesReport from "./screen/bar/club/CompleteSalesReport";
import SalesReport from "./screen/bar/club/SalesReport";
import GeneralCustomer from "./screen/bar/club/GeneralCustomerList";
import CustomerTransaction from "./screen/bar/club/CustomerTransaction";
import OrderSummaryBottleOrder from "./screen/bar/club/OrderSummaryBootle";
import OrderSummaryShotsOrder from "./screen/bar/club/OrderSummaryShots";
import EditCustomer from "./screen/Customer/EditCustomer";
import { APP_LINK } from "./screen/global/MenuItems";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./themes.css";

const App = () => {
  const themeSettings = createCustomTheme();
  const location = useLocation();

  const isAuthPage =
    location.pathname === APP_LINK.LOGIN ||
    location.pathname === APP_LINK.REGISTER ||
    location.pathname === APP_LINK.FORGOTPASSWORD;

  return (
    // <Provider store={store}>
    <ThemeProvider theme={themeSettings}>
      <CssBaseline />
      <div className="app">
        {!isAuthPage && <SideBar />}
        <main className="content">
          {!isAuthPage && <TopBar />}
          <Routes>
            <Route path={APP_LINK.LOGIN} element={<Login />} />
            <Route path={APP_LINK.REGISTER} element={<Signup />} />
            <Route path={APP_LINK.FORGOTPASSWORD} element={<ForgotPassword />} />
            <Route path={APP_LINK.DASHBOARD} element={<Dashboard />} />
            <Route path={APP_LINK.ADDPRODUCT} element={<AddProduct />} />
            <Route path={APP_LINK.EDITPRODUCT} element={<EditProduct />} />
            <Route path={APP_LINK.PRODUCTLIST} element={<ProductList />} />
            <Route path={APP_LINK.PERMISSION} element={<Permission />} />
            <Route path={APP_LINK.ADDWHOLESALER} element={<AddWholeSalerAggregation />} />
            <Route path={APP_LINK.EDITWHOLESALER} element={<EditWholeSalerAggregation />} />
            <Route path={APP_LINK.ONBOARDEDWHOLESALER} element={<OnBoardedWholeSaler />} />
            <Route path={APP_LINK.WHOLESALESREPORTS} element={<WholeSalerReport />} />
            <Route path={APP_LINK.COMPLETESALESREPORTS} element={<CompleteWholeSalerReport />} />
            <Route path={APP_LINK.ADDBARAGGREGATION} element={<AddClub />} />
            <Route path={APP_LINK.EDITBARAGGREGATION} element={<EditClub />} />
            <Route path={APP_LINK.BARCLUBAGGREGATION} element={<BarClubAggregation />} />
            <Route path={APP_LINK.BARCLUBSALESREPORT} element={<BarClubSalesReport />} />
            <Route path={APP_LINK.BARAGGREGATIONSREPORT} element={<SalesReport />} />
            <Route path={APP_LINK.COMPLETEBARAGGREGATIONREPORT} element={<CompleteSalesReport />} />
            <Route path={APP_LINK.GENERALCUSTOMERS} element={<GeneralCustomer />} />
            <Route path={APP_LINK.CUSTOMERTRANSACTION} element={<CustomerTransaction />} />
            <Route path={APP_LINK.BOTTLESORDER} element={<OrderSummaryBottleOrder />} />
            <Route path={APP_LINK.SHORTSORDER} element={<OrderSummaryShotsOrder />} />
            <Route path={APP_LINK.EDITCUSTOMERORDER} element={<EditCustomer />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
    // </Provider>
  );
};

export default App;
