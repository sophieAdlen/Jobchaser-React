import App from "../App";

function JobList({ jobs }) {
  return (
    <ul className="flex justify-center flex-wrap gap-10 m-10">
    {jobs.map((job) => (
    <li
    key={job.id}
    className="flex flex-col justify-center items-center gap-6 border-solid border-2 border-gray-500 p-8 max-w-96 rounded-lg"
    style={{ width: '25rem', height: '30rem' }}

  >
        <img className="w-30 h-30 rounded-full" src={job.logo} alt="" />
        <div className="flex flex-col justify-center items-center mt-3">
          <h2 className=" text-2xl font-bold text-gray-800">{job.position}</h2>
          <p className="text-2xl text-gray-800 ">{job.company}</p>
          <p className="text-xl text-gray-800">{job.location}</p>
        </div>
        <div className="flex gap-0 mt-18 "> 
          <p className="text-l text-gray-800 mx-2 bg-cyan-400 p-2 rounded-lg">{job.role}</p>
          <p className="text-l text-gray-800 mx-2 bg-cyan-400 p-2 rounded-lg">{job.contract}</p>
          <p className="text-l text-gray-800 mx-2 bg-cyan-400 p-2 rounded-lg">{job.level}</p>
        </div>
        <p className="flex text-xl text-gray-800">{job.postedAt}</p>
      </li>
    ))}
  </ul>
  
  );
}

export default JobList;
