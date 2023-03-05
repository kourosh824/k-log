import * as React from "react";
import Body from "../components/Body";
import Header from '../components/Header';
import * as styles from '../styles/main.module.css';

const IndexPage = () => {
    return (
        <div class={styles.mainContainer}>
            <Header />
            <Body />
        </div>
    );
}

export default IndexPage

export const Head = () => <title>K-LOG</title>
