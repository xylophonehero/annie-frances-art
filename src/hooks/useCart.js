import { useEffect, useState } from 'react'
// import GetProductList from '../data/ProductList'
import { loadStripe } from '@stripe/stripe-js'



export default function useCart()
{
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

  const [cartItems, setCartItems] = useState([])

  // const [isInitiallyFetched, setIsInitiallyFetched] = useState(false)
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  useEffect(() =>
  {
    let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(prev_items)
    setIsInitiallyFetched(true)
  }, [])

  useEffect(() =>
  {
    if (isInitiallyFetched)
    {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isInitiallyFetched]);

  function addToCart(product, sizeIndex, qty)
  {
    setCartItems(prev =>
    {
      const existing = cartItems.find(
        item => item.id === product.id && item.sizeIndex === sizeIndex
      )
      return existing
        ? [
          ...cartItems.map(item =>
            (item.id === product.id && item.sizeIndex === sizeIndex)
              ? { ...item, qty: item.qty + qty }
              : item,
          ),
        ]
        : [...prev, { ...product, sizeIndex, qty }]
    })
  }

  function removeFromCart(product, sizeIndex)
  {
    setCartItems(prev => [
      ...prev.filter(item => item.id !== product.id || item.sizeIndex !== sizeIndex)
    ])
  }

  function changeQty(product, sizeIndex, qty)
  {
    if (qty === 0) removeFromCart(product, sizeIndex)

    setCartItems(prev => [
      ...prev.map(item =>
        (item.id === product.id && item.sizeIndex === sizeIndex) ? { ...item, qty } : item)
    ])
  }

  function resetCart()
  {
    setCartItems([])
  }

  function totalItems()
  {
    return cartItems.reduce(function (total, item)
    {
      total += item.qty
      return total
    }, 0)
  }

  function totalPrice()
  {
    return cartItems.reduce(function (total, item)
    {
      total += item.printSizes[item.sizeIndex].price * item.qty
      return total
    }, 0)
  }

  async function checkout()
  {
    const items = cartItems.reduce(function (allItems, item)
    {
      allItems.push({
        id: item.id,
        sizeIndex: item.sizeIndex,
        quantity: item.qty
      })
      return allItems
    }, [])
    console.log(items)
    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
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

  // function validateProduct(product)
  // {
  //   const validatedProduct = ProductList.find(x => x.sku === product.sku)
  //   const validatedQuantity = product.quantity > 0 && product.quantity <= 10 ? product.quantity : 1
  //   const productData = {
  //     name: validatedProduct.name,
  //     description: validatedProduct.description,
  //     images: ["localhost:8888" + validatedProduct.image.publicURL],
  //     amount: validatedProduct.price,
  //     currency: "gbp",
  //     quantity: validatedQuantity,
  //   }
  //   console.log(productData)
  //   return productData
  // }

  // async function checkout()
  // {
  //   const data = cartItems.reduce(function (data, item)
  //   {
  //     const validatedProduct = validateProduct(item)
  //     data.push(validatedProduct)
  //     return data
  //   }, [])

  //   const response = await fetch('/api/create-checkout',
  //     {
  //       method: 'POST',
  //       header: {
  //         'ContentType': 'application/json',
  //       },
  //       body: JSON.stringify(data)
  //     }
  //   ).then(res => res.json())

  //   const stripe = await stripePromise
  //   const { error } = stripe.redirectToCheckout({
  //     sessionId: response.sessionId
  //   })

  //   if (error)
  //   {
  //     console.error(error)
  //   }
  // }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    changeQty,
    resetCart,
    totalItems,
    totalPrice,
    checkout
  }
}