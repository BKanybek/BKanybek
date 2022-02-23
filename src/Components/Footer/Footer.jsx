import React from 'react';
import logo from '../../Image/logoYellow.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="foote-logo">
                    <img src={logo}/>
                    <span>Community</span>
                </div>
                <div className='footer-list'>
                    <div>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;