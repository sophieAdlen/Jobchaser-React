

function JobList({ jobs }) {
  return (
    <>
   
    <ul className="flex justify-center flex-wrap gap-10 m-10 max-w-800 "
    style={{ width: "1600px" }}
    >
      {jobs.map((job) => (
        <li
          key={job.id}
          className="flex flex-col  items-center gap-6 border-solid border-2 border-gray-500 p-2 max-w-96 rounded-lg"
          style={{ width: "25rem", height: "30rem" }}
        >
          <img className="w-40 h-40 rounded-full my-4" src={`./src/assets/${job.logo}`} alt="" />
          <div className="flex flex-col justify-center items-center mt-3">
            <h2 className=" text-2xl font-bold text-gray-800">
              {job.position}
            </h2>
            <p className="text-2xl text-gray-800 ">{job.company}</p>
            <p className="text-xl text-gray-800">{job.location}</p>
          </div>
          <div className="flex gap-0 mt-18 ">
            <p className="text-xl text-gray-800 mx-2 bg-cyan-400 rounded-lg p-2">
              {job.role}
            </p>
            <p className="text-xl text-gray-800 mx-2 bg-cyan-400 rounded-lg p-2 ">
              {job.contract}
            </p>
            <p className="text-xl text-gray-800 mx-2 bg-cyan-400 rounded-lg p-2 ">
              {job.level}
            </p>
          </div>
          <p className="flex text-xl text-gray-800">{job.postedAt}</p>
        </li>
      ))}
    </ul>
    </>
  );
}

export default JobList;
