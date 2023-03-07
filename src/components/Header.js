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
                    <div>⟵</div>
                </Link>}
                <div className={!props.isRocket && headerStyles.headerTitle}>
                    {props.title}&nbsp;
                </div>
                {props.isRocket && 
                <div className={headerStyles.headerRocket}>
                    🚀
                </div>}
            </div>
        </div>
    );
}

export default Header;