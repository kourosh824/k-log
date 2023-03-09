import { getImage } from "gatsby-plugin-image";
import React from "react";
import * as authPageStyles from '../styles/author.module.css';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage } from 'gatsby-plugin-image';
import PageHead from "../components/PageHead";
import Header from '../components/Header';

const AuthorPage = (props) => {
    const pic = getImage(props.pageContext.image);
    
    return (
        <div className={authPageStyles.authorPageContainer}>
            <PageHead pageTitle={ props.pageContext.fullName } />
            <Header
            title={props.pageContext.fullName} />
            <div
            className={authPageStyles.authorPageBody}>
                <GatsbyImage 
                image={pic}
                className={authPageStyles.authorPageImage} />
                <div
                className={authPageStyles.authorPageContent}>
                    <p
                    className={authPageStyles.authorPageText}>
                        {documentToReactComponents(
                            JSON.parse(
                                props.pageContext.biography.raw
                                )
                            )}
                    </p>
                </div>
            </div>
        </div>
    );
} 

export default AuthorPage;