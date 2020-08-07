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
}
