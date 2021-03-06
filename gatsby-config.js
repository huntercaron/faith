module.exports = {
  siteMetadata: {
    title: 'FAITH',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 }), require('autoprefixer')()],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "assets"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'sunnyside',
        short_name: 'sunnyside',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/cross.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
