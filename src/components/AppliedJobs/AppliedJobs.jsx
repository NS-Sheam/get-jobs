import React, { useContext, useState } from 'react';
import { AppliedJobContext } from '../Layout/Layout';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';
import vectoor from "../../assets/All Images/Vector.png"
import vectoor1 from "../../assets/All Images/Vector-1.png"

const AppliedJobs = () => {
    const [isFilter, setIsFilter] = useState(false);
    const appliedJobsFromLoader = useLoaderData();
    return (
        <>
            <img className='absolute right-0 top-0 w-52 lg:w-fit' src={vectoor1} alt="" />
            <div className='pb-24 pt-24 header-css relative'>
                <h1 className='text-xl lg:text-4xl font-bold text-center'>Applied Jobs</h1>
                <img className='absolute left-0 bottom-0 w-52 lg:w-fit' src={vectoor} alt="" />
            </div>
            <div className='p-6 lg:p-10 relative mt-6 my-container'>
                <div className='flex justify-end'>
                    <div className='inline-flex p-3 bg-slate-300 rounded-md justify-around items-center mb-10 absolute -top-0'>
                        <ul className='font-semibold text-center'>
                            <li onClick={() => setIsFilter(!isFilter)} className='cursor-pointer flex'>
                                Filte By
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isFilter ? "hidden" : "block"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${!isFilter ? "hidden" : "block"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>

                            </li>
                            <hr className={`mt-2 border-slate-800 ${isFilter ? "block" : "hidden"}`} />
                            <li className={`mb-2 mt-2 ${isFilter ? "block" : "hidden"}`}>Remote</li>
                            <hr className={`border-slate-800 ${isFilter ? "block" : "hidden"}`} />
                            <li className={`mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>Onsite</li>
                            <hr className={`${isFilter ? "block" : "hidden"}`} />
                        </ul>
                    </div>
                </div>

                <div>
                    {
                        appliedJobsFromLoader.map(job => <SingleAppliedJob
                            key={job.id}
                            job={job} />)
                    }
                </div>
            </div></>
    );
};

export default AppliedJobs;