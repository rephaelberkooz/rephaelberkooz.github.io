import { createTheme, colors } from "@mui/material";

export const THEME = createTheme({
  palette: {
    primary: {
      main: colors.grey[300],
      light: colors.grey[200],
      dark: colors.grey[400],
    },
    text: {
      primary: colors.grey[600],
      secondary: colors.grey[500],
    },
    secondary: {
      main: colors.red[300],
      light: colors.red[200],
      dark: colors.red[400],
    },
    error: {
      main: colors.red[300],
      light: colors.red[200],
      dark: colors.red[400],
    },
    success: {
      main: colors.green[300],
      light: colors.green[200],
      dark: colors.green[400],
    },
    background: {
      default: colors.grey[300],
    },
  },
});
