import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Content from './Content';

function TestimonialCard({ buyer, location, photo, review })
{
  return (
    <Box
      bg="gray.200"
      boxShadow="xl"
      h="full"
      display="flex"
      flexDir="column"
      p={8}
      borderRadius="xl"
    >
      <Stack direction={["column", "row"]} spacing={["4", "8"]}>
        <Box as={GatsbyImage} image={getImage(photo)} w="12em" h="9em" borderRadius="lg" alt={buyer} />
        <VStack spacing="4" alignItems="flex-start" flexShrink="10000">
          <Text as="h3" fontSize="2xl" fontWeight="semibold">{buyer}</Text>
          <Text>{location}</Text>
        </VStack>
      </Stack>
      <Box as="hr" my="8" borderColor="black" />
      <Box>
        <Content text={review} as="cite" />
      </Box>
    </Box>
  );
}

export default TestimonialCard;