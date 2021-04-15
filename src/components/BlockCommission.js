import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

function CommisionBlock({ title, story, location, painting, testimonial })
{
  return (
    <Box maxW="48rem" mx={["4", 8, "auto", "auto"]} py="8" my="8" borderBottom="1px" borderColor="gray.300">
      <Flex align="center" alignContent="center" mb="8" bg="green.50" flexDir={["column", null, "row"]}>
        <Box minW={[null, "20rem"]} textAlign="center" mx="4" py="8" alignSelf="center">
          <Heading as="h2" borderBottom="1px" borderColor="gray.300" pb="4">{title}</Heading>
          <Text>{location}</Text>
        </Box>
        <Box maxH="16rem" as={GatsbyImage} image={getImage(painting)} alt={painting.title} objectFit="contain" />
      </Flex>
      <Box>
        {!!testimonial &&
          <Box>
            {renderRichText(testimonial.testimonial, {
              renderText: (text => (<Text as="em" display="inline-block">{text}</Text>))
            })}
            <Text fontWeight="semibold">- {testimonial.buyer}</Text>
          </Box>
        }
        {!!story && renderRichText(story, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node =>
            {
              const { title, gatsbyImageData } = node.data.target
              return (
                <Flex justify="center" w="full" flexDir="row" mb="8">
                  <Box as={GatsbyImage} maxW="24rem" image={getImage(gatsbyImageData)} alt={title} />
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