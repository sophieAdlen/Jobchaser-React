import React, { useState, useEffect } from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';

function JobList() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
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

  const handleMoreInfoClick = (job) => {
    setSelectedJob(job);
    setShowPopup(true);
    document.body.classList.add('popup-open');
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.add('popup-open');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('popup-open');
    };
  }, []);

  return (
    <>
    <Navigation />
    <SearchBar onSearch={handleSearch} /> 
    <main className="flex justify-center">
      <ul className="flex justify-center flex-wrap gap-10 m-10 max-w-800 " style={{ width: "1600px" }}>
        {filteredJobs.map((job) => (
          <li
            key={job.id}
            className="jobCards bg-[#ffffffc3] flex flex-col items-center gap-6 border-solid border-2 border-extraBlue p-2 max-w-87 rounded-lg relative" 
            style={{ maxWidth: "22rem", width: '100%' }}
            tabIndex={0} aria-label={`job ad for ${job.company}`}
          >
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
      
      {/* Popup rutan */}
      {showPopup && (
        <div className="popup">
            <button className="close-btn absolute top-0 right-0 " onClick={closePopup} aria-label={close}>Close</button>
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
   </main>
      <Footer/>
      </>
  );
}

export default JobList;
