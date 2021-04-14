import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

function CommisionBlock({ title, story, location, painting, painting2 })
{
  return (
    <Box py="8" my="8" borderBottom="1px" borderColor="gray.300">
      <Flex align="center" alignContent="center" mb="8" bg="blue.50" flexDir={["column", null, "row"]}>
        <Box minW={[null, "20rem"]} textAlign="center" mx="4" py="8" alignSelf="center">
          <Heading as="h2" borderBottom="1px" borderColor="gray.300" pb="4">{title}</Heading>
          <Text>{location}</Text>
        </Box>
        <Box maxH="16rem" as={GatsbyImage} image={getImage(painting)} alt={painting.title} objectFit="contain" />
        {/* <Box maxH="8rem" as={GatsbyImage} image={getImage(painting2)} alt={painting2.title} objectFit="contain" /> */}
      </Flex>
      <Box>
        {renderRichText(story, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node =>
            {
              const { title, gatsbyImageData } = node.data.target
              return (
                <Flex justify="center" w="full" flexDir="row" mb="8">
                  <Box as={GatsbyImage} maxW="24rem" image={getImage(gatsbyImageData)} alt={title} />
                  {/* {!!description && <Text fontWeight="semibold" color="gray.700">{description}</Text>} */}
                </Flex>
              )
            }
          }
        })}
      </Box>
    </Box>
  );
}

export default CommisionBlock;