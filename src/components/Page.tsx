import { Box, Container, ContainerProps } from "@mui/material";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

interface PageProps extends ContainerProps {
  children: React.ReactNode;
}

export const Page = ({ children, ...containerProps }: PageProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Container 
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          px: { xs: 2, sm: 3 },
        }} 
        {...containerProps}
      >
        {children}
        <Footer />
      </Container>
    </Box>
  );
}; 