import React from "react"

import SEO from "../components/seo"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";

export default ({ data }) =>(
    <div>
        <SEO />
        <Layout>
            <div className="header-fixed-pb">
                <section className="main">
                    <div className="container">
                    <figure>
                        <img src="/images/main.jpg" alt="" />
                    </figure>
                    </div>
                    <div className="catch">
                        <div className="container">
                            <h1>Ishibashi</h1>
                            <h3>web designer</h3>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <h2>About</h2>
                        <div className="details">
                            <div className="detail">
                                <figure>
                                    <img src="images/about.png" alt="" />
                                </figure>
                                <div className="introduction">
                                    <h3>Ishibashi</h3>
                                    <div>
                                        <p>UIデザインを中心としたwebデザインをしております。
                                            情報の整理を行い、分かりやすい情報設計を意識した制作を行っております。<br /><br />
                                        </p>
                                    </div>
                                    <div className="default-btn">
                                        <span><Link to={`/about/`}>view more</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="works">
                        <div className="container">
                            <h2>Works</h2>
                            <div className="posts">
                                {data.allContentfulWorksPost.edges.map(({ node }) => (
                                    <article className="post" key={node.id}>
                                        <Link to={`/works/post/${node.slug}/`}>
                                            <figure>
                                                <Img
                                                    fluid={node.eyecatch.fluid}
                                                    alt={node.eyecatch.description}
                                                />
                                            </figure>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                            <div className="default-btn">
                                <span><Link to={`/works/`}>view more</Link></span>
                            </div>
                        </div>
                    </section>
            </div>
        </Layout>
    </div>
  )

export const query = graphql`
query {
    allContentfulWorksPost(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 6
      ) {
        edges {
          node {
          title
          id
          slug
            eyecatch {
              fluid(maxWidth: 573) {
              ...GatsbyContentfulFluid_withWebp
              }
              description
            }
          }
        }
      }
   }
`
