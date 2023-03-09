import * as React from "react";
import Header from '../components/Header';
import * as styles from '../styles/main.module.css';

const IndexPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Header 
            title="About" />
            <div
            className={styles.aboutPageContainer}>
                <p
                className={styles.aboutPageText}>
                    This is a personal project I made while learning React and Gatsby. The goal was to create a system that would allow you publish your own articles in a really basic blog using Contentful CMS.
                </p>
            </div>
        </div>
    );
}

export default IndexPage

export const Head = () => <title>K-LOG</title>
