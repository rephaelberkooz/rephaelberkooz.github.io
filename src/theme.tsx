import { createTheme } from "@mui/material";

export const THEME = createTheme({
  palette: {
    primary: {
      main: "#607D8B", // Blue Grey
      light: "#B0BEC5",
      dark: "#455A64",
    },
    text: {
      primary: "#37474F", // Dark Blue Grey
      secondary: "#78909C", // Light Blue Grey
    },
    secondary: {
      main: "#80CBC4", // Teal
      light: "#B2DFDB",
      dark: "#4DB6AC",
    },
    error: {
      main: "#EF9A9A", // Soft Red
      light: "#FFCDD2",
      dark: "#E57373",
    },
    success: {
      main: "#A5D6A7", // Soft Green
      light: "#C8E6C9",
      dark: "#81C784",
    },
    background: {
      default: "#CFD8DC", // Slightly darker blue grey
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    allVariants: {
      color: "#37474F",
    },
    h1: {
      fontSize: "3.2em",
      lineHeight: 1.1,
    },
    body1: {
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minWidth: "320px",
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "0.6em 1.2em",
          fontSize: "1em",
          fontWeight: 500,
          backgroundColor: "#607D8B",
          color: "white",
          transition: "border-color 0.25s, background-color 0.25s",
          "&:hover": {
            backgroundColor: "#455A64",
            borderColor: "#455A64",
          },
          "&:focus": {
            outline: "4px auto -webkit-focus-ring-color",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#607D8B",
          textDecoration: "none",
          "&:hover": {
            color: "#455A64",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#607D8B",
        },
      },
    },
    // Special override for NavBar buttons
    MuiToolbar: {
      styleOverrides: {
        root: {
          "& .MuiButton-root": {
            color: "white",
            "&:hover": {
              backgroundColor: "#455A64",
              color: "white",
            },
          },
        },
      },
    },
  },
});
