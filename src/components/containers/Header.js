import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">

            <nav className="navbar navbar-static-top" role="navigation">
                <div className="navbar-left">
                    <ul className="nav navbar-nav">
                        <li className="notifications-menu">
                            <Link to="/home" style={{color: 'white', background: '#303030'} } className="logo" >
                                Aajha ko Samachar
                            </Link>
                        </li>
                        <li className="notifications-menu">
                            <Link to="/home">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="notifications-menu">
                            <Link to="/aboutUs">
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li className="notifications-menu">
                            <Link to="/post">
                                <span>Post</span>
                            </Link>
                        </li>
                        <li className="notifications-menu">
                            <Link to="/blog">
                                <span>Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;