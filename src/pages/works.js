import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({ data, location }) => (
    <Layout>
        <SEO
            pagetitle="works"
            pagedesc="作品詳細"
            pagepath={location.pathname}
        />
        <section className="content bloglist">
            <div className="container">
                <h1 className="bar">Works</h1>
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
