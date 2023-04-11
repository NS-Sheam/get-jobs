import React from 'react';
import locationIcon from "../../assets/Icons/Location Icon.png"
import salaryIcon from "../../assets/Icons/Frame.png"
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ job }) => {
    const { id, jobTitle, companyLogo, companyName, jobCategory, location, salary, timePeriod } = job;
    return (
        <div className='flex flex-col lg:flex-row gap-5 justify-between items-center border p-6 lg:p-10 rounded-md mt-5 mb-5'>
            <div className='w-32 lg:w-56 h-32 lg:h-56 bg-slate-200 flex justify-center items-center rounded-md p-4'>
                <img src={companyLogo} alt="" />
            </div>
            <div>
                <h3 className='text-xl font-bold mt-4'>{jobTitle}</h3>
                <p className='text-slate-600 font-semibold mt-4 mb-4'>{companyName}</p>
                <button className='btn-outlined px-5 py-4 mr-7 text-[#9873FF] font-semibold'>{jobCategory}</button>
                <button className='btn-outlined px-5 py-4 text-[#9873FF] font-semibold'>{timePeriod}</button>
                <div className='lg:flex gap-4 items-center justify-center lg:justify-between mt-4'>
                    <div className='flex justify-start lg:justify-between gap-3 items-center text-slate-600 font-semibold'>
                        <img src={locationIcon} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex justify-start lg:justify-between gap-3 items-center text-slate-600 font-semibold '>
                        <img src={salaryIcon} alt="" />
                        <p>Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/job-details/${id}`}>
                    <button className='btn-primary text-xl font-bold px-7 py-4 mt-4'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleAppliedJob;