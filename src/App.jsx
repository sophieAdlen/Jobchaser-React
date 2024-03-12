// App.jsx
import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]); // State för alla jobb
  const [filteredJobs, setFilteredJobs] = useState([]); // State för filtrerade jobb
  const [searchTerm, setSearchTerm] = useState(""); // State för söktermen

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
    <>
      <header className="bg-cyan-400 h-12"></header>
      <h1 className="mx-auto my-4 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl">
        JobChaser
      </h1>
      <SearchBar onSearch={handleSearch} />{" "}
      {/* Skicka handleSearch-funktionen som prop */}
      <main className="flex justify-center">
        <JobList jobs={filteredJobs} />{" "}
        {/* Skicka filtrerade jobblistan som prop */}
      </main>
    </>
  );
}

export default App;
