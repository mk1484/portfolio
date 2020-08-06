const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const worksresult = await graphql(`
    query {
        allContentfulWorksPost(sort: {fields: publishDate, order: DESC}) {
      nodes {
        id
        slug
      }
    }     
   }
 `)
    if (worksresult.errors) {
        reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
        return
    }
}
