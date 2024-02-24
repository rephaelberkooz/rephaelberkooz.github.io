import { Box, Container, Grid, Link, Typography } from "@mui/material";

import { NavBar } from "../components";

export const Home = () => {
  const extraText =
    "This includes process control methods, data visualization, and data query languages.";
  return (
    <Container maxWidth={false}>
      <NavBar />
      <Box
        textAlign={"center"}
        alignContent={"center"}
        sx={{ display: "grid", rowGap: 2 }}
      >
        <Typography variant="h3">Rephael Berkooz</Typography>
        <Typography variant="h5">
          Experienced Full-Stack Software Engineer
        </Typography>
        <Box
          textAlign={"center"}
          maxWidth={720}
          sx={{ display: "grid", rowGap: 0 }}
        >
          <Typography paragraph={true}>
            I'm currently a software engineer at&nbsp;
            <Link href={"https://tulip.co"}>Tulip Interfaces</Link>.
          </Typography>
          <Typography paragraph={true}>
            My work centers on creating technology for data insights in
            manufacturing and operations.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
