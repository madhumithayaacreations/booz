import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createCustomTheme } from "./theme"; 
import Login from "./screen/auth/Login";
import Signup from "./screen/auth/Signup";
import ForgotPassword from "./screen/auth/forgot";
import Dashboard from "./screen/Dashboard";
import Logout from "./screen/Logout";
import TopBar from "./screen/global/Top";
import SideBar from "./screen/global/Side";
import AddProduct from "./screen/product/AddProduct";
import EditProduct from "./screen/product/EditProduct";
import ProductList from "./screen/product/ProductList"
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
import "react-perfect-scrollbar/dist/css/styles.css";
import "./themes.css";

const App = () => {
  const themeSettings = createCustomTheme();
  const location = useLocation();

  const isAuthPage = location.pathname === "/" || location.pathname === "/register" || location.pathname === "/forgot-password" ;
  // console.log("Current Path:", location.pathname);
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeSettings}>
        <CssBaseline />
        <div className="app">
          {/* Render SideBar and TopBar conditionally */}
          {!isAuthPage && <SideBar />}
          <main className="content">
            {!isAuthPage && <TopBar />}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/edit" element={<EditProduct />} />
              <Route path="/products/productlist" element={<ProductList />} />
              <Route path="/products/permision" element={<Permission />} />
              <Route path="/wholeSalerAggregation/add" element={<AddWholeSalerAggregation />} />
              <Route path="/wholeSalerAggregation/edit" element={<EditWholeSalerAggregation />} />
              <Route path="/wholeSalerAggregation/onboarded" element={<OnBoardedWholeSaler />} />
              <Route path="/wholeSalerAggregation/wholesalerreport" element={<WholeSalerReport />} />
              <Route path="/wholeSalerAggregation/completesalesreport" element={<CompleteWholeSalerReport />} />
              <Route path="/barAggregation/add" element={<AddClub />} />
              <Route path="/barAggregation/edit" element={<EditClub />} />
              <Route path="/barAggregation/aggregation" element={<BarClubAggregation />} />
              <Route path="/barAggregation/barclubsalesreport" element={<BarClubSalesReport />} />
              <Route path="/barAggregation/salesreport" element={<SalesReport />} />
              <Route path="/barAggregation/completesalesreport" element={<CompleteSalesReport />} />
              <Route path="/barAggregation/generalcustomers" element={<GeneralCustomer />} />
              <Route path="/barAggregation/customertransaction" element={<CustomerTransaction />} />
              <Route path="/barAggregation/bootlesorder" element={<OrderSummaryBottleOrder />} />
              <Route path="/barAggregation/shortssorder" element={<OrderSummaryShotsOrder />} />
              <Route path="/customerOrder/edit" element={<EditCustomer />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

// import React from 'react';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <div className="rectangle">
//         <div className="circle">
//           <img src="present.png" alt="Present" />
//         </div>
//         <div className="circle right-circle">
//           <img src="attach.png" alt="Attach" />
//         </div>
//         <p>Rectangle</p>
//       </div>
//     </div>
//   );
// }
// export default App;


