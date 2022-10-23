const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) =>
{
  const { createPage } = actions
  const basicPageTemplate = path.resolve('src/templates/basicPage.js')
  const paintingTemplate = path.resolve('src/templates/paintingPage.js')
  const result = await graphql(`
    query{
      allContentfulPage{
        nodes{
          title
        }
      }
    }
  `)

  result.data.allContentfulPage.nodes.map(node =>
  {
    const slug = node.title === "Home" ? "/" : slugify(node.title, { lower: true })
    createPage({
      path: `${slug}`,
      component: basicPageTemplate,
      context: {
        title: node.title
      }
    })
  })
}
