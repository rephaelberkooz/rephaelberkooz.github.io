import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[100],
        width: "100vw",
        mx: { xs: -2, sm: -3 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1024px",
          margin: "0 auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          © {new Date().getFullYear()} Rephael Berkooz. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}; 