import { Box, styled } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "30px 40px",
  borderRadius: "8px",
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#06214B",
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214B",
  },
}));
export const StyledButton1 = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
  color: "#9F9F9F",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214B",
  },
}));
export const StyledButton2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#0866FF",
  borderRadius: "20px",
  color: "#FFF",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214B",
  },
}));
export const styles = {
  loginDirectly: {
  marginTop: "20px",
  },
  forgotPassword: {
     textDecoration: "none", 
     color: "black"
  },
};

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #D8DEE6",
    },
    "&:hover fieldset": {
      border: "2px solid #D8DEE6",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #D8DEE6",
    },
    "& input": {
      backgroundColor: "#fff",
      border: "#D8DEE6",
      borderRadius: "6px",
      outline: "#D8DEE6",
      paddingLeft: "10px",
    },
  },
  "& .MuiInputBase-input": {
    backgroundColor: "#fff",
    padding: "5px",
    fontSize: "13px",
    height: "30px",
    border: "none",
    outline: "none",
  },
  "& label": {
    fontSize: "13px",
    color: "#A0A0A0",
    transform: "translate(14px, 12px) scale(1)",
  },
  "& label.Mui-focused": {
    color: "#A0A0A0",
    transform: "translate(14px, -6px) scale(0.75)", 
  },
  "& label.MuiFormLabel-filled": {
    transform: "translate(14px, -6px) scale(0.80)", 
  },
}));

