import { Link } from 'gatsby';
import React from 'react';
import { useState } from 'react';
import * as headerStyles from '../styles/header.module.css';
import Sidebar from './Sidebar';

const Header = (props) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const sidebarActivate = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <>
            <div className={headerStyles.header}>
                <div className={headerStyles.headerContent}>
                    {props.isArticle && 
                    <Link
                    to="../../"
                    className={headerStyles.headerBack}>
                        <div>⟵</div>
                    </Link>}
                    <div className={!props.isRocket && headerStyles.headerTitle}>
                        {props.title}&nbsp;
                    </div>
                    {props.isRocket && 
                    <div className={headerStyles.headerRocket}>
                        🚀
                    </div>}
                    <div
                    onClick={sidebarActivate}
                    className={headerStyles.headerSidebar}>
                        <div>⬡</div>
                    </div>
                </div>
            </div>
            {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
        </>
    );
}

export default Header;