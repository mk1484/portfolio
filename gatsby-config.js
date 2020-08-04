require('dotenv').config()

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
    siteMetadata: {
      title: `Ishibashi Portfolio`,
        description: `制作実績`,
        lang: 'ja',
    },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
          resolve: `gatsby-source-contentful`,
          options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
              host: process.env.CONTENTFUL_HOST,
          },
      },

  ],
}
