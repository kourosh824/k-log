import { Link } from 'gatsby';
import React from 'react';
import * as headerStyles from '../styles/header.module.css';

const Header = (props) => {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.headerContent}>
                {props.isArticle && 
                <Link
                to="../../"
                className={headerStyles.headerBack}>
                    <h1>⟵</h1>
                </Link>}
                <h1 className={headerStyles.headerTitle}>
                    {props.title}
                </h1>
            </div>
        </div>
    );
}

export default Header;