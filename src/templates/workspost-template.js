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
    faChevronLeft,
    faChevronRight,
    faCheckSquare,
} from "@fortawesome/free-solid-svg-icons"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { BLOCKS } from "@contentful/rich-text-types"
const options = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2>
                <FontAwesomeIcon icon={faCheckSquare}/>
                {children}
            </h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <img
                src={node.data.target.fields.file["ja-JP"].url}
                alt={
                    node.data.target.fields.description
                        ? node.data.target.fields.description["ja-JP"]
                        : node.data.target.fields.title["ja-JP"]
                }
            />
        ),
    },
}

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
                            {documentToReactComponents(data.contentfulWorksPost.content.json,
                                options
                            )}
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
            json
         }
       }
     }
`
