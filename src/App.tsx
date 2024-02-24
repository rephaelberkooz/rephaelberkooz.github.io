import "./App.css";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { Route, Routes } from "react-router";

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <HomeIcon href="/" />
        </IconButton>

        <Typography
          variant="h6"
          component="a"
          href="/"
          display="flex"
          fontFamily="monospace"
          fontWeight={700}
          color="white"
        >
          Rephael Berkooz
        </Typography>
        <Stack direction="row" flexGrow={1}>
          <Link href={"about-me"}>
            <Button color="info">About Me</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const Home = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Typography variant="h3">Rephael Berkooz</Typography>
        <Typography variant="h5" alignContent={"center"}>
          Experienced Full-Stack Software Engineer{" "}
        </Typography>
      </Box>
    </>
  );
};

const About = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about-me" element={<About />} />
      </Routes>
    </>
  );
};
