import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between items-center'>
            <div>
                <Link to="/">
                    <h1 className='text-3xl font-bold'>getJobs</h1>
                </Link>
            </div>
            <div className=''>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </div>
            <div>
                <button className='btn-primary px-7 py-4'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;