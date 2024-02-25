import { Calculate, Computer, MenuBook } from "@mui/icons-material";
import { Container, Divider, Stack, Typography, useTheme } from "@mui/material";

import { Position } from "../components";

export const Resume = () => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth={false} disableGutters={true}>
        <Stack
          spacing={2}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              color={theme.palette.text.secondary}
            />
          }
          maxWidth="1024px"
        >
          <Stack spacing={1}>
            <Typography variant="h6">Employment History</Typography>
            <Position
              title="Software Engineer, Data Scientist"
              company="Tulip Interfaces"
              dateRange="June 2021 - Present"
              description="Series C startup from MIT - an IoT and cloud platform for
                manufacturing data and operations."
              bulletPoints={[
                "Analytics Team. Past member of Machine Learning Group and Labs Data Science",
              ]}
              bulletIcon={<Computer color="primary" />}
            />
            <Position
              title="Research Assistant, Consultant"
              company="Wooster Community Hospital"
              dateRange="May 2020 - August 2020"
              description="Mid-size regional hospital in Wayne County, OH"
              bulletPoints={[
                "Utilized regression methods and survival analysis to evaluate health and economic impacts of hospital programs",
                "Assembled and analyzed sensitive medical data sets using Pandas and the NIH API",
              ]}
              bulletIcon={<Calculate color="primary" />}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="h6">Education</Typography>
            <Position
              company="The College of Wooster"
              dateRange="August 2017 - May 2021"
              description="B.A. Mathematics - Cum Laude, Minor in Computer Science"
              bulletPoints={[
                "Teaching Assistant for Differential Equations, Combinatorics and Graph Theory",
                "Graduated Cum Laude with mathematics departmental honors, member of Pi Mu Mathematics Honors Society",
                "Programming Coursework: Data Structures & Algorithms, Machine Learning, Operating Systems, Databases",
                "Data Science Coursework: Regression Analysis, Operations Research, Combinatorics & Graph Theory, Probability Theory",
                "Senior thesis in mathematics: utilized wavelet analysis for signal decomposition and feature extraction, created novel cognition-inspired music recommendation alogrithm",
              ]}
              bulletIcon={<MenuBook color="primary" />}
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
