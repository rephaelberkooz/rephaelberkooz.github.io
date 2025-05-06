import { Calculate, Code, Computer, School, Science } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import { Page } from "../components/Page";
import { Position } from "../components";

export const Resume = () => {
  return (
    <Page>
      <Stack
        spacing={4}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "text.secondary" }}
          />
        }
      >
        <Stack spacing={2}>
          <Typography variant="h6" color="text.primary">
            Employment History
          </Typography>
          <Position
            title="Independent Contractor"
            company="Self-Employed"
            dateRange="May 2025 - Present"
            description="Independent software engineer, specialized in AI agentic systems and machine learning"
            bulletPoints={[
              "Implementing agentic systems, including real-time data processing and graph-based models",
              "Developing integrated data flows and information processing systems, providing real-time feedback and productivity from AI agents",
              "Industries: SaaS for sales, SaaS for business process management"
            ]}
            bulletIcon={<Code color="primary" />}
          />
          <Position
            title="Software Engineer"
            company="Podium"
            dateRange="August 2024 - April 2025"
            description="Cloud platform for AI customer communication. Backed by YCombinator, Google Ventures, Accel, IVP"
            bulletPoints={[
              "Engineering agent AI messaging systems, achieving 2x/second live communication with human customers",
              "Translated cutting-edge research papers (HumanEval, Tau Bench) into novel custom evaluation tools that benchmarked and guided safe AI Agent development",
              "Created hallucination detection and mitigation tools, resulting in 98% reduction in error cases (~50 daily errors => 1)",
              "Architected and lead development of human-in-the-loop AI information system: teaching AI agents to recognize gaps in information, reach out for help, and enabling Podium customers to guide and steer AI behaviors during uncertainty",
              "Created DevOps infrastructure for event-driven message systems, communicating between local and deployed Kafka and Kubernetes, reducing deployment time by over 90%",
              "Technologies: LangChain, LangGraph, FastAPI, Kafka, Redis, Kubernetes, Gitlab, Elasticsearch, SQL (Postgres, pgVector), Python"
            ]}
            bulletIcon={<Computer color="primary" />}
          />
          <Position
            title="Software Engineer, Data Scientist"
            company="Tulip Interfaces"
            dateRange="June 2021 - August 2024"
            description="Series C startup from MIT - an IoT and cloud platform for manufacturing data and operations. Backed by E14 Fund, Vertex Ventures, DMG MORI, Insight Partners, TIME Ventures"
            bulletPoints={[
              "Created statistical control toolkit for cloud analytics (fullstack), viewed 600+ times per day in factory operations",
              "Developed query language tools for manufacturing customers to query and visualize data",
              "Expanded ETL data pipelines for internal analytics to process 11M+ records daily",
              "Deployed ML microservice for forecasting and anomaly detection",
              "Architected and engineered RESTful HTTP microservice for managing NoSQL database",
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
              "Mathematics GPA: 3.8, Graduated with departmental honors",
              "Member of Pi Mu Epsilon Mathematics Honor Society",
              "Programming Coursework: Machine Learning, Operating Systems, Database Engineering, Data Structures & Algorithms",
              "Mathematics Coursework: Regression Analysis, Operations Research, Combinatorics & Graph Theory, Probability, Real Analysis, Algebra"
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
