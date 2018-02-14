import React from 'react';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='container'>
                <span className='text-muted'>{props.text}</span>
            </div>
        </footer>
    )
}

export default Footer;