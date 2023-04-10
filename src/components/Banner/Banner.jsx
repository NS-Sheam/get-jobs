import React from 'react';
import bannerImage from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Banner = () => {
    return (
        <section className='header-css md:flex lg:items-end w-full px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='py-4 md:py-8 lg:py-16 md:w-1/2'>
                <h1 className='text-2xl md:text-4xl lg:text-7xl font-semibold mb-4'>
                    One Step Closer To Your <p className='text-[#9873FF]'>Dream Job</p>
                </h1>
                <p className='lg:text-xl mb-4'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn-primary px-7 py-4 mb-4'>Get Started</button>
            </div>
            <div className='md:w-1/2'>
                <img className='' src={bannerImage} alt="" />
            </div>

        </section>
    );
};

export default Banner;