import React from "react"

import SEO from "../components/seo"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";

export default ({ data }) =>(
    <div>
        <SEO />
        <Layout>
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
                            <div>Ishibashi</div>
                            <div>
                            <p>文章文章文章文章文章文章文章文章文章文章文章文章。<br/>
                                文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章。 <br />
                                文章文章文章文章文章文章文章文章文章文章文章。</p>
                            </div>
                            <div className="default-btn"><Link to={`/about/`}>view more</Link></div>
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
                                            style={{ height: "100%" }}
                                        />
                                    </figure>
                                    {/*<h3>{node.title}</h3>*/}
                                </Link>
                            </article>
                        ))}
                    </div>
                    <div className="default-btn"><Link to={`/about/`}>view more</Link></div>
                </div>
            </section>
        </Layout>
    </div>
  )

export const query = graphql`
query {
    allContentfulWorksPost(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 9
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
