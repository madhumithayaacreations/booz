import { Typography, Grid, Box } from "@mui/material";
import { StyledButton, StyledTextField } from "../../components/style";
import "../../../style/style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const CompleteSalesReportsBarClub = () => {
  const navigator=useNavigate();
  const viewReport=()=>{
    navigator("/barAggregation/salesreport")
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box padding={10}>
      <Typography variant="h4" fontWeight={700}>
        Complete Sales Report Each Bar/club
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} pt={3}>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Name
              </Typography>
              <StyledTextField
                label=""
                required
                {...register("name", { required: true })}
                size="small"
                type="date"
                error={!!errors.name}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Bar/club Name
              </Typography>
              <StyledTextField
                label="Bar/club Name"
                required
                {...register("barClubName", { required: true })}
                size="large"
                fullWidth
                multiline
                error={!!errors.barClubName}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Address
              </Typography>
              <StyledTextField
                label="Address"
                required
                {...register("address", { required: true })}
                rows={3}
                size="large"
                fullWidth
                multiline
                error={!!errors.address}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={3}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Total Transactions
              </Typography>
              <StyledTextField
                label="Total Transactions"
                required
                {...register("totalTransactions", { required: true })}
                size="large"
                fullWidth
                multiline
                error={!!errors.totalTransactions}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Complete Bottles Sold
              </Typography>
              <StyledTextField
                label="Bottles Sold"
                required
                {...register("bottlesSold", { required: true })}
                size="large"
                fullWidth
                multiline
                error={!!errors.bottlesSold}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Shots Consumed
              </Typography>
              <StyledTextField
                label="Shots Sold"
                required
                {...register("shotsSold", { required: true })}
                size="large"
                fullWidth
                multiline
                error={!!errors.shotsSold}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ mt: 1, mb: 1, color: "#788088" }}
              >
                Most Sold Brand
              </Typography>
              <StyledTextField
                label="Most Sold Brand"
                required
                {...register("mostSoldBrand", { required: true })}
                size="large"
                fullWidth
                multiline
                error={!!errors.mostSoldBrand}
              />
            </Box>
            <Box pt={3}>
              <StyledButton sx={{ padding: "10px 30px" }} type="submit"
              onClick={viewReport}
              >
                
                VIEW REPORT
              </StyledButton>
            </Box>
          </Grid>
          <Grid item xs={0} sm={0} md={0} lg={2} xl={2}></Grid>
          <Grid item xs={0} sm={0} md={0} lg={6} xl={6}></Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CompleteSalesReportsBarClub;
