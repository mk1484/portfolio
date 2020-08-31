import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import {Link} from "gatsby";

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
                                        <p>大学ではグラフィックデザインを学び、卒業後は別の職種に就きながら、
                                            webスクールに通いwebデザインの勉強をしwebデザイナーとして活動してきました！<br /><br />

                                            デザインを通してもっと人の役に立つことをやっていきたいと思い、
                                            個人でもお仕事を受けながら日々成長のためチャレンジを続けています。<br /><br />

                                            ■使用可能技術<br />
                                            HTML5 / CSS3 / Sass / Vue.js / Git / Photoshop / Illustrator / XD / Figma / AfterEffect</p>
                                    </div>
                                    <div className="about-link">
                                        <div className="default-btn">
                                            <span><a href="https://github.com/mk1484">Github</a></span>
                                        </div>
                                        <div className="default-btn">
                                            <span><a href="https://mn1021.hatenablog.com/">Blog</a></span>
                                        </div>
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
                                    <p>
                                        デザイナーとして日々新たなことを学び、チャレンジし、成長し続けたいと考えております。<br />
                                        これまで携わってきたUIデザインを通して、ユーザーに価値を届けられるサービスを育てていきたいと思っております。<br /><br />
                                        現在、一緒に働かせて頂ける東京の会社さまを探しております！
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </Layout>
    </div>
  )
