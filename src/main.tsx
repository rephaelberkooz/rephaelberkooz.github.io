import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { THEME } from "./theme.tsx";
import { About, Home } from "./pages";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <Error />,
//   },
//   { path: "/about-me", element: <About /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
