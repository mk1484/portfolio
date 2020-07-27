import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () =>(
    <div>
        <SEO />
        <Layout>
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
            <section className="about-skills">
                <div className="container">
                    <h2>Skills</h2>
                    <div className="details">
                        <div className="detail">
                            <figure>
                                <img src="images/1.jpg" alt="" />
                            </figure>
                            <h3>Skill1</h3>
                            <p>スキルの説明。<br />スキルの説明スキルの説明。</p>
                        </div>
                        <div className="detail">
                            <figure>
                                <img src="images/1.jpg" alt="" />
                            </figure>
                            <h3>Skill2</h3>
                            <p>スキルの説明。<br />スキルの説明スキルの説明。</p>
                        </div>
                        <div className="detail">
                            <figure>
                                <img src="images/1.jpg" alt="" />
                            </figure>
                            <h3>Skill3</h3>
                            <p>スキルの説明。<br />スキルの説明スキルの説明。</p>
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
                            <figure>
                                <img src="images/1.jpg" alt="" />
                            </figure>
                            <p>texttexttexttext<br />texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </div>
  )
