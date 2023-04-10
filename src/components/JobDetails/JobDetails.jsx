import React from 'react';
import "./JobDetails.css"
import salaryIcon from "../../assets/Icons/Frame.png"
import jobTitleIcon from "../../assets/Icons/Frame.png"
import phoneIcon from "../../assets/Icons/Frame-2.png"
import emailIcon from "../../assets/Icons/Frame-3.png"
import addressIcon from "../../assets/Icons/Frame-4.png"

const JobDetails = () => {
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
                        </p>
                        <p className='mb-5'>
                            <span className='font-bold'>Job Responsibility: </span>
                        </p>
                        <p className='mb-5'>
                            <span className='font-bold mb-4'>Educational Requirements: </span>
                            <br />
                            <span>lasdfj</span>
                        </p>
                        <p className='md:mb-5'>
                            <span className='font-bold mb-4'>Experiences: </span>
                            <br />
                            <span>lasdfj</span>
                        </p>
                    </div>
                    <div className='md:w-1/3'>
                        <div className='mb-6 apply-cart p-7 '>
                            <h2 className="textxl font-bold mb-4">Job details</h2>
                            <hr className='border' />
                            <div className='mt-2 flex justify-start gap-3 mb-4'>
                                <img src={salaryIcon} alt="" />
                                <p className='font-bold'>Salary: <span className='font-normal'>lsadkfj</span></p>
                            </div>
                            <div className='mb-8 flex justify-start gap-3'>
                                <img src={jobTitleIcon} alt="" />
                                <p className='font-bold'>Job Title: <span className='font-normal'>lsadkfj</span></p>
                            </div>
                            <p className='font-bold mb-4 gap-3'>Contact Information: </p>
                            <hr className='border' />
                            <div className='mt-2 mb-4 flex justify-start gap-3'>
                                <img src={phoneIcon} alt="" />
                                <p className='font-bold'>Phone: <span className='font-normal'>lsadkfj</span></p>
                            </div>
                            <div className='mt-2 mb-4 flex justify-start gap-3'>
                                <img src={emailIcon} alt="" />
                                <p className='font-bold'>Email: <span className='font-normal'>lsadkfj</span></p>
                            </div>
                            <div className='mt-2 mb-4 flex justify-start gap-3'>
                                <img src={addressIcon} alt="" />
                                <p className='font-bold'>Adress: <span className='font-normal'>lsadkfj</span></p>
                            </div>
                        </div>
                        <button className='btn-primary w-full rounded-md py-5'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;