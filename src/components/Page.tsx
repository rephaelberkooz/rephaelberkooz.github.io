import { Container, ContainerProps } from "@mui/material";
import { NavBar } from "./NavBar";

interface PageProps extends ContainerProps {
  children: React.ReactNode;
}

export const Page = ({ children, ...containerProps }: PageProps) => {
  return (
    <Container maxWidth={false} {...containerProps}>
      <NavBar />
      {children}
    </Container>
  );
}; 