import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "activeNav mx-3"
                    : "text-slate-600 mx-3"

            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;