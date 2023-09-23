import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job=>job.id===idInt)
    console.log(job)

    const handleApply = () =>{
        toast('it is sucessfull')
    }

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border col-span-3">
                    <p><span className="text-lg font-bold text-white">Job Description</span>: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                    <p><span className="text-lg font-bold text-white">Job Responsibility</span>
                   : Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>
                    <p><span className="text-lg font-bold text-white">Educational Requirements:</span></p>
                    <p>Bachelor degree to complete any reputational university.</p>
                </div>
                <div className="border bg-slate-100 text-black">
                <p>Job Details</p><hr />
            <button onClick={handleApply} className="btn btn-secondary w-full">Apply</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ViewDetails;