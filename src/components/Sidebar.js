import React from "react";
import { useState } from "react";
import { Link } from 'gatsby';
import * as sidebarStyles from '../styles/sidebar.module.css';

const Sidebar = ( {setShowSidebar} ) => {
    
    return (
        <div
        className={sidebarStyles.sidebarContainer}>
            <div
            className={sidebarStyles.sidebarClose}
            onClick={() => setShowSidebar(false)}>
                ×
            </div>
            <Link
            to='../..'
            className={sidebarStyles.sidebarOption}>Home</Link>
            <Link
            to='../about'
            className={sidebarStyles.sidebarOption}>About</Link>
            <a
            target="_blank"
            href='https://be.contentful.com/login'
            className={sidebarStyles.sidebarOption}>Admin</a>
        </div>
    );
}

export default Sidebar;