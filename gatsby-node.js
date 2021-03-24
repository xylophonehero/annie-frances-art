const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) =>
{
  const { createPage } = actions
  const paintingTemplate = path.resolve('src/templates/paintingPage.js')
  const result = await graphql(`
    query{
      allContentfulPainting{
        nodes{
          name
        }
      }
    }
  `)

  result.data.allContentfulPainting.nodes.map(node =>
  {
    createPage({
      path: `paintings/${slugify(node.name)}`,
      component: paintingTemplate,
      context: {
        name: node.name
      }
    })
  })
}