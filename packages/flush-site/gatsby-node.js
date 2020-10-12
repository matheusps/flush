/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// eslint-disable-next-line import/no-nodejs-modules
const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }

  if (node.internal.type === 'File' || node.internal.type === 'Mdx') {
    const path = node.absolutePath || node.fileAbsolutePath
    let type = 'docs'

    if (path.includes('blocks')) {
      type = 'blocks'
    }

    createNodeField({
      name: 'type',
      node,
      value: type,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // const result = await graphql(`
  //   query {
  //     allMdx {
  //       edges {
  //         node {
  //           id
  //           fileAbsolutePath
  //           fields {
  //             type
  //             slug
  //           }
  //           frontmatter {
  //             breakpoint
  //             group
  //             isFluid
  //             name
  //             path
  //             title
  //           }
  //           body
  //           tableOfContents
  //         }
  //       }
  //     }
  //   }
  // `)

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              type
              slug
            }
            frontmatter {
              path
              title
            }
            body
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const pages = result.data.allMdx.edges

  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/layout/Docs.tsx`),
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
        mdxBody: node.body,
        type: node.fields.type,
      },
    })
  })
}
