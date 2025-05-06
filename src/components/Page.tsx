import { Box, Container, ContainerProps } from "@mui/material";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

interface PageProps extends ContainerProps {
  children: React.ReactNode;
  centerContent?: boolean;
}

export const Page = ({ children, centerContent = false, ...containerProps }: PageProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <NavBar />
      <Container 
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          px: { xs: 2, sm: 3 },
        }} 
        {...containerProps}
      >
        <Box
          sx={{
            maxWidth: "1024px",
            margin: "0 auto",
            width: "100%",
            paddingTop: { xs: "10vh", sm: "15vh" },
            display: "flex",
            flexDirection: "column",
            ...(centerContent && {
              alignItems: "center",
              justifyContent: "flex-start",
            }),
          }}
        >
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}; 