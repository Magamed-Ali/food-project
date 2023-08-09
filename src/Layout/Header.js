import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <nav className="cyan green lighten-1">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">React Food</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/node1">Repo1</Link></li>
                        <li><Link to="/node2">Repo2</Link></li>
                        <li><Link to="/node3">Repo3</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;