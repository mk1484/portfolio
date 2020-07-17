import React from "react"

const hello = "こんにちは"

export default () =>(
    <div>
        <header className="header">
            <div className="container">
                <div className="site">
                    <a href="base-index.html">
                        <img src="images/logo.svg" alt="" />
                    </a>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="base-index.html">TOP</a></li>
                        <li><a href="base-about.html">ABOUT</a></li>
                        <li><a href="base-works.html">WORKS</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section className="hero">
            <figure>
                <img src="images/main.jpg" alt="" />
            </figure>
            <div className="catch">
                <h1>texttexttext<br />texttexttext</h1>
                <p>texttexttexttexttexttexttexttexttexttext</p>
            </div>
            <div className="wave">
                <img src="images/wave.svg" alt="" />
            </div>
        </section>
        <section className="food">
            <div className="container">
                <h2 className="bar">About<span>About</span></h2>
                <div className="details">
                    <div className="detail">
                        <figure>
                            <img src="images/1.jpg" alt="" />
                        </figure>
                        <h3>1</h3>
                        <p>text</p>
                        <p>texttexttexttext<br />texttexttexttexttexttext</p>
                    </div>
                    <div className="detail">
                        <figure>
                            <img src="images/2.jpg" alt="" />
                        </figure>
                        <h3>2</h3>
                        <p>text</p>
                        <p>texttexttexttext<br />texttexttexttexttexttext</p>
                    </div>
                    <div className="detail">
                        <figure>
                            <img src="images/3.jpg" alt="" />
                        </figure>
                        <h3>3</h3>
                        <p>text</p>
                        <p>texttexttexttext<br />texttexttexttexttexttext</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="photo">
            <h2 className="sr-only">Photo</h2>
            <figure>
                <img src="images/photo.jpg" alt="" />
            </figure>
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
