import { Typography, Grid, Box, Button } from "@mui/material";
import {
  StyledButton,
  StyledTextField,
  StyledButton1,
  StyledContainer,
} from "../../components/style";
import { styles } from "../../components/formStyles";
import "../../../style/style.css";
import glass from "../../../image/pngwing.com (7) 2.png";
import Bottles from "../../../image/pngwing.com (13).png";
import SalesReportGraph from "../../constant/SalesReportGraph";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { data as salesData, WeekData, DateData } from "../../constant/data";
import { graphStyle } from "../../bar/club/SalesStyles";

const SalesReportForm = () => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [timeFrame, setTimeFrame] = useState("Month");

  const salesDataArray = Array.isArray(salesData[0]?.data)
    ? salesData[0].data
    : [];
  const WeekDataArray = Array.isArray(WeekData[0]?.data)
    ? WeekData[0].data
    : [];
  const DateDataArray = Array.isArray(DateData[0]?.data)
    ? DateData[0].data
    : [];

  const chartData =
    timeFrame === "Month"
      ? salesDataArray
      : timeFrame === "Week"
      ? WeekDataArray
      : DateDataArray;
  const formattedChartData = [
    {
      id: "Sales Data",
      data: chartData,
    },
  ];
  const onSubmit = async (data) => {
    console.log(data);
    navigator("/barAggregation/completesalesreport");
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" fontWeight={700}>
        06/11/2024 to 06/12/2024 Sales Report Form
      </Typography>
      <Grid container spacing={2} pt={3}>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={styles.salesTextFieldContainer}
            >
              Name
            </Typography>
            <StyledTextField
              label="Name"
              required
              id="name"
              size="large"
              fullWidth
              multiline
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name ? "Name is required" : ""}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <Box>
            <Typography variant="h6" fontSize={16} sx={{ color: "#788088" }}>
              Address
            </Typography>
            <StyledTextField
              label="Address"
              required
              id="name"
              rows={3}
              size="large"
              fullWidth
              multiline
              {...register("address", { required: true })}
              error={!!errors.address}
              helperText={errors.address ? "Address is required" : ""}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} pt={0}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={styles.salesTextFieldContainer}
            >
              Transactions
            </Typography>
            <StyledTextField
              label="Transactions"
              required
              id="Transactions"
              size="large"
              fullWidth
              multiline
              {...register("transactions", { required: true })}
              error={!!errors.transactions}
              helperText={errors.transactions ? "Transactions is required" : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={styles.salesTextFieldContainer}
            >
              Bottles Sold
            </Typography>
            <StyledTextField
              label="Bottles Sold"
              required
              id="Bottles Sold"
              size="large"
              fullWidth
              multiline
              InputProps={{
                endAdornment: (
                  <img src={Bottles} alt="image" style={{ height: "30px" }} />
                ),
              }}
              {...register("bottlesSold", { required: true })}
              error={!!errors.bottlesSold}
              helperText={errors.bottlesSold ? "Bottles Sold is required" : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={styles.salesTextFieldContainer}
            >
              Shots Sold
            </Typography>
            <StyledTextField
              label="Shots Sold"
              required
              id="Shots Sold"
              size="large"
              fullWidth
              multiline
              InputProps={{
                endAdornment: (
                  <img src={glass} alt="image" style={{ height: "30px" }} />
                ),
              }}
              {...register("shotsSold", { required: true })}
              error={!!errors.shotsSold}
              helperText={errors.shotsSold ? "Shots Sold is required" : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={styles.salesTextFieldContainer}
            >
              Most Sold Brand
            </Typography>
            <StyledTextField
              label="Most Sold Brand"
              required
              id="Most Sold Brand"
              size="large"
              fullWidth
              multiline
              {...register("mostSoldBrand", { required: true })}
              error={!!errors.mostSoldBrand}
              helperText={
                errors.mostSoldBrand ? "Most Sold Brand is required" : ""
              }
            />
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Box mt={0}>
            <StyledContainer>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ mt: 2, mb: 2 }}
              >
                <Typography variant="h5" fontSize={16} textAlign={"start"}>
                  Chart Order
                </Typography>
                <Box sx={{ backgroundColor: "#ccc" }}>
                  <Button
                    onClick={() => setTimeFrame("Month")}
                    sx={{
                      backgroundColor: timeFrame === "Month" ? "#fff" : "#ccc",
                      ...graphStyle.graphButton,
                    }}
                  >
                    Month
                  </Button>
                  <Button
                    onClick={() => setTimeFrame("Week")}
                    sx={{
                      backgroundColor: timeFrame === "Week" ? "#fff" : "#ccc",
                      ...graphStyle.graphButton,
                    }}
                  >
                    Week
                  </Button>
                  <Button
                    onClick={() => setTimeFrame("Day")}
                    sx={{
                      backgroundColor: timeFrame === "Day" ? "#fff" : "#ccc",
                      ...graphStyle.graphButton,
                    }}
                  >
                    Day
                  </Button>
                </Box>
              </Box>
              <Box>
                <SalesReportGraph data={formattedChartData} />
              </Box>
            </StyledContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Box>
            <StyledButton1
              sx={{ color: "#101010", padding: "10px 30px" }}
              onClick={handleSubmit(onSubmit)}
            >
              Download Excel Report
            </StyledButton1>
          </Box>
          <Box pt={1}>
            <Typography sx={{ color: "#101010", padding: "10px 30px" }}>
              - - - - - - - - - or - - - - - - - - -
            </Typography>
          </Box>
          <Box pt={1}>
            <StyledButton
              sx={{ padding: "10px 75px" }}
              onClick={handleSubmit(onSubmit)}
            >
              View Report
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesReportForm;
