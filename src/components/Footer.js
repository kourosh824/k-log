import React from 'react';
import { useState } from 'react';
import * as footerStyles from '../styles/footer.module.css';
import { Link } from 'gatsby';

const Footer = (props) => {
    const words = [
        'Maybe try clicking me?',
        'Made with ❤️ by kourosh824',
        'As of now it is 12:32pm...',
        'I kinda enjoy doing this :)',
        'I asked yiannisha for help lmao',
        'Maybe I should study more though 0-0',
        'All right why the heck are you still here?',
        'You wanna leave or something?',
        'Bro do something with your life lmao'
    ];
    const [text, setText] = useState([0, words[0]]);
    return (
        <footer className={footerStyles.footer}>
            <div
            className={footerStyles.footerContent}
            onClick={
                () => {
                    setText([
                        (text[0] + 1) % words.length,
                        words[text[0]]
                    ]);
                }
            }>
                {text[1]}
            </div>
        </footer>
    );
}

export default Footer;