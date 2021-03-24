import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@chakra-ui/react'
import { FaPaw } from 'react-icons/fa';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

function StripeBuyButton({ paintingId })
{
  const handleBuy = async (e) =>
  {
    e.preventDefault()
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: paintingId })
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
    <Button onClick={(e) => handleBuy(e)} rightIcon={<FaPaw />}>Buy now! </Button>
  );
}

export default StripeBuyButton;