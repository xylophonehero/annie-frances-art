import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function BlockHero({ title, tagline, backgroundImages })
{
  return (
    <Box pos="relative" maxW="68rem" mx="auto" w="100%" h="20rem">
      <SimpleGrid pos="absolute" w="full" h="full" columns={["1", "2", "3", "4"]}>
        {backgroundImages.map((image, index) => (
          <Box width={[index < 1 ? "auto" : "0px", index < 2 ? "auto" : "0px", index < 3 ? "auto" : "0px", index < 4 ? "auto" : "0px"]} key={image.title} as={GatsbyImage} image={getImage(image)} alt={image.title} />
        ))}
      </SimpleGrid>
      <Flex
        pos="relative"
        w="full"
        h="full"
        flexDir="column"
        align="center"
        justify="flex-end"
        textColor="white"
        bgColor="rgba(0,0,0,0.3)"
        textAlign="center"
      >
        <Heading fontSize="4xl">{title}</Heading>
        <Heading fontSize="2xl" pb="8">{tagline}</Heading>
      </Flex>

    </Box>
  );
}

export default BlockHero;