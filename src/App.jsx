
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navbar";
import Header from "./components/header";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/footer";
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
 
  return (
    // <div className="app" data-theme="dark" />
    <>
    <Header />
      <SearchBar onSearch={handleSearch} />{" "}
      {/* Skicka handleSearch-funktionen som prop */}
      <main className="flex justify-center">
        <JobList jobs={filteredJobs} />{" "}
        {/* Skicka filtrerade jobblistan som prop */}
      </main>
      <Footer />
      </>
  );
}

export default App;
