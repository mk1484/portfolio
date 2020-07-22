import React from "react"

export default () => (
    <footer className="footer">
        <div className="container">
            <div className="site">
                <a href="base-index.html">
                    <img src="images/logo-w.svg" alt="" />
                    <p>portfolio</p>
                </a>
            </div>
            <ul className="sns">
                <li>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                        <span className="sr-only">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/">
                        <i className="fab fa-facebook-square" />
                        <span className="sr-only">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com/">
                        <i className="fab fa-instagram" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
)
