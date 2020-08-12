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
            <section>
                <div className="container">
                    <h2 className="sr-only">Works</h2>
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
                                    <h3>{node.title}</h3>
                                </Link>
                            </article>
                        ))}
                    </div>
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
      limit: 4
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
