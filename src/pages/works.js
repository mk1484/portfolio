import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({data}) => (
    <Layout>
        <section className="content bloglist">
            <div className="container">
                <h1 className="bar">Works</h1>
                <div className="posts">
                    {data.allContentfulWorksPost.edges.map(({ node }) => (
                    <article className="post" key={node.id}>
                        <a href="base-blogpost.html">
                            <figure>
                                <Img
                                    fluid={node.eyecatch.fluid}
                                    alt={node.eyecatch.description}
                                    style={{ height: "100%" }}
                                />
                            </figure>
                            <h3>{node.title}</h3>
                        </a>
                    </article>
                    ))}
                </div>
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query {
      allContentfulWorksPost(sort: { order: DESC, fields: publishDate }) {
        edges {
          node {
          title
          id
            eyecatch {
              fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
              }
              description
            }
          }
        }
      }
    }
`
