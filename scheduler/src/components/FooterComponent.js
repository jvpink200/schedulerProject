import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="mx-auto">
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;