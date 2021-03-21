import React from "react"
import { graphql } from 'gatsby'

import Hero from "../components/Hero"
// import Layout from '../components/Layout'

export default function Home({ data })
{
  return (
    <>
      <Hero {...data.contentfulHero} />
    </>
  )
}

export const query = graphql`
  query HomePage {
    contentfulHero {
      headline
      description {
        description
      }
      background {
        gatsbyImageData(
          placeholder: BLURRED
        )
      }
      profile {
        gatsbyImageData
      }
    }
  }
`