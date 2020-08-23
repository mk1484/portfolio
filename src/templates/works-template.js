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

export default ({ data, location, pageContext }) => (
    <Layout>
        <SEO
            pagetitle="works"
            pagedesc="作品詳細"
            pagepath={location.pathname}
        />
        <div className="header-fixed-pb">
            <section className="content works bloglist">
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
                <ul className="pagenation">
                    {!pageContext.isFirst && (
                    <li className="prev">
                        <Link
                            to={
                                pageContext.currentPage === 2
                                ? `/works/`
                                : `/works/${pageContext.currentPage - 1}`
                            }
                            rel="prev"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <span>前のページ</span>
                        </Link>
                    </li>
                    )}
                    {!pageContext.isLast && (
                    <li className="next">
                        <Link to={`/works/${pageContext.currentPage + 1}/`} rel="next">
                            <span>次のページ</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
        </section>
        </div>
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
