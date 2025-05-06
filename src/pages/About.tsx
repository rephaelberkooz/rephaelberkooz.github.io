import { Box, Link, Stack, Typography } from "@mui/material";
import { Page } from "../components/Page";

export const About = () => {
  return (
    <Page>
      <Box
        sx={{
          maxWidth: "1024px",
          margin: "0 auto",
          minHeight: "75vh",
          paddingTop: "15vh"
        }}
      >
        <Stack spacing={2} flex={1}>
          <Typography variant="body1" color="text.primary">
            I am an independent software engineer, contracting in SaaS/consulting, specializing in AI agentic systems and machine learning.
            <br />
            Previously, I worked as a software engineer at&nbsp;
            <Link href="https://podium.com">
              <b>Podium</b>
            </Link>
            , creating agentic systems for communicating with customers at small and medium-sized businesses.
            <br />
            Prior to Podium, I was a software engineer at&nbsp;
            <Link href="https://tulip.co">
              <b>Tulip Interfaces</b>
            </Link>
            , a series C startup out of the MIT Media Lab. Where I created
            technology for data insights in manufacturing and operations. This
            included full-stack development of an enterprise&nbsp;
            <Link href="https://tulip.co/platform/analytics/">
              <b>data querying and visualization platform</b>
            </Link>
            , in addition to the underlying data and query systems. I also led the
            development of machine learning and statistical control tools, including&nbsp;
            <Link href="https://tulip.co/blog/state-detection-coffee-machine/">
              <b>iot machine learning development</b>
            </Link>
            . I began my career as a data scientist, building pricing/usage models and data engineering pipelines.
          </Typography>
        </Stack>
      </Box>
    </Page>
  );
};
