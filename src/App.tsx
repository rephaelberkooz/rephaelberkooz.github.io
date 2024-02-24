import "./App.css";
import React from "react";

import { Box, Typography } from "@mui/material";

import { Route, Routes } from "react-router";
import { NavBar } from "./components";

const Home = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Typography variant="h3">Rephael Berkooz</Typography>
        <Typography variant="h5" alignContent={"center"}>
          Experienced Full-Stack Software Engineer
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

const ErrorPage = () => {
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
