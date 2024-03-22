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
  const [jobs, setJobs] = useState([]); // State för alla jobb
  const [filteredJobs, setFilteredJobs] = useState([]); // State för filtrerade jobb

  useEffect(() => {
    // Fetch data from JSON file
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data); // Uppdatera alla jobb från JSON-filen
        setFilteredJobs(data); // Initialt visas alla jobb
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Funktion för att hantera sökningen
  const handleSearch = (term) => {
    const filtered = jobs.filter((job) =>
      Object.values(job).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredJobs(filtered); // Uppdatera filtrerade jobblistan
  };

  function ProtectedRoute() {

    const isAuthenticated = false

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
      <Route path="/jobs" element={<JobList jobs={filteredJobs} />} />
    </Route>
  </Routes>
</BrowserRouter>
)
  }

  
export default App;

// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/about" element={<AboutPage />} />
//   <Route path="/contact" element={<ContactPage />} />
//   <Route path="/signup" element={<SignupPage />} />
//   <Route path="/login" element={<LoginPage />} />
//   <Route path="/jobs" element={<ProtectedRoute />}>
//   <Route path="/jobs" element={<Jobs />} />
//   </Roue>
// </Routes>
// </BrowserRouter>




{/* <main className="flex justify-center">
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/signup" element={<SignupPage />} />
  <Route path="/login" element={<LoginPage />} />
  {/* Använd ProtectedRoute direkt som en rutt */}
  {/* <ProtectedRoute path="/jobs" element={<JobList jobs={filteredJobs} />} /> */}
// </Routes>
// </main> */}

{/* <SearchBar onSearch={handleSearch} />{" "} */}
{/* <JobList jobs={filteredJobs} />{" "}
Skicka filtrerade jobblistan som prop */}


// {
// path: "/contact",
// element: <ContactPage />
// },
// {
// path: "/signUp",
// element: <SignupPage />
// },
// {
// path: "/login",
// element: <LoginPage/>
// },