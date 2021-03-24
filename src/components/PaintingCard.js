import React from 'react';
import
{
  Box,
  Text,
  VStack,

} from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';


import { FormatPrice } from '../utils/Format'
import { Link } from 'gatsby';
import { getSlug } from '../utils/GetSlug'
import StripeBuyButton from './StripeBuyButton';

// const GATSBY_STRIPE_PUBLISHABLE_KEY = 'pk_test_51IY3flKSMaB1SpgQQqL6jpCxG3ojNp2pWiiLWa0GPbcun1vp3wbCsRsz73P1HoJo4acmWaAGr43VeC6OjhpKY2Kb00rB8VPDDM'

function PaintingCard({ id, name, description, price, images })
{

  return (
    <>
      <Link to={`/paintings/${getSlug(name)}`}>
        <VStack
          alignItems="start"
        >
          <Box w="250px" h="250px" overflow="hidden">
            <Box as={GatsbyImage} image={getImage(images[0])} alt={name} h="full" w="full" transition="all 0.5s ease" _hover={{ transform: "scale(1.2)" }} />
          </Box>

          <Text>{name}</Text>
          <Text>{FormatPrice(price, 'AUD')}</Text>
          <StripeBuyButton paintingId={id} />
        </VStack>
      </Link>

    </>

  );
}

export default PaintingCard;