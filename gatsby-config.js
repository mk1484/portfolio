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
        siteUrl: `https://ishibashi.netlify.app`,
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
      {　　
          resolve: `gatsby-transformer-remark`,
          options: {
              // CommonMark mode (default: true)
              commonmark: true,
              // Footnotes mode (default: true)
              footnotes: true,
              // Pedantic mode (default: true)
              pedantic: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [],
          },
      },
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
              head: true,
              respectDNT: true,
              exclude: [`/cat/**`, `/test/`],
          },
      },
  ],
}
