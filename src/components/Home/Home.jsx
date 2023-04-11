import React, { createContext, useState } from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
const Home = () => {
    return (
        <div className=''>
                <Banner />
                <Catagories />
                <FeatureJobs />
        </div>
    );
};

export default Home;