import React from 'react';

const SingleCatagory = ({ catagory }) => {
    return (
        <div className='border p-6 lg:p-10 rounded-md'>
            <img src={catagory.categoryLogo} alt="" />
            <h3 className='text-xl font-bold mt-4'>{catagory.categoryName}</h3>
            <p className='text-slate-400 mt-4'>{catagory.jobsAvailable}+ Job Available</p>
        </div>
    );
};

export default SingleCatagory;