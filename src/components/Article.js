import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as artStyles from '../styles/article.module.css';
import { Link } from 'gatsby';

const Article = ( {title, image, body} ) => {
    const pic = getImage(image);
    const url = title.toLowerCase().replace(/ /g, '-');
    return (
        <Link
        to={`/articles/${url}`}
        class={artStyles.articleContainer} >
            <h2 class={artStyles.articleTitle}>{title}</h2>
            <GatsbyImage image={pic} class={artStyles.articleImage} />
        </Link>
    );
}

export default Article;