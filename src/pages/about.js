import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ location }) =>(
    <div>
        <Layout>
            <SEO
                pagetitle="about"
                pagedesc="自己紹介"
                pagepath={location.pathname}
            />
            <div className="header-fixed-pb">
                <section className="about">
                    <div className="container">
                        <h2>About</h2>
                        <div className="details">
                            <div className="detail">
                                <figure>
                                    <img src="../images/about.png" alt="" />
                                </figure>
                                <div className="introduction">
                                    <h3>Ishibashi</h3>
                                    <div>
                                        <p>UIデザインを中心としたwebデザインをしております。
                                            情報の整理を行い、分かりやすい情報設計を意識した制作を行っております。<br /><br />

                                            ■使用可能技術
                                            HTML5 / CSS3 / Sass / Vue.js / Git / Photoshop / Illustrator / XD / Figma / AfterEffect</p>
                                    </div>
                                    <div className="about-link">
                                        <div className="default-btn"><a href="https://github.com/mk1484">Github</a></div>
                                        <div className="default-btn"><a href="https://mn1021.hatenablog.com/">Blog</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="arrow_wrap">
                    <div className="arrow"></div>
                </div>
                <section className="about about-vision">
                        <div className="container">
                            <h2>Vision</h2>
                            <div className="details">
                                <div className="detail">
                                    {/*<figure>*/}
                                        {/*<img src="../images/1.jpg" alt="" />*/}
                                    {/*</figure>*/}
                                    <p>これまで携わってきたUIデザインを通して、ユーザーに価値を届けられるサービスを育てることを経験していきたいと思っております。</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </Layout>
    </div>
  )
