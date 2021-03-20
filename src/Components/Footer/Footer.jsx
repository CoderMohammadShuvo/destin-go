import React from 'react';
import "./Footer.css"

const Footer = () => {
    let today=new Date();
    let thisYear=today.getFullYear();
    return (
        <div className="copyright-div">
            <small className="copyright">Copyright © {thisYear} All Rights Reserved</small>
        </div>
    );
};

export default Footer;