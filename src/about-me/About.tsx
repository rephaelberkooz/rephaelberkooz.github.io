import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { NavBar } from "../components";
import { Resume } from "../pages";

export const About = () => {
  return (
    <Container maxWidth={false} sx={{ overflowY: "scroll" }}>
      <NavBar />
      <Stack spacing={24}>
        <Stack
          direction={"row"}
          maxWidth={"1024px"}
          justifyContent="space-between"
        >
          <Stack spacing={2}>
            {/* <Typography variant="h5">My Bio</Typography> */}
            <Typography variant="body1">
              I work as a software engineer at&nbsp;
              <Link href={"https://tulip.co"}>
                <b>Tulip Interfaces</b>
              </Link>
              , a series C startup out of the MIT Media Lab. My work centers on
              creating technology for data insights in manufacturing and
              operations. This includes full-stack development of an
              enterprise&nbsp;
              <Link href={"https://tulip.co/platform/analytics/"}>
                <b>data querying and visualization platform</b>
              </Link>
              , in addition to the underlying data systems. I've contributed to
              a number of other projects at Tulip, including product usage data
              science/engineering and&nbsp;
              <Link href="https://tulip.co/blog/state-detection-coffee-machine/">
                <b>iot machine learning development</b>
              </Link>
              .
            </Typography>
            <Typography variant="body1">
              Outside of Tulip, I am working on a&nbsp;
              <Link href="https://github.com/rephaelberkooz/HRTF-Research">
                <b>project</b>
              </Link>
              &nbsp;utilizing signal processing methods to better understand
              auditory cognition. Additionally, I am learning Rust for use in a
              smart-home iot project.
            </Typography>
          </Stack>
          <Box paddingLeft={10}>
            <img
              width={"220px"}
              src={"/photo.jpg?w=161&fit=crop&auto=format"}
              alt={"Rephael - New Years 2024"}
              loading="lazy"
            />
          </Box>
        </Stack>
        <Resume />
      </Stack>
    </Container>
  );
};
