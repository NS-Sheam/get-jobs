import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
                    <Toaster
                        toastOptions={{
                            style: {
                                border: '1px solid #9873FF',
                                padding: '16px',
                                color: '#9873FF',
                                fontWeight: 600,
                                backgroundColor: "white"
                            },
                        }} />
                </AppliedJobContext.Provider>
            </jobDataContext.Provider>
        </div>
    );
};

export default Layout;