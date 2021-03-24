import { Box, Heading, HStack, Stack, VStack, Text, Button } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Content from '../components/Content'
import { FormatPrice } from '../utils/Format';


function PaintingPage({ data })
{
  const [imageIndex, setImageIndex] = useState(0)

  const paintingInfo = data.contentfulPainting
  return (
    <PageLayout pageTitle={paintingInfo.name}>
      <Stack direction={["column", null, "row"]}>
        <HStack alignItems="start">
          <VStack>
            {paintingInfo.images.map((image, index) => (
              <Box key={image.id} as={GatsbyImage} border={index === imageIndex ? "solid 2px" : "none"} borderColor="gray.700" image={getImage(image)} w="50px" h="50px" alt={paintingInfo.name} onClick={() => setImageIndex(index)} />
            ))}
          </VStack>
          <Box w="400px" h="300px" overflow="hidden" pos="relative" >
            {paintingInfo.images.map((image, index) => (
              <Box key={image.id} as={GatsbyImage} image={getImage(image)} opacity={index === imageIndex ? 1 : 0} transition="opacity 500ms ease" pos="absolute" w="full" h="full" objectFit="contain" imgStyle={{ objectFit: "contain" }} alt={paintingInfo.name} />
            ))}

          </Box>
        </HStack>
        <VStack alignItems="flex-start">
          <Heading>{paintingInfo.name}</Heading>
          <Text>{FormatPrice(paintingInfo.price, 'AUD')}</Text>
          <Content text={paintingInfo.description} />
          <Button>Buy now</Button>
        </VStack>
      </Stack>
    </PageLayout>
  );
}

export default PaintingPage;

export const query = graphql`
  query SinglePaintingPage($name: String) {
    contentfulPainting(name:{eq: $name}){
      id: contentful_id
      name
      description{
        childMarkdownRemark {
          html
        }
      }
      price
      images {
        id: contentful_id
        gatsbyImageData( placeholder: BLURRED)
      }
    }
  }
`