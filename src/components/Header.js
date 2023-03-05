import React from 'react';
import * as headerStyles from '../styles/header.module.css';

const Header = () => {
    return (
        <div class={headerStyles.header}>
            <h1>
                K-LOG: a blog powered by Gatsby 🚀
            </h1>
        </div>
    );
}

export default Header;