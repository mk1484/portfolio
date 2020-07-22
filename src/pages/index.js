import React from "react"

import SEO from "../components/seo"

export default () =>(
    <div>
        <SEO />
        <header className="header">
            <div className="container">
                <div className="site">
                    <a href="base-index.html">
                        <img src="images/logo.svg" alt="" />
                    </a>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="base-about.html">About</a></li>
                        <li><a href="base-works.html">Works</a></li>
                        <li><a href="base-works.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section className="main">
            <div className="container">
            <figure>
                <img src="/images/main.jpg" alt="" />
            </figure>
            </div>
        </section>
        <section className="catch">
            <div className="container">
                <h1>Ishibashi</h1>
                <p>web designer</p>
            </div>
        </section>
        <section className="about">
            <div className="container">
                <h2>About</h2>
                <div className="details">
                    <div className="detail">
                        <figure>
                            <img src="images/1.jpg" alt="" />
                        </figure>
                        <p>texttexttexttext<br />texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="works">
            <div className="container">
                <h2>Works</h2>
                <div className="details">
                    <div className="detail">
                        <img src="images/1.jpg" alt="" />
                    </div>
                    <div className="detail">
                        <img src="images/2.jpg" alt="" />
                    </div>
                    <div className="detail">
                        <img src="images/3.jpg" alt="" />
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <img src="images/1.jpg" alt="" />
                    </div>
                    <div className="detail">
                        <img src="images/2.jpg" alt="" />
                    </div>
                    <div className="detail">
                        <img src="images/3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
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
    </div>
  )
