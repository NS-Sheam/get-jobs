import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
export const jobDataContext = createContext([]);
export const AppliedJobContext = createContext([]);
const Layout = () => {
    const jobData = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);

    return (
        <div>
            <jobDataContext.Provider value={jobData}>
                <AppliedJobContext.Provider value={[appliedJob, setAppliedJob]}>
                    <Header />
                    <Outlet />
                </AppliedJobContext.Provider>
            </jobDataContext.Provider>
        </div>
    );
};

export default Layout;