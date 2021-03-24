import React from "react"
// import { graphql } from 'gatsby'

// import Hero from "../components/Hero"
// import Layout from '../components/Layout'

export default function Home({ data })
{
  return (
    <div>
      Hello
      {/* <Hero {...data.contentfulHero} /> */}
    </div>
  )
}

// export const query = graphql`
//   query HomePage {
//     contentfulHero {
//       headline
//       description {
//         description
//       }
//       background {
//         gatsbyImageData(
//           placeholder: BLURRED
//         )
//       }
//       profile {
//         gatsbyImageData
//       }
//     }
//   }
// `
