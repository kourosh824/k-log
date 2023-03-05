import * as React from "react";
import Body from "../components/Body";
import Header from '../components/Header';
import * as styles from '../styles/main.module.css';

const IndexPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Header 
            title="K-LOG: a blog powered by Gatsby 🚀"
            />
            <Body />
        </div>
    );
}

export default IndexPage

export const Head = () => <title>K-LOG</title>
