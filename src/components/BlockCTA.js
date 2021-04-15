import { Box, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { getSlug } from '../utils/GetSlug';

function BlockCTA({ text, ctaText, page })
{
  return (
    <Box maxW="32rem" mx="auto" textAlign="center" my="8" p="4" bg="gray.300" rounded="2xl">
      {!!text && renderRichText(text, {
        renderText: text => <Box as="span" fontSize="lg" fontWeight="semibold">{text}</Box>
      })}
      <Link to={`/${getSlug(page.title)}`}><Button colorScheme="green" rightIcon={<FaPaw />}>{ctaText}</Button></Link>
    </Box>
  );
}

export default BlockCTA;