import { Box, Link, Typography } from "@mui/material";
import { Page } from "../components/Page";

export const Home = () => {
  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1024px",
          margin: "0 auto",
          minHeight: "75vh",
          justifyContent: "flex-start",
          paddingTop: "15vh"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            maxWidth: 720
          }}
        >
          <Typography variant="h3" color="text.primary">
            Rephael Berkooz
          </Typography>
          <Typography paragraph>
            Full-stack software engineer, specializing in AI agentic systems and machine learning.
          </Typography>
          <Typography>
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
    </Page>
  );
};
