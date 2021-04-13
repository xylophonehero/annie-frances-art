import
{
  Box,
  Heading,
  SimpleGrid,
  Button,
  HStack
} from '@chakra-ui/react';
// import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'react-scroll'

import React from 'react';
import PageLayout from '../components/PageLayout';
import PaintingCard from '../components/PaintingCard';

// import PortfolioCard from '../components/PortfolioCard';
// import PortfolioFilter from '../components/PortfolioFilter';

function Paintings({ data })
{
  const pageData = data.contentfulPaintingsPage
  return (
    <PageLayout pageTitle={pageData.title}>
      <HStack spacing="8">
        {pageData.collections.map(collection => (
          <Link key={collection.id} to={collection.id} smooth={true}>
            <Button  >{collection.collectionName}</Button>
          </Link>
        ))}
      </HStack>
      {pageData.collections.map(collection => (
        <Box key={collection.id} id={collection.id} my="16">
          <Heading textAlign="center" my="8">{collection.collectionName}</Heading>
          <Box className="content" textAlign="center" mb="16">{renderRichText(collection.text)}</Box>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
            {collection.paintings.map((painting) => (
              <PaintingCard key={painting.id} {...painting} />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </PageLayout>
  );
}

export default Paintings;

export const paintingsQuery = graphql`query AllPaintings {
  contentfulPaintingsPage {
    title
    collections {
      id: contentful_id
      collectionName
      text {
        raw
      }
      paintings {
        id: contentful_id
        name
        images {
          gatsbyImageData(placeholder: BLURRED)
          file {
            url
          }
        }
        price
      }
    }
  }
  allContentfulPainting(sort: {order: DESC, fields: createdAt}) {
    nodes {
      id: contentful_id
      name
      description {
        childMarkdownRemark {
          html
        }
      }
      images {
        gatsbyImageData(placeholder: BLURRED)
        file {
          url
        }
      }
      price
    }
  }
}`