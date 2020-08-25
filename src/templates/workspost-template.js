import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
   faFolderOpen
} from "@fortawesome/free-regular-svg-icons"
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

export default ({ data,pageContext,location }) =>(
    <div>
        <Layout>
            <SEO
                pagetitle={data.contentfulWorksPost.title}
                pagedesc={`${documentToPlainTextString(
                    data.contentfulWorksPost.content.json
                ).slice(0,70)}…`}
                pagepath={location.pathname}
            />
            <div className="header-fixed-pb">
                <article className="content">
                    <div className="container">
                        <h1 className="post-title">{data.contentfulWorksPost.title}</h1>
                        <aside className="info">
                            <div className="cat">
                                <FontAwesomeIcon icon={faFolderOpen} />
                                <ul>
                                    <li className={data.contentfulWorksPost.category.categorySlug} key={data.contentfulWorksPost.category.id}>
                                        <Link to={`/cat/${data.contentfulWorksPost.category.categorySlug}/`}>{data.contentfulWorksPost.category.category}</Link>
                                    </li>
                                </ul>
                            </div>
                            {console.log(data.contentfulWorksPost.category.categorySlug)}
                        </aside>
                    </div>
                </article>
                <div className="eyecatch">
                    <figure>
                        <Img
                            fluid={data.contentfulWorksPost.eyecatch.fluid}
                            alt={data.contentfulWorksPost.eyecatch.description}
                        />
                    </figure>
                </div>
                <article className="content">
                    <div className="container">
                        <article className="postbody" dangerouslySetInnerHTML={{__html: data.contentfulWorksPost.content.childMarkdownRemark.html}} >
                        </article>

                        <ul className="postlink">
                            {pageContext.next && (
                                <li className="prev">
                                    <Link to={`/works/post/${pageContext.next.slug}/`} rel="prev">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                        <span>{pageContext.next.title}</span>
                                    </Link>
                                </li>
                            )}
                            {pageContext.previous && (
                                <li className="next">
                                    <Link to={`/works/post/${pageContext.previous.slug}/`} rel="prev">
                                        <span>{pageContext.previous.title}</span>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </article>
            </div>
        </Layout>
    </div>
)

export const query = graphql`
    query($id: String!) {
        contentfulWorksPost(id: { eq: $id }) {
            title
            publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
            publishDate
         category {
          category
          categorySlug
          id
        }
        eyecatch {
          fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          },
          description
        }
        content {
          childMarkdownRemark {
            html
          }
        }
       }
     }
`
