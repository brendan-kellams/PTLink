import React from 'react';
import {footer} from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


const PublicFooter = (props) => {
    return (
      <ParallaxProvider>
          <footer className='footer'>
            <Parallax
                  offsetYMax={60}
                  offsetYMin={-50} >
                <img className="footer-chars" src="/images/footer-chars.png" />
                <img className="mobile-footer-chars" src="/images/s_footer-char.png" />
            </Parallax>    
            <div className='contact-info'>
                <span className='text-muted'>{props.text}</span>
                {props.children}
            </div>
          </footer>
        
      </ParallaxProvider>
    )
}

export default PublicFooter;