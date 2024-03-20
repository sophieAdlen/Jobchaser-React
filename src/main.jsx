import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/Contactpage";
import RegisterForm from "./components/RegsterForm";
import LoginForm from "./components/LoginForm";

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
    element: <RegisterForm />
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
