import { createTheme } from "@mui/material/styles";

export const themeSettings = {
  palette: {
    default: {
        defaultBlue: "#07214b",
        buttonBlue: "#0866ff",
        buttonRed: "#f41400",
        buttonGreen: "#15b800",
    },
    blue: {
        textBlue: "#07214b"
    },
    greyAccent: {
        grey1: "#6C7072",
    },
    black: {
        black1: "#2C2728",
    },
    primary: {
      ma1: "#040509",
      ma2: "#080b12",
      ma3: "#0c101b",
      main: "#f2f0f0", 
      ma5: "#141b2d",
      ma6: "#1F2A40",
      ma7: "#727681",
      ma8: "#a1a4ab",
      ma9: "#d0d1d5",
    },
    grey: {
      grey1: "#141414",
      grey2: "#292929",
      grey3: "#3d3d3d",
      grey4: "#525252",
      grey5: "#666666",
      grey6: "#858585",
      grey7: "#a3a3a3",
      grey8: "#c2c2c2",
      grey9: "#e0e0e0",
    },
    greenAccent: {
      green1: "#0f2922",
      green2: "#1e5245",
      green3: "#2e7c67",
      green4: "#3da58a",
      green5: "#4cceac",
      green6: "#70d8bd",
      green7: "#94e2cd",
      green8: "#b7ebde",
      green9: "#dbf5ee",
    },
    redAccent: {
      red1: "#2c100f",
      red2: "#58201e",
      red3: "#832f2c",
      red4: "#af3f3b",
      red5: "#db4f4a",
      red6: "#e2726e",
      red7: "#e99592",
      red8: "#f1b9b7",
      red9: "#f8dcdb",
    },
    blueAccent: {
      blue1: "#151632",
      blue2: "#2a2d64",
      blue3: "#3e4396",
      blue4: "#535ac8",
      blue5: "#6870fa",
      blue6: "#868dfb",
      blue7: "#a4a9fc",
      blue8: "#c3c6fd",
      blue9: "#e1e2fe",
    },
    basic: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 13,
    h1: { fontSize: 40 },
    h2: { fontSize: 32 },
    h3: { fontSize: 24 },
    h4: { fontSize: 20 },
    h5: { fontSize: 16 },
    h6: { fontSize: 14 },
  },
};

export const createCustomTheme = () => createTheme(themeSettings);