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
        <div class={artPageStyles.articlePageContainer}>
            <PageHead pageTitle={ props.pageContext.title } />
            <h1 class={artPageStyles.articlePageTitle}>{props.pageContext.title}</h1>
            <GatsbyImage image={pic} class={artPageStyles.articlePageImage} />
            <p class={artPageStyles.articlePageBody}>
                {documentToReactComponents(JSON.parse(props.pageContext.body.raw))}
            </p>
            <Link to="../../" class={artPageStyles.articlePageBack}>
                Back
            </Link>
        </div>
    );
} 

export default ArticlePage;