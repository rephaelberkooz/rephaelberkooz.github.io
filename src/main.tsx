import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { THEME } from "./theme.tsx";
import { About, Error, Home, Resume } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  { path: "/about-me", element: <About /> },
  { path: "/resume", element: <Resume /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
