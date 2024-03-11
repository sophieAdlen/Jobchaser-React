import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("./data.json") // Hämta JSON-filen
      .then(response => response.json())// Konvertera svaret till JSON
      .then(data => setJobs(data)) // Uppdatera jobs med den hämtade datan
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div></div>
      <header className="bg-cyan-400 h-12"></header>

      <h1 className="mx-auto my-4 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl">
        JobChaser
      </h1>
      <SearchBar />

      <main className="flex justify-center">
        {/* 
         Renderar antingen JobList-komponenten om det finns jobbdata att visa, 
         eller så renderar den ett "No Data Found"-meddelande om det inte finns någon data.
        */}
        {jobs.length ? (
          <JobList jobs={jobs} />
        ) : (
          <p className="text-2xl text-center text-red-500 mt-10">No Data Found</p>
        )}
      </main>
    </>
  );
}

export default App;
