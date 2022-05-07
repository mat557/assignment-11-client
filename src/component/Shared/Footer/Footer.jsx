import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const present = date.getFullYear();
    return (
        <footer className='footer-class'>
            <p className='pt-3'><small>copyright @{present}</small></p>
        </footer>
    );
};

export default Footer;