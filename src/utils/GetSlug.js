// const slugify = require('slugify')
import slugify from 'slugify'

export function getSlug(string)
{
  return slugify(string, { lower: true })
}