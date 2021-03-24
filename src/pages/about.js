// import { Box, Stack, Heading, VStack, Text, Icon } from '@chakra-ui/react';
// import { graphql } from 'gatsby';
// import { getImage, GatsbyImage } from 'gatsby-plugin-image';
// import React from 'react';
// import { FaCat } from 'react-icons/fa'

// import PageLayout from '../components/PageLayout';
// import CTAButton from '../components/CTAButton';
// import Content from '../components/Content'


// function About({ data })
// {
//   const pageData = data.contentfulAboutPage

//   return (
//     <PageLayout pageTitle={pageData.title}>
//       <Stack direction={["column", null, "row"]} spacing="8" alignItems={["center", null, "start"]}>
//         <Box
//           as={GatsbyImage}
//           image={getImage(pageData.profile)}
//           w="300px"
//           maxH="400px"
//           alt="Karen"
//           borderRadius="xl"
//         />
//         <Box maxW={{ base: "full", md: "26em", lg: "36em", xl: "56em" }}>

//           <Content text={pageData.body} />
//         </Box>
//       </Stack>
//       <VStack my="16" textAlign="center" spacing="8">
//         <Heading fontSize="3xl">Want to talk about a project?</Heading>
//         <CTAButton text="Let's Chat" url="/contact" />
//         {/* <Text fontSize="xl">Let's chat: <a href="mailto:info@karenworrall.co.uk" rel="noreferrer" target="_blank">info@karenworrall.co.uk</a></Text> */}
//       </VStack>
//       <Box w="full" textAlign="left">
//         <Heading fontSize="4xl" textAlign="center" mb="4">Education</Heading>
//         <Text mb="2">I’m a big believer in constant personal development and honing your craft. Here’s a summary of my relevant education so far:</Text>

//         {pageData.education.map((item) => (
//           <Box key={item.id} mb="1" >
//             <Box as="span" fontWeight="medium" color="teal.700"><Icon as={FaCat} mr="2" mb="1" />{item.qualification}: </Box>
//             {item.year} - {item.institution}
//           </Box>
//         ))}

//       </Box>
//     </PageLayout>
//   );
// }

// export default About;

// export const query = graphql`
//   query AboutQuery {
//     contentfulAboutPage {
//       title
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//       profile {
//         gatsbyImageData(
//           width: 400
//         )
//       }
//       education {
//         id
//         year
//         qualification
//         institution
//       }
//     }
//   }
// `