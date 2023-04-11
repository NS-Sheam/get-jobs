import React, { useContext, useEffect } from 'react';
import salaryIcon from "../../assets/Icons/Frame.png"
import jobTitleIcon from "../../assets/Icons/Frame.png"
import phoneIcon from "../../assets/Icons/Frame-2.png"
import emailIcon from "../../assets/Icons/Frame-3.png"
import addressIcon from "../../assets/Icons/Frame-4.png"
import { addToDb, getjobCart } from '../../utilities/fakeDb';
import { AppliedJobContext, jobDataContext } from '../Layout/Layout';

const JobDetailApplyCart = ({ jobDetail }) => {
    const { id, jobTitle, location, salary, timePeriod, contactInformation } = jobDetail;
    const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);
    const jobData = useContext(jobDataContext);
    // console.log(jobData);
    const handleApplyBtn = () => {
        const jobCart = getjobCart();
        let prevApplyJob = [];
        const exists = appliedJobs.find(job => job.contactInformation.phone === contactInformation.phone);
        if(!exists){
            prevApplyJob= [...appliedJobs, jobDetail]
        }
        else{
            const remaining = appliedJobs.filter(job => job.contactInformation.phone !== contactInformation.phone);
            prevApplyJob = [...remaining, exists];
        }

        setAppliedJobs(prevApplyJob);
        addToDb(contactInformation.phone);
    }
    return (
        <div className='w-1/2 lg:w-1/3 mx-auto'>
            <div className='mb-6 apply-cart p-7 '>
                <h2 className="textxl font-bold mb-4">Job details</h2>
                <hr className='border' />
                <div className='mt-2 flex justify-start gap-3 mb-4'>
                    <img src={salaryIcon} alt="" />
                    <p className='font-bold'>Salary: <span className='font-normal'>{salary}</span></p>
                </div>
                <div className='mb-8 flex justify-start gap-3'>
                    <img src={jobTitleIcon} alt="" />
                    <p className='font-bold'>Job Title: <span className='font-normal'>{jobTitle}</span></p>
                </div>
                <p className='font-bold mb-4 gap-3'>Contact Information: </p>
                <hr className='border' />
                <div className='mt-2 mb-4 flex justify-start gap-3'>
                    <img src={phoneIcon} alt="" />
                    <p className='font-bold'>Phone: <span className='font-normal'>{contactInformation.phone}</span></p>
                </div>
                <div className='mt-2 mb-4 flex justify-start gap-3'>
                    <img src={emailIcon} alt="" />
                    <p className='font-bold'>Email: <span className='font-normal'>{contactInformation.email}</span></p>
                </div>
                <div className='mt-2 mb-4 flex justify-start gap-3'>
                    <img src={addressIcon} alt="" />
                    <p className='font-bold'>Adress: <span className='font-normal'>{location}</span></p>
                </div>
            </div>
            <button onClick={() => handleApplyBtn(id)} className='btn-primary w-full rounded-md py-5'>Apply Now</button>
        </div>
    );
};

export default JobDetailApplyCart;