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
           allContentfulCategory {
              edges {
                node {
                  categorySlug
                  id
                  category
                  workspost {
                    title
                  }
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
                catid: node.id,
                id: node.id,
                next,
                previous,
            },
        })
    })

    //記事一覧ページの設定
    const worksPostsPerPage = 6 //1ページに表示する記事の数
    const worksPosts = worksresult.data.allContentfulWorksPost.edges.length //記事の総数
    const worksPages = Math.ceil(worksPosts / worksPostsPerPage) //記事一覧ページの総数

    Array.from({ length: worksPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/works/` : `/works/${i + 1}/`,
            component: path.resolve("./src/templates/works-template.js"),
            context: {
                skip: worksPostsPerPage * i,
                limit: worksPostsPerPage,
                currentPage: i + 1, //現在のページ番号
                isFirst: i + 1 === 1, //最初のページ
                isLast: i + 1 === worksPages, //最後のページ
            },
        })
    })

    //カテゴリーページの設定
    worksresult.data.allContentfulCategory.edges.forEach(({ node }) => {
        const catPostsPerPage = 6 //1ページに表示する記事の数
        const catPosts = node.workspost.length //カテゴリーに属した記事の総数
        const catPages = Math.ceil(catPosts / catPostsPerPage) //カテゴリーページの総数

        Array.from({ length: catPages }).forEach((_, i) => {
            createPage({
                path:
                    i === 0
                    ? `/cat/${node.categorySlug}/`
                    : `/cat/${node.categorySlug}/${i + 1}`,
                component: path.resolve(`./src/templates/cat-template.js`),
                context: {
                    catid: node.id,
                    catname: node.category,
                    catslug: node.categorySlug,
                    skip: catPostsPerPage * i,
                    limit: catPostsPerPage,
                    currentPage: i + 1, //現在のページ番号
                    isFirst: i + 1 === 1, //最初のページ
                    isLast: i + 1 === catPages, //最後のページ
                },
            })
        })
    })
}
