import React from "react"
import { Link } from "gatsby"

import Logo from "../../public/images/logo.svg"

export default () => (
    <header className="header">
        <div className="container">
            <div className="site">
                <Link to={`/`}>
                    <img src={ Logo } alt="" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to={`/`}>Top</Link></li>
                    <li><Link to={`/about/`}>About</Link></li>
                    <li><Link to={`/works/`}>Works</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)
