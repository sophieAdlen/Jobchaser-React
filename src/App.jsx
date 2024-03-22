import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import HomePage from "./components/Pages/HomePage";
import JobList from "./components/JobList";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/Contactpage";
import LoginPage from "./components/Pages/LoginPage";
import SignupPage from "./components/Pages/SignupPage";


import "./App.css";



function App() {


  function ProtectedRoute() {

    const isAuthenticated = true

    console.log("isAuthenticated", isAuthenticated);

    return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />;
  }


  return (

    <BrowserRouter>
   
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/jobs" element={<ProtectedRoute />}>
      <Route path="/jobs" element={<JobList/>} />
    </Route>
  </Routes>
</BrowserRouter>
)
  }


export default App;






{/* <main className="flex justify-center">


{/* <SearchBar onSearch={handleSearch} />{" "} */}
{/* <JobList jobs={filteredJobs} />{" "}
Skicka filtrerade jobblistan som prop */}

