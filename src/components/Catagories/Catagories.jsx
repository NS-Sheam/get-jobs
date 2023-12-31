import React, { useEffect, useState } from 'react';
import SingleCatagory from '../singleCatagory/SingleCatagory';

const Catagories = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch("jobCatagory.json")
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className='my-container'>
            <h1 className='text-4xl font-bold text-center mb-4'>Job Catagory List</h1>
            <p className='text-center text-slate-600 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-container'>
                {
                    catagories.map(catagory => <SingleCatagory
                        key={catagory.categoryName}
                        catagory={catagory} />)
                }
            </div>
        </div>
    );
};

export default Catagories;