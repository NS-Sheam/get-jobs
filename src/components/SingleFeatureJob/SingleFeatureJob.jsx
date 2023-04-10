import React from 'react';
import locationIcon from "../../assets/Icons/Location Icon.png"
import salaryIcon from "../../assets/Icons/Frame-1.png"

const SingleFeatureJob = ({ singleFeatureJob }) => {
    const { id, jobTitle, companyLogo, companyName, jobCategory, location, salary, timePeriod } = singleFeatureJob;
    console.log(singleFeatureJob);
    return (
        <div>
            <div className='border p-6 lg:p-10 rounded-md'>
                <img src={companyLogo} alt="" />
                <h3 className='text-xl font-bold mt-4'>{jobTitle}</h3>
                <p className='text-slate-600 font-semibold mt-4 mb-4'>{companyName}</p>
                <button className='btn-outlined px-5 py-4 mr-7 text-[#9873FF] font-semibold'>{jobCategory}</button>
                <button className='btn-outlined px-5 py-4 text-[#9873FF] font-semibold'>{timePeriod}</button>
                <div className='lg:flex items-center justify-center lg:justify-between mt-4'>
                    <div className='flex justify-start lg:justify-between gap-3 items-center text-slate-600 font-semibold'>
                        <img src={locationIcon} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex justify-start lg:justify-between gap-3 items-center text-slate-600 font-semibold '>
                        <img src={salaryIcon} alt="" />
                        <p>Salary: {salary}</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureJob;