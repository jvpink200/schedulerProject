import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="mx-auto">
                        <ul>
                            <li><Link to='/about' className="text-white hover-orange">About</Link></li>
                            <li><Link to='/contact' className="text-white hover-orange">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;