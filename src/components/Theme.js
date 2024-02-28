// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE6B8B", // Main color for the gradient
    },
    secondary: {
      main: "#FF8E53", // Secondary color for the gradient
    },
    background: {
      default: "#000000", // Dark background
    },
    text: {
      primary: "#000000", // Black text
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
          color: "#FFFFFF", // White text
          boxShadow: "none", // Remove shadow for a flat design
        },
      },
    },
  },
});

export default theme;
