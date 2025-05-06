import { Box, Typography } from "@mui/material";
import { Page } from "../components/Page";

export const Error = () => {
  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh"
        }}
      >
        <Typography variant="h4" color="text.secondary">
          ERROR: PAGE NOT FOUND
        </Typography>
      </Box>
    </Page>
  );
};
