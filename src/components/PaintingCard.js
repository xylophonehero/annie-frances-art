import React from 'react';
import
{
  Box,
  Text,
  VStack,
  Button

} from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { loadStripe } from '@stripe/stripe-js'

import { FormatPrice } from '../utils/Format'
import { Link } from 'gatsby';
import slugify from 'slugify'

// const GATSBY_STRIPE_PUBLISHABLE_KEY = 'pk_test_51IY3flKSMaB1SpgQQqL6jpCxG3ojNp2pWiiLWa0GPbcun1vp3wbCsRsz73P1HoJo4acmWaAGr43VeC6OjhpKY2Kb00rB8VPDDM'
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

function PaintingCard({ id, name, description, price, images })
{
  const handleBuy = async (e) =>
  {
    e.preventDefault()
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    }).then(res => res.json())
    console.log(response)

    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId
    })

    if (error)
    {
      console.error(error)
    }
  }

  return (
    <>
      <Link to={`/paintings/${slugify(name)}`}>
        <VStack
          alignItems="start"
        >
          <Box w="250px" h="250px" overflow="hidden">
            <Box as={GatsbyImage} image={getImage(images[0])} alt={name} h="full" w="full" transition="all 0.5s ease" _hover={{ transform: "scale(1.2)" }} />
          </Box>

          <Text>{name}</Text>
          <Text>{FormatPrice(price, 'AUD')}</Text>
          <Button onClick={(e) => handleBuy(e)}>Buy now!</Button>
        </VStack>
      </Link>

    </>

  );
}

export default PaintingCard;