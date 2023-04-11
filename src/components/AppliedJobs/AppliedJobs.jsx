import React, { useContext, useState } from 'react';
import { AppliedJobContext } from '../Layout/Layout';

const AppliedJobs = () => {
    const [isFilter, setIsFilter] = useState(false);
    const [appliedJob, setAppliedJob] = useContext(AppliedJobContext);
    return (
        <div>
            <div className='inline-flex p-3 bg-slate-300 rounded-md justify-around items-center'>
                <ul className='font-semibold text-center'>
                    <li onClick={() => setIsFilter(!isFilter)} className='cursor-pointer flex'>
                        Filte By
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isFilter ? "hidden" : "block"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${!isFilter ? "hidden" : "block"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>

                    </li>
                    <hr className={`mt-2 border-slate-800 ${isFilter ? "block" : "hidden"}`} />
                    <li className={`mb-2 mt-2 ${isFilter ? "block" : "hidden"}`}>Remote</li>
                    <hr className={`border-slate-800 ${isFilter ? "block" : "hidden"}`} />
                    <li className={`mt-2 mb-2 ${isFilter ? "block" : "hidden"}`}>Onsite</li>
                    <hr className={`${isFilter ? "block" : "hidden"}`} />
                </ul>
            </div>
            {/* creating jon cart item  */}
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default AppliedJobs;