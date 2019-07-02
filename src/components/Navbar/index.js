import React from 'react';
import { Link } from 'react-router-dom'; //using link tags to replace anchor tags. It changes path names without reloading whole pages
import './style.css'

function Navbar(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        Puppy Love
                    </Link>
                </div>
                <ul>
                    <li className={
                        window.location.pathname === "/" ||
                        window.location.pathname === "/about"
                            ? "acive"
                            : ""
                    }
                    >
                        <Link to="/">About</Link>
                    </li>
                    <li className={window.location.pathname === "/discover" ? "active" : ""}
                    >
                        <Link to="/discover">Discover</Link>
                    </li>
                    <li className={window.location.pathname === "/search" ? "active" : ""}>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;