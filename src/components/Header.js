import { Link } from 'gatsby';
import React from 'react';
import * as headerStyles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.headerContent}>
                <h1 className={headerStyles.headerTitle}>
                    K-LOG: a blog powered by Gatsby 🚀
                </h1>
            </div>
        </div>
    );
}

export default Header;