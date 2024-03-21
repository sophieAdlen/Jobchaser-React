import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/Contactpage";

import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/SignupPage";
import SignupPage from "./components/Pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/signUp",
    element: <SignupPage />
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
