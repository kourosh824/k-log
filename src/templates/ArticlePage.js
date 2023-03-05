import { getImage } from "gatsby-plugin-image";
import React from "react";
import * as artPageStyles from '../styles/articlePage.module.css';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PageHead from "../components/PageHead";

const ArticlePage = (props) => {
    const pic = getImage(props.pageContext.image);
    return (
        <div className={artPageStyles.articlePageContainer}>
            <PageHead pageTitle={ props.pageContext.title } />
            <h1 className={artPageStyles.articlePageTitle}>{props.pageContext.title}</h1>
            <GatsbyImage image={pic} className={artPageStyles.articlePageImage} />
            <p className={artPageStyles.articlePageBody}>
                {documentToReactComponents(JSON.parse(props.pageContext.body.raw))}
            </p>
            <Link to="../../" className={artPageStyles.articlePageBack}>
                Back
            </Link>
        </div>
    );
} 

export default ArticlePage;