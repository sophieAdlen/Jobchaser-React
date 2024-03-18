import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/Contactpage";

const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
