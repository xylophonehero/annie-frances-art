import
{
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

import PaintingCard from './PaintingCard';



function BlockPaintingCollection({ collectionName, text, paintings })
{
  if (collectionName === "Recent Additions")
  {
    return (

      <StaticQuery
        query={query}
        render={(data) =>
        {

          paintings = data.allContentfulPainting.nodes
          return (
            <Box my="16">
              <Heading textAlign="center" mb="16">{collectionName}</Heading>
              <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
                {paintings.map((painting) => (
                  <Flex key={painting.id} justify="center">
                    <PaintingCard key={painting.id} {...painting} />
                  </Flex>

                ))}
              </SimpleGrid>
              <Box textAlign="center" mt="4">

                <Link to="/paintings"><Button colorScheme="green">See More</Button></Link>
              </Box>
            </Box>
          )
        }
        }
      />
    )
  }

  return (
    <Box my="16">
      <Heading textAlign="center" my="8">{collectionName}</Heading>
      {!!text && <Box className="content" textAlign="center" mb="16">{renderRichText(text)}</Box>}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {paintings.map((painting) => (
          <Flex justify="center">
            <PaintingCard key={painting.id} {...painting} />
          </Flex>

        ))}
      </SimpleGrid>
    </Box>
  );
}

export default BlockPaintingCollection;

const query = graphql`query RecentPaintings{
  allContentfulPainting(
      filter: {commission: {ne: true}},
      limit: 8,
      sort: {fields: createdAt, order: DESC}
    ) {
    nodes {
      id
      name
      images {
        gatsbyImageData
      }
      printSizes {
        price
      }
    }
  }
}`