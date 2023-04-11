import React, { useState } from 'react';

const AppliedJobs = () => {
    const [isFilter, setIsFilter] = useState(false);
    return (
        <div>
            <div className='inline-flex p-4 bg-slate-400'>
                <ul className='w-14 font-semibold text-center'>
                    <li onClick={()=>setIsFilter(!isFilter)} className='cursor-pointer mb-4'>Filter</li>
                    <hr />
                    <li className={`mb-2 mt-2 ${isFilter? "block" : "hidden"}`}>Remote</li>
                    <hr />
                    <li className={`mt-2 mb-2 ${isFilter? "block" : "hidden"}`}>Onsite</li>
                    <hr />
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