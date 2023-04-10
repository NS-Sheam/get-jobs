import React from 'react';
import "./JobDetails.css"
import { useLoaderData } from 'react-router-dom';
import JobDetailApplyCart from '../JobDetailApplyCart/JobDetailApplyCart';

const JobDetails = () => {
    const jobDetail = useLoaderData();
    const { jobDescription, jobResponsibility, companyLogo, companyName, jobCategory, educationalRequirements, experience } = jobDetail;
    return (
        <div>
            <div className='text-4xl font-bold text-center mb-4 header-css pt-4 pb-10'>
                <h1>Job Details</h1>
            </div>
            <div className='my-container'>
                <div className='md:flex justify-between'>
                    <div className='md:w-3/4 mb-5'>
                        <p className='mb-5'>
                            <span className='font-bold'>Job Description: </span>
                            <span>{jobDescription}</span>
                        </p>
                        <p className='mb-5'>
                            <span className='font-bold'>Job Responsibility: </span>
                            <span>{jobResponsibility}</span>
                        </p>
                        <p className='mb-5'>
                            <span className='font-bold mb-4'>Educational Requirements: </span>
                            <br />
                            <span>{educationalRequirements}</span>
                        </p>
                        <p className='md:mb-5'>
                            <span className='font-bold mb-4'>Experiences: </span>
                            <br />
                            <span>{experience}</span>
                        </p>
                    </div>
                    <JobDetailApplyCart jobDetail={jobDetail} />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;