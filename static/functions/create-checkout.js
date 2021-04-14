const stripe = require('stripe')(process.env.STRIPE_API_SECRET)
const contentful = require('contentful')

exports.handler = async ({ body }) =>
{
  const items = JSON.parse(body)

  const client = contentful.createClient({
    space: 'rwehxiq2fto9',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const promises = items.map(async (item) =>
  {
    const painting = await client.getEntry(item.id)
    return {
      price_data: {
        currency: 'aud',
        product_data: {
          name: `${painting.fields.name} - ${painting.fields.printSizes[item.sizeIndex].fields.title}`,
          description: painting.fields.description,
          images: ["http://" + painting.fields.images[0].fields.file.url.substring(2)]
        },
        unit_amount: painting.fields.printSizes[item.sizeIndex].fields.price,
      },
      quantity: item.quantity,
    }
  })
  const line_items = await Promise.all(promises)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['AU']
    },
    billing_address_collection: 'auto',
    line_items,
    mode: 'payment',
    success_url: 'https://anniefrancesart.com/purchased',
    cancel_url: 'https://anniefrancesart.com/paintings',
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id })
  }
}