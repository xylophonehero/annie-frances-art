import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { getSlug } from '../utils/GetSlug';

function BlockImageText({ text, image, imageOnLeft, ctaText, ctaLink })
{
  return (
    <Flex flexDir={["column",null,imageOnLeft ? "row-reverse": "row"]} alignItems="center" gap="8" maxW="50rem" mx="auto" w="100%" px="8" mb="16">
      <Box flex="1" textAlign="center" fontSize="3xl">
        {renderRichText(text)}
        {ctaLink && <Text>
          <Link to={`/${getSlug(ctaLink.title)}`}>{ctaText}</Link>
        </Text>}
      </Box>
      <Box flex="1" as={GatsbyImage} image={getImage(image)} alt={image.description} />
    </Flex>
  );
}

export default BlockImageText;