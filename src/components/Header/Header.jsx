import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className='hidden px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:flex justify-between items-center header-css'>
                <div>
                    <Link to="/">
                        <h1 className='text-[#9873FF] text-3xl font-bold'>getJobs</h1>
                    </Link>
                </div>
                <div className=''>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blogs">Blogs</ActiveLink>
                </div>
                <Link to="/applied-jobs">
                    <button className='btn-primary px-7 py-4'>Start Applying</button>
                </Link>
            </nav>

            {/* Mobile responsive Nabbar part  */}

            <nav className={`w-full mx-auto header-css p-4 relative md:hidden z-10`}>

                {/* Hamburber Menu  */}

                <div className='flex justify-between px-4 mx-auto'>
                    <h2 className='text-[#9873FF] text-2xl font-bold'>getJobs</h2>
                    {
                        isMenuOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                    }

                </div>

                {/* Mobile Device part  */}


                <div className={`font-bold transform duration-500 absolute w-full ${isMenuOpen ? "top-14 right-0" : "-top-96 right-0"}`}>
                    <ul className="bg-[#eeebf4] text-center">
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-purple-300 duration-200 py-4'>
                            <ActiveLink to="/statistics">Statistics</ActiveLink>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-purple-300 duration-200 py-4'>
                            <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-purple-300 duration-200 py-4'>
                            <ActiveLink to="blogs">Blogs</ActiveLink>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-purple-300 duration-200 py-4'>
                            <ActiveLink to="contact">Contact</ActiveLink>
                        </li>
                        <li className='flex gap-3 justify-center items-center py-4'>
                            <Link to="/applied-jobs">
                                <button onClick={() => setIsMenuOpen(false)} className='p-4 btn-primary'>Start Applying</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;