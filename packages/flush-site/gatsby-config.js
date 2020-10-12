// const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = {
  // developMiddleware: (app) => {
  //   app.use(
  //     '/playroom/',
  //     createProxyMiddleware({
  //       target: 'http://localhost:9000',
  //       pathRewrite: {
  //         '/playroom/': '',
  //       },
  //     })
  //   )
  // },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Themed Docs',
        short_name: 'Themed',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 76,
              icon: '<span>#</span>',
              elements: ['h1', 'h2', 'h3', 'h4'],
            },
          },
        ],
      },
    },
  ],
}
