import * as React from "react";
import Body from "../components/Body";
import Header from '../components/Header';
import * as styles from '../styles/main.module.css';
import Footer from '../components/Footer';

const IndexPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Header 
            title="K-LOG: a blog powered by Gatsby "
            isRocket />
            <Body />
            <Footer />
        </div>
    );
}

export default IndexPage

export const Head = () => <title>K-LOG</title>
