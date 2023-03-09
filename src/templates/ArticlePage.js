import { getImage } from "gatsby-plugin-image";
import React from "react";
import * as artPageStyles from '../styles/articlePage.module.css';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage } from 'gatsby-plugin-image';
import PageHead from "../components/PageHead";
import Header from '../components/Header';
import { Link } from "gatsby";

const ArticlePage = (props) => {
    const pic = getImage(props.pageContext.image);
    const authorLink = `/authors/${props.pageContext.author.fullName.toLowerCase().replace(/[.]/g, '').replace(/ /g, '-')}`;

    return (
        <div className={artPageStyles.articlePageContainer}>
            <PageHead pageTitle={ props.pageContext.title } />
            <Header
            title={props.pageContext.title}
            isArticle />
            <div
            className={artPageStyles.articlePageBody}>
                <GatsbyImage 
                image={pic}
                className={artPageStyles.articlePageImage} />
                <div
                className={artPageStyles.articlePageContent}>
                    <div
                    className={artPageStyles.articlePageMeta}>
                        <p>
                            {props.pageContext.publicationDate.substring(0, 10).replace(/-/g, '/')}
                        </p>
                        <Link
                        to={authorLink}
                        className={artPageStyles.articlePageAuthorLink}>
                            {props.pageContext.author.fullName.toUpperCase()}
                        </Link>
                    </div>
                    <p
                    className={artPageStyles.articlePageText}>
                        {documentToReactComponents(
                            JSON.parse(
                                props.pageContext.body.raw
                                )
                            )}
                    </p>
                </div>
            </div>
        </div>
    );
} 

export default ArticlePage;