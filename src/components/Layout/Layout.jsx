import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
export const AppliedJobContext = createContext([]);
const Layout = () => {
    const [appliedJob, setAppliedJob] = useState([]);

    return (
        <div>
            <AppliedJobContext.Provider value={[appliedJob, setAppliedJob]}>
                <Header />
                <Outlet />
            </AppliedJobContext.Provider>
        </div>
    );
};

export default Layout;