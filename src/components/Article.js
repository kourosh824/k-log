import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as artStyles from '../styles/article.module.css';
import { Link } from 'gatsby';

const Article = ( {title, image, body} ) => {
    const pic = getImage(image);
    const url = title.toLowerCase().replace(/ /g, '-');
    return (
        <div
        className={artStyles.articleContainer}>
            <Link
            to={`/articles/${url}`}
            className={artStyles.articleLink} >
                <h2
                className={artStyles.articleTitle}
                >
                    {title}
                </h2>
                <GatsbyImage
                image={pic}
                className={artStyles.articleImage} />
            </Link>
        </div>
    );
}

export default Article;