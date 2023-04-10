import React, { useContext } from 'react';
import { jobDataContext } from '../Home/Home';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeatureJobs = () => {
    const jobData = useContext(jobDataContext || [])
    return (
        <div className='my-container'>
            <h1 className='text-4xl font-bold text-center mb-4'>Featured Jobs</h1>
            <p className='text-center text-slate-600 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    jobData.map(singleFeatureJob => <SingleFeatureJob 
                        key={singleFeatureJob.id} 
                        singleFeatureJob={singleFeatureJob}
                        />)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;