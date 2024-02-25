import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { THEME } from "../src/theme";
import { About } from "../src/about-me/About";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("about-me")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Routes>
          <Route path="/about-me" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
