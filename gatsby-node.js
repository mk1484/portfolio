const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const worksresult = await graphql(`
    query {
        allContentfulWorksPost(sort: { fields: publishDate, order: DESC }) {
            edges {
             node {
                id
                slug
             }
               next {
                 title
                 slug
               }
               previous {
                 title
                 slug
              }
            }
           }     
         }
    `)
    if (worksresult.errors) {
        reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
        return
    }
    worksresult.data.allContentfulWorksPost.edges.forEach(({ node,next,previous }) => {
        createPage({
            path: `/works/post/${node.slug}/`,
            component: path.resolve(`./src/templates/workspost-template.js`),
            context: {
                id: node.id,
                next,
                previous,
            },
        })
    })

    const worksPostsPerPage = 6 //1ページに表示する記事の数
    const worksPosts = worksresult.data.allContentfulWorksPost.edges.length //記事の総数
    const worksPages = Math.ceil(worksPosts / worksPostsPerPage) //記事一覧ページの総数

    Array.from({ length: worksPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/works/` : `/works/${i + 1}/`,
            component: path.resolve("./src/templates/works-template.js"),
        })
    })
}
