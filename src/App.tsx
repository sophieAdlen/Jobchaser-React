import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage";
import JobList from "./components/JobList"
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/Contactpage";
import LoginPage from "./components/Pages/LoginPage";
import SignupPage from './components/Pages/SignupPage';
import { AuthContext } from './Context/Authcontext';
import Footer from './components/Footer';
import { useContext } from 'react';

import "./App.css";
import React from 'react';

function ProtectedRoute({ element }) {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;

  return isAuthenticated ? element : <Navigate to="/signup" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobList />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
