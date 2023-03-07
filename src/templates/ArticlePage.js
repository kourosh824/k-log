import { getImage } from "gatsby-plugin-image";
import React from "react";
import * as artPageStyles from '../styles/articlePage.module.css';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage } from 'gatsby-plugin-image';
import PageHead from "../components/PageHead";
import Header from '../components/Header';

const ArticlePage = (props) => {
    const pic = getImage(props.pageContext.image);
    
    return (
        <div className={artPageStyles.articlePageContainer}>
            <PageHead pageTitle={ props.pageContext.title } />
            <Header
            title={props.pageContext.title}
            isArticle />
            <GatsbyImage 
            image={pic}
            className={artPageStyles.articlePageImage} />
            <div
            className={artPageStyles.articlePageMeta}>
                <p>
                    {props.pageContext.publicationDate.substring(0, 10).replace(/-/g, '/')}
                </p>
                <p>
                {props.pageContext.author.fullName.toUpperCase()}
                </p>
            </div>
            <p
            className={artPageStyles.articlePageBody}>
                {documentToReactComponents(
                    JSON.parse(
                        props.pageContext.body.raw
                        )
                    )}
            </p>
        </div>
    );
} 

export default ArticlePage;