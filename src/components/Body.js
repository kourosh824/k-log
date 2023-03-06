import React from 'react';
import useArticlesData from '../hooks/useArticlesData.js';
import Article from './Article.js';
import * as bodyStyles from '../styles/body.module.css';
import { isMobile } from 'react-device-detect';

const Body = () => {
    const art = useArticlesData().map(
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

    const max = 3;
    const artRows = [];

    if(!isMobile) {
        const numRows = Math.floor(art.length / max);
        const rowRem = art.length % max;

        for(let i = 0; i < numRows; i++) {
            artRows.push(
                <div
                key={i}
                className={bodyStyles.row}
                >
                    {!isMobile && <div className={bodyStyles.rowBackground}></div>}
                    {art.slice(i * max, (i + 1) * max)}
                </div>
            )
        }

        if(rowRem > 0) {
            artRows.push(
                <div
                key={artRows.length}
                className={bodyStyles.row}
                >
                    {!isMobile && <div className={bodyStyles.rowBackground}></div>}
                    {art.slice(art.length - (art.length % max), art.length)}
                </div>
            )
        }
    }
        
    return (
        <div className={bodyStyles.body}>
            {(isMobile) ? art:artRows}
        </div>
    );
}

export default Body;