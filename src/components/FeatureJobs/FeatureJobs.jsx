import React, { useContext, useState } from 'react';
import { jobDataContext } from '../Home/Home';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeatureJobs = () => {
    const [showMore, setShowMore] = useState(false);
    const jobData = useContext(jobDataContext || [])
    return (
        <div className='my-container'>
            <h1 className='text-4xl font-bold text-center mb-4'>Featured Jobs</h1>
            <p className='text-center text-slate-600 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    !showMore
                        ?
                        jobData.slice(0, 4).map(singleFeatureJob => <SingleFeatureJob
                            key={singleFeatureJob.id}
                            singleFeatureJob={singleFeatureJob}
                        />)
                        :
                        jobData.map(singleFeatureJob => <SingleFeatureJob
                            key={singleFeatureJob.id}
                            singleFeatureJob={singleFeatureJob}
                        />)
                }
            </div>
            <div className='text-center mt-4 mb-4'>
            <button
                className={`btn-primary px-5 py-8 ${showMore && "hidden"}`}
                onClick={() => setShowMore(!showMore)}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;