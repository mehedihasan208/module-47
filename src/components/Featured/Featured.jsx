import { Link } from "react-router-dom";

const Featured = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} =job;
    return (
        <div className="border border-gray-50 p-5">
           <img src={logo} alt="" />
           <h4>{job_title}</h4>
           <p>{company_name}</p>
           <div className="flex gap-2">
            <button className="border border-sky-500 p-1">{remote_or_onsite}</button>
            <button  className="border border-sky-500 p-1">{job_type}</button>
           </div>
           <div className="flex gap-4">
            <p>{location}</p>
            <p>{salary}</p>
           </div>
           <Link to={`/job/${id}`}> <button className="rounded-md p-2 bg-purple-800">View Details</button></Link>
        </div>
    );
};

export default Featured;