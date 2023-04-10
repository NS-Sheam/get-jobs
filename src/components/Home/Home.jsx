import React, { createContext, useState } from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import { useLoaderData } from 'react-router-dom';
export const jobDataContext = createContext([]);
const Home = () => {
    const jobData = useLoaderData();
    return (
        <div className=''>
            <jobDataContext.Provider value={jobData}>
                <Banner />
                <Catagories />
                <FeatureJobs />
            </jobDataContext.Provider>
        </div>
    );
};

export default Home;