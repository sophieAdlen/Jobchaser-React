import { jobs } from "./data";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-cyan-400 h-12"></header>

      <h1 className="mx-auto my-4 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl">
        JobChaser
      </h1>
      <SearchBar />

      <main className=" flex justify-center">
        <JobList jobs={jobs} />
      </main>
    </>
  );
}

export default App;
