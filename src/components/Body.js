import React from 'react';
import useArticlesData from '../hooks/useArticlesData.js';
import Article from './Article.js';
import * as bodyStyles from '../styles/body.module.css';

const Body = () => {
    const articles = useArticlesData().map(
        (art) => {
            return (
                <Article
                title={art.title}
                image={art.image}
                body={art.body} 
                />
            );
        }
    );

    return (
        <div class={bodyStyles.body}>
            {articles}
        </div>
    );
}

export default Body;