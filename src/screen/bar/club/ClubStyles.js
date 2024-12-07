import { styled } from "@mui/material/styles";
import { Container, Button, TextField } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "30px 40px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.1)",
  maxWidth: "800px",
  margin: "0 auto",
  border: "none",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#06214B",
  padding: 0,
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214B",
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "20px 10px",
    "& input": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.4375em",
      letterSpacing: "0.00938em",
      color: "rgba(0, 0, 0, 0.87)",
      height: "10px",
      border: "none",
      outline: "none",
    },
    "& fieldset": {
      padding: 10,
      borderRadius: "10px",
      border: "2px solid #D8DEE6",
    },
    "&:hover fieldset": {
      border: "2px solid #D8DEE6",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #D8DEE6",
    },
  },
  "& label": {
    fontSize: "13px",
    color: "#A0A0A0",
  },
  "& label.Mui-focused": {
    color: "#333",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-focused": {
    borderColor: "#333",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-error": {
    borderColor: "#F44336",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-disabled": {
    borderColor: "#ccc",
  },
  "&.Mui-error": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F44336",
    },
    "& label": {
      color: "#F44336",
    },
  },
  "&.Mui-disabled": {
    "& input": {
      backgroundColor: "#F5F5F5",
      color: "#A0A0A0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  },
}));

export const styles = {
  title: {
    color: "#3E4954",
    fontWeight: "bold",
  },
  image: {
    borderRadius: "4px",
  },
  photoHeading: {
    color: "grey",
    marginLeft: "5px",
  },
  fileButtonContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: 2,
    fontSize: "16px",
  },
  chooseFileButton: {
    backgroundColor: "#fff",
    color: "#7894f7",
    borderColor: "#7894f7",
    fontWeight: "bold",
  },
  fileNameButton: (selectedFile) => ({
    backgroundColor: "#F8FCFF",
    color: "#063af8ba",
    fontWeight: "bold",
    pointerEvents: selectedFile ? "none" : "auto",
  }),
  saveButtonContainer: {
    display: "flex",
    justifyContent: "end",
    fontSize: "16px",
  },
  saveButton: {
    backgroundColor: "#2F4CDD",
    color: "#fff",
    fontWeight: "bold",
  },
  textFieldContainer: {
    mt: 3,
    mb: 1,
    color: "#788088",
  },
  submitButtonContainer: {
    mt: 4,
    mb: 3,
    textAlign: "center",

    backgroundColor: "#06214B",
    color: "white",
    fontWeight: "bold",
    width: "150px",
    height: "40px",
    margin: "1 5px",
    mt: 2,
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    padding: "0",
    textAlign: "center",
    textTransform: "none",
  },
};
