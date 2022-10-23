import React from 'react';
import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

function BlockTestimonial({ buyer, location, photo, testimonial })
{
  return (
    <Box
      backgroundColor="gray.100"
      boxShadow="xl"
      h="full"
      display="flex"
      flexDir="column"
      p={8}
      borderRadius="xl"
      maxW="48rem"
      mx={[4, 8, null, "auto"]}
      mb={8}
    >
      <Stack direction={["column", "row"]} spacing={["4", "8"]} align="center">
        {photo && <Box as={GatsbyImage} image={getImage(photo)} w="12em" borderRadius="lg" alt={buyer} />}
        <VStack spacing="4" alignItems="flex-start" flexShrink="10000">
          <Text as="h3" fontSize="2xl" fontWeight="semibold">{buyer}</Text>
          <Text>{location}</Text>
        </VStack>
      </Stack>
      <Box as="hr" my="8" borderColor="black" />
      <Box>
        {renderRichText(testimonial, {
          renderText: (text => (<Text as="em">{text}</Text>))
        })}
      </Box>
    </Box>
  );
}

export default BlockTestimonial;