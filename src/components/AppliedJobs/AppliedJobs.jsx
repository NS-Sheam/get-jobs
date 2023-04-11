import React, { useContext, useEffect, useState } from 'react';
import { AppliedJobContext } from '../Layout/Layout';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';
import vectoor from "../../assets/All Images/Vector.png"
import vectoor1 from "../../assets/All Images/Vector-1.png"

const AppliedJobs = () => {
    const [isFilter, setIsFilter] = useState(false);
    const appliedJobsFromLoader = useLoaderData();
    const [filterData, setFilterData] = useState(appliedJobsFromLoader);

    const handleFilter = (e) => {
        // Handle Filter function 
        const filter = appliedJobsFromLoader.filter(data => data.jobCategory.toLowerCase() === e.target.innerText.toLowerCase());
        setFilterData(filter);
    }
    const handleTimeFilter = (e) => {
        const filter = appliedJobsFromLoader.filter(data => data.timePeriod.toLowerCase() === e.target.innerText.toLowerCase());
        setFilterData(filter);
    }

    return (
        <>
            <img className='absolute right-0 top-0 w-52 lg:w-fit' src={vectoor1} alt="" />
            <div className='pb-24 pt-24 header-css relative'>
                <h1 className='text-xl lg:text-4xl font-bold text-center'>Applied Jobs</h1>
                <img className='absolute left-0 bottom-0 w-52 lg:w-fit' src={vectoor} alt="" />
            </div>

            {/* Filter search section  */}

            <div className='p-6 lg:p-10 relative mt-6 my-container'>
                <div className='flex justify-end'>
                    <div className='inline-flex p-3 bg-[#eeebf4] rounded-md justify-around items-center mb-10 absolute -top-0'>
                        <ul className='font-semibold text-center'>
                            <li onClick={() => setIsFilter(!isFilter)} className='cursor-pointer flex'>
                                Filter By
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isFilter ? "hidden" : "block"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${!isFilter ? "hidden" : "block"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>

                            </li>
                            <hr className={`mt-2 border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <li onClick={(e) => handleFilter(e)} className={`cursor-pointer mb-2 mt-2 ${isFilter ? "block" : "hidden"}`}>Remote</li>
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <li onClick={(e) => handleFilter(e)} className={`cursor-pointer mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>Onsite</li>
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <li onClick={(e) => handleTimeFilter(e)} className={`cursor-pointer mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>Full-time</li>
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <li onClick={(e) => handleTimeFilter(e)} className={`cursor-pointer mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>Full-time</li>
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <li onClick={(e) => handleTimeFilter(e)} className={`cursor-pointer mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>Part-time</li>
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                            <li onClick={() => setFilterData(appliedJobsFromLoader)} className={`cursor-pointer mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>All-jobs</li>
                            <hr className={`border-slate-300 ${isFilter ? "block" : "hidden"}`} />
                        </ul>
                    </div>
                </div>

                {/* single applied cart section */}

                <div>
                    {
                        filterData.map(job => <SingleAppliedJob
                            key={job.id}
                            job={job} />)
                    }
                </div>
            </div></>
    );
};

export default AppliedJobs;