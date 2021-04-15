import React from 'react';
import
{
  Box,
  Text,
  VStack,

} from '@chakra-ui/react';
import { transparentize } from "@chakra-ui/theme-tools"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { FormatPrice } from '../utils/Format'
import { Link } from 'gatsby';
import { getSlug } from '../utils/GetSlug'
// import StripeBuyButton from './StripeBuyButton';

// const GATSBY_STRIPE_PUBLISHABLE_KEY = 'pk_test_51IY3flKSMaB1SpgQQqL6jpCxG3ojNp2pWiiLWa0GPbcun1vp3wbCsRsz73P1HoJo4acmWaAGr43VeC6OjhpKY2Kb00rB8VPDDM'

function PaintingCard({ id, name, images, printSizes, sold })
{

  return (
    <Link to={`/paintings/${getSlug(name)}`}>
      <VStack
        alignItems="start"
        maxW="250px"
      >
        <Box w="250px" h="250px" overflow="hidden" pos="relative" boxShadow="2xl">
          <Box as={GatsbyImage} image={getImage(images[0])} alt={name} h="full" w="full" transition="all 0.5s ease" _hover={{ transform: "scale(1.2)" }} />
          {sold &&
            <Box pos="absolute" bottom="0" w="full" bg={transparentize("grey.500", 0.5)} p="2">
              <Text fontSize="xl" textAlign="center" fontWeight="semibold" color="white">Sold</Text>
            </Box>
          }
        </Box>

        <Text fontSize="xl" fontWeight="semibold">{name}</Text>
        <Text fontSize="lg" fontWeight="semibold" color="gray.700">{FormatPrice(printSizes[0].price, 'AUD')}</Text>
        {/* {!noBuy && <StripeBuyButton paintingId={id} />} */}
      </VStack>
    </Link>
  );
}

export default PaintingCard;