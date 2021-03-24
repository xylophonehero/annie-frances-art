const path = require('path')
// const { getSlug } = require('./src/utils/GetSlug')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) =>
{
  const { createPage } = actions
  const basicPageTemplate = path.resolve('src/templates/basicPage.js')
  const paintingTemplate = path.resolve('src/templates/paintingPage.js')
  const result = await graphql(`
    query{
      allContentfulPainting{
        nodes{
          name
        }
      }
      allContentfulPage{
        nodes{
          title
        }
      }
    }
  `)

  result.data.allContentfulPainting.nodes.map(node =>
  {
    const slug = slugify(node.name, { lower: true })
    createPage({
      path: `paintings/${slug}`,
      component: paintingTemplate,
      context: {
        name: node.name
      }
    })
  })
  result.data.allContentfulPage.nodes.map(node =>
  {
    const slug = slugify(node.title, { lower: true })
    createPage({
      path: `${slug}`,
      component: basicPageTemplate,
      context: {
        title: node.title
      }
    })
  })
}