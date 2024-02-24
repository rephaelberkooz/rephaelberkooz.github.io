import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
import { Route, Routes } from 'react-router';


const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <HomeIcon href={""}/>
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
          <Link href={""}>
            <Button color="info">Home</Button>
          </Link>
          <Link href={"about-me"}>
            <Button color="info">About Me</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

const Home = () => {
  return (
    <>
      <NavBar />
    </>
  )
}

const About = () => {
  return (
    <>
      <NavBar />
    </>
  )
}

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about-me" element={<About />} />
      </Routes>
    </>
  )
}

