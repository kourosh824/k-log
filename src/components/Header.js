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
                <h1 className={!props.isRocket && headerStyles.headerTitle}>
                    {props.title}&nbsp;
                </h1>
                {props.isRocket && 
                <h1 className={headerStyles.headerRocket}>
                    🚀
                </h1>}
            </div>
        </div>
    );
}

export default Header;