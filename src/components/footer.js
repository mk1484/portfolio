import React from "react"
import { Link } from "gatsby"

import Logo from "../../public/images/logo-w.svg"

export default () => (
    <footer className="footer">
        <div className="container">
            <div className="site">
                <Link to={`/`}>
                    <img src={ Logo } />
                </Link>
            </div>
        </div>
    </footer>
)
