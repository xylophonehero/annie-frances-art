// import { Box, Heading, HStack, Stack, VStack, Text, } from '@chakra-ui/react';
import { graphql } from 'gatsby';

import React from 'react';
import PageLayout from '../components/PageLayout';
// import Content from '../components/Content'
import { Box, Text } from '@chakra-ui/react';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import BlockSorter from '../components/BlockSorter';
// import SEO from '../components/SEO'



function Basicpage({ data })
{
  const pageData = data.contentfulPage
  return (
    <PageLayout pageTitle={pageData.title}>
      {/* <SEO /> */}
      <Box className="content" w="full" maxW="52rem">
        {renderRichText(pageData.text, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node =>
            {
              const { title, description, gatsbyImageData } = node.data.target
              return (
                <Box maxW="32rem" mx="auto">
                  <Box as={GatsbyImage} boxShadow="xl" image={getImage(gatsbyImageData)} alt={title} />
                  {!!description && <Text fontWeight="semibold" color="gray.700">{description}</Text>}
                </Box>
              )
            },
            [BLOCKS.EMBEDDED_ENTRY]: node =>
            (
              <BlockSorter block={node.data.target} />
            )
          }
        })}
      </Box>
    </PageLayout>
  );
}

export default Basicpage;

export const query = graphql`query BasicPage($title: String) {
  contentfulPage(title:{eq: $title}){
    id: contentful_id
    title
    text {
      raw
      references {
        __typename
        ... on ContentfulCommissionBlock {
          contentful_id
          title
          location
          story {
            raw
            references {
              __typename
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData
              }
            }
          }
          painting {
            gatsbyImageData
            title
          }
        }
        ... on ContentfulAsset {
          contentful_id
          title
          description
          gatsbyImageData
        }
        ... on ContentfulPage {
          contentful_id
          title
        }
      }
    }
  }
}`