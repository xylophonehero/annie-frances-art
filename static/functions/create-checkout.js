const stripe = require('stripe')(process.env.STRIPE_API_SECRET)
const contentful = require('contentful')

exports.handler = async ({ body }) =>
{

  const { id } = JSON.parse(body)

  const client = contentful.createClient({
    space: 'rwehxiq2fto9',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const painting = await client.getEntry(id)


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['AU']
    },
    billing_address_collection: 'auto',
    line_items: [
      {
        price_data: {
          currency: 'aud',
          product_data: {
            name: painting.fields.name,
            description: painting.fields.description,
            images: ["http://" + painting.fields.images[0].fields.file.url.substring(2)]
          },
          unit_amount: painting.fields.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:8888',
    cancel_url: 'http://localhost:8888/paintings',
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id })
  }
}