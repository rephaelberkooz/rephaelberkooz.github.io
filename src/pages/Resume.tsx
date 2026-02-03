import { Calculate, Code, Computer, School, Science } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import { Page } from "../components/Page";
import { Position } from "../components";

export const Resume = () => {
  return (
    <Page>
      <Stack
        spacing={3}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "text.secondary" }}
          />
        }
      >
        <Stack spacing={1}>
          <Typography variant="h6" color="text.primary">
            Employment
          </Typography>
          <Position
            title="Senior AI Engineer"
            company="Proofpoint"
            dateRange="September 2025 - Present"
            description="AI systems for financial and legal compliance"
            bulletPoints={[
            ]}
            bulletIcon={<Code color="primary" />}
          />
          <Position
            title="Software Engineer"
            company="Podium"
            dateRange="August 2024 - April 2025"
            description="Cloud platform for AI customer communication. Backed by YCombinator, Google Ventures, Accel, IVP"
            bulletPoints={[
              "Technologies: LangChain, LangGraph, FastAPI, Kafka, Redis, Kubernetes, Gitlab, Elasticsearch, SQL (Postgres, pgVector), Python"
            ]}
            bulletIcon={<Computer color="primary" />}
          />
          <Position
            title="Software Engineer, Data Scientist"
            company="Tulip Interfaces"
            dateRange="June 2021 - August 2024"
            description="IoT and cloud platform for manufacturing data and operations. Backed by E14 Fund, Vertex Ventures, DMG MORI, Insight Partners, TIME Ventures"
            bulletPoints={[
              "Technologies: MLFlow, MLServer, Scikit-Learn, Prophet/NeuralProphet, ONNX, Airflow, AWS Redshift, Typescript (Node.js, React), MongoDB, Go, RabbitMQ"
            ]}
            bulletIcon={<Calculate color="primary" />}
          />
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h6" color="text.primary">
            Education
          </Typography>
          <Position
            company="The College of Wooster"
            dateRange="August 2017 - May 2021"
            description="B.A. Mathematics - Cum Laude, Minor in Computer Science"
            bulletPoints={[
            ]}
            bulletIcon={<School color="primary" />}
          />
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h6" color="text.primary">
            Projects
          </Typography>
          <Position
            title="Music Recommendation with Wavelet Analysis"
            company="Mathematics Thesis"
            dateRange="2021"
            description="Novel recommendation algorithm for music based on cognitive perception"
            bulletPoints={[
              "Developed feature extraction methodology with signal processing and wavelet analysis",
              "Implemented basic signal processing library with Python/Numpy (filtering, convolutions, wavelet transforms)"
            ]}
            bulletIcon={<Science color="primary" />}
          />
          <Position
            title="Methods for Hearing Augmentation"
            company="MIT Media Lab Collaboration"
            dateRange="2024"
            description="Research collaboration developing accessibility device for augmenting human hearing"
            bulletPoints={[
              "Creating neural network architecture for understanding localization capacity of different sound signals",
              "Developing novel signal transformation methods to quantify and characterize human sound perception",
              "Utilized symbolic regression to translate engineered features into models"
            ]}
            bulletIcon={<Science color="primary" />}
          />
        </Stack>
      </Stack>
    </Page>
  );
};
