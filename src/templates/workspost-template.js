import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faClock, faFolderOpen
} from "@fortawesome/free-regular-svg-icons"
import {
    faChevronLeft,
    faChevronRight,
    // faCheckSquare,
} from "@fortawesome/free-solid-svg-icons"

import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

//import { BLOCKS } from "@contentful/rich-text-types"
// const options = {
//     renderNode: {
//         [BLOCKS.HEADING_2]: (node, children) => (
//             <h2>
//                 <FontAwesomeIcon icon={faCheckSquare}/>
//                 {children}
//             </h2>
//         ),
//         [BLOCKS.EMBEDDED_ASSET]: node => (
//             <img
//                 src={node.data.target.fields.file["ja-JP"].url}
//                 alt={
//                     node.data.target.fields.description
//                         ? node.data.target.fields.description["ja-JP"]
//                         : node.data.target.fields.title["ja-JP"]
//                 }
//             />
//         ),
//     },
// }

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
