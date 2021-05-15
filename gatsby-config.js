/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  /* Your site config here */
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "'G-NFBZ2PE8YF",
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '215927783392610',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Annie Frances Art`,
        short_name: `AnnieFrancesArt`,
        start_url: `/`,
        background_color: `#6c6501`,
        theme_color: `#8aadae`,
        display: `standalone`,
        icon: `src/images/paw.png`
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rwehxiq2fto9`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
