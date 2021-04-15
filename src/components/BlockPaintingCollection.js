import
{
  Box,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

import PaintingCard from './PaintingCard';



function BlockPaintingCollection({ collectionName, text, paintings })
{


  return (
    <Box my="16">
      <Heading textAlign="center" my="8">{collectionName}</Heading>
      <Box className="content" textAlign="center" mb="16">{renderRichText(text)}</Box>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {paintings.map((painting) => (
          <PaintingCard key={painting.id} {...painting} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default BlockPaintingCollection;