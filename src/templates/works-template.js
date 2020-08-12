import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

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
                <ul className="pagenation">
                    <li className="prev">
                        <a href="base-blog.html" rel="prev">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <span>前のページ</span>
                        </a>
                    </li>
                    <li className="next">
                        <a href="base-blog.html" rel="next">
                            <span>次のページ</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
      allContentfulWorksPost(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
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
