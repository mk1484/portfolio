import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

export default () =>(
    <div>
        <SEO />
        <Header />
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
        <Footer />
    </div>
  )
