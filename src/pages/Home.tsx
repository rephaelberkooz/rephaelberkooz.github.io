import { Box, Container, Link, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth={false}>
      <Box
        textAlign={"center"}
        alignContent={"center"}
        sx={{ display: "grid", rowGap: 2 }}
      >
        <Typography variant="h3">Rephael Berkooz</Typography>
        <Typography variant="h5">Full-Stack Software Engineer</Typography>
        <Box
          textAlign={"center"}
          maxWidth={720}
          sx={{ display: "grid", rowGap: 0 }}
        >
          <Typography paragraph={true}>
            I write software at&nbsp;
            <Link href="https://tulip.co">
              <b>Tulip Interfaces</b>
            </Link>
            .
          </Typography>
          <Typography paragraph={true}>
            My work centers on creating technology for data insights in
            manufacturing and operations.
          </Typography>
          <Typography paragraph={true}>
            Learn&nbsp;
            <Link href="/about-me">
              <b>a bit about me</b>
            </Link>
            , check out my&nbsp;
            <Link href="https://github.com/rephaelberkooz">
              <b>GitHub</b>
            </Link>
            &nbsp;contributions or connect with me on&nbsp;
            <Link href="https://www.linkedin.com/in/rephael-berkooz/">
              <b>LinkedIn</b>
            </Link>
            !
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
