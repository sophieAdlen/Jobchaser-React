import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setJobs, setFilterTerm } from '../store/slices/jobSlice';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import Navigation from './Navbar';
import { Job } from '../types';

function JobList() {
  const dispatch = useDispatch();
  const { jobs, filterTerm } = useSelector((state: RootState) => state.jobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [filteredJobIds, setFilteredJobIds] = useState<number[]>([]); // 1. Tillstånd för filtrerade jobb-ID:er

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setJobs(data));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  useEffect(() => {
    const filteredIds = jobs
      .filter((job: Job) => 
        job.position.toLowerCase().includes(filterTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(filterTerm.toLowerCase()) ||
        job.level.toLowerCase().includes(filterTerm.toLowerCase()) ||
        job.languages.some(language => language.toLowerCase().includes(filterTerm.toLowerCase())) ||
        job.tools.some(tool => tool.toLowerCase().includes(filterTerm.toLowerCase()))
      )
      .map(job => job.id); // Hämta endast jobb-ID:er för filtrerade jobb
    setFilteredJobIds(filteredIds); // Uppdatera tillståndet med de filtrerade jobb-ID:erna
  }, [jobs, filterTerm]);

  const handleSearch = (term: string) => {
    dispatch(setFilterTerm(term));
  };

  const handleMoreInfoClick = (job: Job) => {
    setSelectedJob(job);
    setShowPopup(true);
    document.body.classList.add('popup-open');
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove('popup-open');
  };

  return (
    <>
     <Navigation isOpen={undefined} setIsOpen={undefined} />
     <h1 className="flex justify-center m-10 text-4xl font-extrabold lg:text-6xl">Job <span className="text-extraBlue">Search</span></h1>
      <SearchBar onSearch={handleSearch} />
      <Buttons />
      <main className="flex justify-center">
      <ul className="flex justify-center flex-wrap gap-10 m-10 max-w-800" style={{ width: "1600px" }}>
        {jobs
          .filter(job => filteredJobIds.includes(job.id)) // 2. Filtrera jobb baserat på filtrerade jobb-ID:er
          .map(job => (
            <li key={job.id} className="jobCards bg-[#ffffffc3] flex flex-col items-center gap-6 border-solid border-2 border-extraBlue p-2 max-w-87 rounded-lg relative" style={{ maxWidth: "22rem", width: '100%' }} tabIndex={0} aria-label={`job ad for ${job.company}`}>
            <img className="Cardlogo w-28 rounded-full mt-4" src={`./src/assets/${job.logo}`} alt="" />
        <div className="flex flex-col justify-center items-center mt-3">
          <h2 className="cardPosition text-2xl font-bold">{job.position}</h2>
          <p className="text-2xl ">{job.company}</p>
          <p className="text-xl">{job.location}</p>
        </div>
        <div className="info-section flex gap-0 mt-18">
          <p className="text-l mx-2 bg-mainBlue rounded-lg p-2">{job.role}</p>
          <p className="text-l mx-2 bg-mainBlue rounded-lg p-2 ">{job.contract}</p>
          <p className="text-l mx-2 bg-mainBlue rounded-lg p-2 ">{job.level}</p>
        </div>
        <div className="tag-section flex gap-0 mt-18">
          {job.languages.map((languages, index) => (
            <p className="text-sm mx-2 border-solid border-2 border-extraBlue rounded-lg p-2" key={index}>{languages} </p>
          ))}
          {job.tools.map((tools, index) => (
            <p className="text-sm mx-2 border-solid border-2 border-extraBlue rounded-lg p-2" key={index}>{tools} </p>
          ))}
        </div>
        <p className="absolute top-0 right-0 text-s m-2">{job.postedAt}</p>
            <p className="more-info-btn mb-2 flex text-l"><button onClick={() => handleMoreInfoClick(job)}>More info</button></p>
          </li>
            ))}
        </ul>
      </main>
      {showPopup && (
        <div className="popup">
          <button className="close-btn absolute top-0 right-0 " onClick={closePopup}>Close</button>
          <div className="popup-content">
            <h2 className='text-2xl mb-8'>Job Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
            Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
            ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
            natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
            ipsum porro, reprehenderit accusamus?
            </p>
            <br />
             <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
            Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
            ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
            natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
            ipsum porro, reprehenderit accusamus?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
            Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
            ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
            natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
            ipsum porro, reprehenderit accusamus?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
            Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
            ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
            natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
            ipsum porro, reprehenderit accusamus?
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default JobList;

// const searchedJobs = jobData

//    .filter((job: Job) => job.position.toLowerCase().includes(search.toLowerCase()) || job.role.toLowerCase().includes(search.toLowerCase()) || job.level.toLowerCase().includes(search.toLowerCase()) || job.languages.join().toLowerCase().includes(search.toLowerCase()) || job.tools.join().toLowerCase())

//    .filter((job: Job) => jobFilter.every((tag) => job.languages.includes(tag)) || jobFilter.every((tag) => job.tools.includes(tag)))



// const searchedJobs = jobData

//    .filter((job: Job) =>     du måste ha en array som returneras



// import React, { useState, useEffect } from 'react';
// import Navigation from './Navbar';

// import SearchBar from './SearchBar';
// import Buttons from './buttons';

// type Job ={
//   id: number;
//   position: string;
//   company: string;
//   location: string;
//   role: string;
//   contract: string;
//   level: string;
//   languages: string[];
//   tools: string[];
//   postedAt: string;
//   logo: string;
// }

// function JobList() {
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [jobs, setJobs] = useState<Job[]>([]); 
//   const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

//   useEffect(() => {
//     // Fetch data from JSON file
//     fetch("./data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setJobs(data); 
//         setFilteredJobs(data); 
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);



//   // Funktion för att hantera sökningen
//   const handleSearch = (term) => {
//     const filtered = jobs.filter((job) =>
//       Object.values(job).some(
//         (value) =>
//           typeof value === "string" &&
//           value.toLowerCase().includes(term.toLowerCase())
//       )
//     );
//     setFilteredJobs(filtered); // Uppdatera filtrerade jobblistan
//   };

//   const handleMoreInfoClick = (job) => {
//     setSelectedJob(job);
//     setShowPopup(true);
//     document.body.classList.add('popup-open');
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     document.body.classList.add('popup-open');
//   };

//   useEffect(() => {
//     return () => {
//       document.body.classList.remove('popup-open');
//     };
//   }, []);

//   return (
//     <>
//     <Navigation isOpen={undefined} setIsOpen={undefined} />
//     <h1 className=" flex justify-center m-10 text-4xl font-extrabold lg:text-6xl">Job <span className="text-extraBlue">Search</span></h1>
//     <SearchBar onSearch={handleSearch} /> 
//     <Buttons />
//     <main className="flex justify-center">
//       <ul className="flex justify-center flex-wrap gap-10 m-10 max-w-800 " style={{ width: "1600px" }}>
//         {filteredJobs.map((job) => (
//           <li
//             key={job.id}
//             className="jobCards bg-[#ffffffc3] flex flex-col items-center gap-6 border-solid border-2 border-extraBlue p-2 max-w-87 rounded-lg relative" 
//             style={{ maxWidth: "22rem", width: '100%' }}
//             tabIndex={0} aria-label={`job ad for ${job.company}`}
//           >
//             <img className="Cardlogo w-28 rounded-full mt-4" src={`./src/assets/${job.logo}`} alt="" />
//             <div className="flex flex-col justify-center items-center mt-3">
//               <h2 className="cardPosition text-2xl font-bold">{job.position}</h2>
//               <p className="text-2xl ">{job.company}</p>
//               <p className="text-xl">{job.location}</p>
//             </div>
//             <div className="info-section flex gap-0 mt-18">
//               <p className="text-l mx-2 bg-mainBlue rounded-lg p-2">{job.role}</p>
//               <p className="text-l mx-2 bg-mainBlue rounded-lg p-2 ">{job.contract}</p>
//               <p className="text-l mx-2 bg-mainBlue rounded-lg p-2 ">{job.level}</p>
//             </div>
//             <div className="tag-section flex gap-0 mt-18">
//               {job.languages.map((languages, index) => (
//                 <p className="text-sm mx-2 border-solid border-2 border-extraBlue rounded-lg p-2" key={index}>{languages} </p>
//               ))}
//               {job.tools.map((tools, index) => (
//                 <p className="text-sm mx-2 border-solid border-2 border-extraBlue rounded-lg p-2" key={index}>{tools} </p>
//               ))}
//             </div>
//             <p className="absolute top-0 right-0 text-s m-2">{job.postedAt}</p>
//             <p className="more-info-btn mb-2 flex text-l"><button onClick={() => handleMoreInfoClick(job)}>More info</button></p>
//           </li>
//         ))}
//       </ul>
      
//       {/* Popup rutan */}
//       {showPopup && (
//         <div className="popup">
//             <button className="close-btn absolute top-0 right-0 " onClick={closePopup}>Close</button>
//           <div className="popup-content">
//            <h2 className='text-2xl mb-8'>Job Description</h2>
//            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
//             Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
//             ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
//             natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
//             ipsum porro, reprehenderit accusamus?
//             </p>
//             <br />
//              <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
//             Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
//             ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
//             natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
//             ipsum porro, reprehenderit accusamus?

//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
//             Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
//             ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
//             natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
//             ipsum porro, reprehenderit accusamus?
//             <br />
//             <br />
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam natus accusamus! 
//             Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi, 
//             ipsum porro, reprehenderit accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
//             natus accusamus! Corrupti dolore molestiae rerum perferendis in veritatis sapiente alias facilis unde culpa placeat modi,
//             ipsum porro, reprehenderit accusamus?
//             </p>
//           </div>
//         </div>
//       )}
//    </main>
//       </>
//   );
// }

// export default JobList;
