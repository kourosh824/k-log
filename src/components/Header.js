import React from 'react';
import * as headerStyles from '../styles/header.module.css';

const Header = () => {
    return (
        <div class={headerStyles.header}>
            <h1>
                k-log: a static blog generator
            </h1>
        </div>
    );
}

export default Header;