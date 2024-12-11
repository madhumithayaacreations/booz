import {
  Button,
  TextField,
  Container,
  styled,
  getAppBarUtilityClass,
} from "@mui/material";

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
    gap: 0.5,
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
    border: "1px solid #ddd",
    fontWeight: "bold",
    maxWidth: "180px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "center",
    padding: "4px 8px",
    textOverflow: "clip",
    display: "inline-block",
    direction: "ltr",
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
  submitGap: {
    mt: 4,
    mb: 3,
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

//Permission Styles
export const containerStyles = {
  padding: { xs: "20px", md: "30px" },
};

export const tableContainerStyles = {
  borderRadius: "8px",
  overflowX: "auto",
  overflowY: "hidden",
};

export const tableStyles = {
  borderCollapse: "separate",
  borderSpacing: "0",
  height: "100%",
};

export const tableCellHeaderStyles = {
  fontWeight: "bold",
  textAlign: "center",
  border: "none",
};

export const tableCellBodyStyles = (index, rowIndex, rolesLength) => ({
  borderRight: index === 2 ? "4px solid #cad1f5" : "none",
  borderBottom: rowIndex === rolesLength - 1 ? "4px solid #cad1f5" : "none",
  borderTop: rowIndex === 0 ? "4px solid #cad1f5" : "none",
});

export const tableRowLabelCellStyles = {
  textAlign: "center",
  border: "none",
  borderRight: "4px solid #cad1f5",
  fontWeight: "bold",
};

export const iconStyle = {
  fontSize: "40px",
};

export const stackStyles = {
  paddingTop: "50px",
  margin: 1,
};

export const paperStyles = {
  padding: "8px",
  backgroundColor: "#2f4cdd",
  color: "#fff",
  borderRadius: "16px",
};

export const typographyBody1Styles = {
  fontWeight: "bold",
};
