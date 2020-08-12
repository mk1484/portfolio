import React from "react"
import { Link } from "gatsby"

export default () => (
    <header className="header">
        <div className="container">
            <div className="site">
                <Link to={`/`}>
                    <img src="images/logo.svg" alt="" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to={`/about/`}>About</Link></li>
                    <li><Link to={`/works/`}>Works</Link></li>
                    <li><Link to={`/contact/`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)
