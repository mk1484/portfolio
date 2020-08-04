import React from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faClock, faFolderOpen
} from "@fortawesome/free-regular-svg-icons"
import {
    faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons"


export default ({ data }) =>(
    <div>
        <SEO />
        <Layout>
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
                    <h1 className="bar">{data.contentfulWorksPost.title}</h1>
                    <aside className="info">
                        <time dateTime={data.contentfulWorksPost.publishDate}>
                            <FontAwesomeIcon icon={faClock} />{data.contentfulWorksPost.publishDateJP}</time>
                        <div className="cat">
                            <FontAwesomeIcon icon={faFolderOpen} />
                            <ul>
                                <li className={data.contentfulWorksPost.category.categorySlug} key={data.contentfulWorksPost.category.id}>
                                    {data.contentfulWorksPost.category.category}
                                    </li>
                            </ul>
                        </div>
                    </aside>
                    <div className="postbody">
                        <p>
                            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                        </p>
                    </div>
                    <ul className="postlink">
                        <li className="prev">
                            <a href="base-blogpost.html" rel="prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <span>前の記事</span>
                            </a>
                        </li>
                        <li className="next">
                            <a href="base-blogpost.html" rel="next">
                                <span>次の記事</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </Layout>
    </div>
)

export const query = graphql`
    query {
        contentfulWorksPost {
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
       }
     }
`
