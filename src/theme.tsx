import { createTheme, colors } from "@mui/material";

export const THEME = createTheme({
  palette: {
    primary: {
      main: colors.blue[300],
      light: colors.blue[200],
      dark: colors.blue[400],
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