import App from "../App";

function JobList({ jobs }) {
  return (
    <ul className="JobList">
      {jobs.map((job) => (
  <li
  key={job.id}
  className="flex flex-col justify-center items-center gap-6 py-5 px-0.75 border-solid border-2 mt-8 mb-8 p-8 w-full max-w-xl bg-white border border-gray-500 rounded-lg"
>
  <img className="w-12 h-12 rounded-full" src={job.logo} alt="" />
  <div className="flex flex-col justify-center items-center">
    <p className="div1 text-lg font-bold text-gray-800">{job.position}</p>
    <p className="text-sm text-gray-600 ">{job.company}</p>
    <p className="text-sm text-gray-600">{job.location}</p>
  </div>
  <div className="flex"> 
    <p className="text-sm text-gray-600 mx-8">{job.role}</p>
    <p className="text-sm text-gray-600 mx-8">{job.level}</p>
    <p className="text-sm text-gray-600 mx-8">{job.contract}</p>
    <p className="flex text-sm text-gray-600">{job.postedAt}</p>
  </div>
</li>

 
 
     
      ))}
    </ul>
  );
}

export default JobList;

 