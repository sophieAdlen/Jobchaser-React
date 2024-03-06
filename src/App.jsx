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
      <main className="mx-auto max-w-screen-lg">
        <SearchBar />
        <JobList jobs={jobs} />
      </main>
    </>
  );
}

export default App;


// mx-auto: Centrerar elementet horisontellt genom att använda margin-left: auto; och margin-right: auto;.
// my-4: Lägger till en margin på 4 REM både på toppen och botten av elementet.
// text-4xl: Sätter textstorleken till 4 REM.
// font-extrabold: Sätter texten till fetstil (extrabold).
// text-center: Centrerar texten horisontellt inom dess föräldreelement.
// md:text-5xl: Sätter textstorleken till 5 REM för medium skärmstorlekar och större.
// lg:text-6xl: Sätter textstorleken till 6 REM för stora skärmstorlekar och större.
// För <main>-elementet:

// mx-auto: Centrerar elementet horisontellt genom att använda margin-left: auto; och margin-right: auto;.
// max-w-screen-lg: Sätter en maxbredd på 1000 px för elementet för att begränsa bredden på större skärmar.