import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

function CommisionBlock({ title, story, location, painting, testimonial })
{
  return (
    <Box maxW="48rem" mx={["4", 8, "auto", "auto"]} py="8" my="8" borderBottom="1px" borderColor="gray.300">
      <Flex align="center" alignContent="center" mb="8" bg="green.50" flexDir={["column", null, "row"]}>
        <Box minW={[null, "20rem"]} textAlign="center" mx="4" py="8" alignSelf="center">
          <Heading as="h2" borderBottom="1px" borderColor="gray.300" pb="4">{title}</Heading>
          <Text>{location}</Text>
        </Box>
        <Box maxH="20rem" as={GatsbyImage} image={getImage(painting)} alt={painting.title} objectFit="contain" />
      </Flex>
      <Box>
        {!!testimonial &&
          <Box bg="gray.200" p="4" rounded="xl" mb="4" display="flex" flexDir="row">
            <Box textColor="gray.500" fontSize="3xl" flexDir="column" justifyContent="flex-start" mt="2" mr="4" display={['none', 'flex']}>
              <Icon as={ImQuotesLeft} />
            </Box>

            <Box>
              {renderRichText(testimonial.testimonial, {
                renderText: (text => (<Text as="em" display="inline-block">{text}</Text>))
              })}
              <Box fontWeight="semibold">- {testimonial.buyer}</Box>
            </Box>
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