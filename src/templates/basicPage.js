// import { Box, Heading, HStack, Stack, VStack, Text, } from '@chakra-ui/react';
import { graphql, Link as GatsbyLink } from 'gatsby';

import React from 'react';
import PageLayout from '../components/PageLayout';
// import Content from '../components/Content'
import { Box, Link, Text } from '@chakra-ui/react';
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import BlockSorter from '../components/BlockSorter';
import { getSlug } from '../utils/GetSlug';
import Seo from '../components/SEO'



function Basicpage({ data })
{
  const pageData = data.contentfulPage
  return (
    <PageLayout pageTitle={pageData.title}>
      <Seo />
      <Box className="content" maxW="100%">
        {renderRichText(pageData.text, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node =>
            {
              const { title, description, gatsbyImageData } = node.data.target
              return (
                <Box maxW="32rem" mx="auto" mb="4">
                  <Box as={GatsbyImage} boxShadow="xl" image={getImage(gatsbyImageData)} alt={title} />
                  {!!description && <Text fontWeight="semibold" color="gray.700">{description}</Text>}
                </Box>
              )
            },
            [BLOCKS.EMBEDDED_ENTRY]: node =>
            (
              <BlockSorter block={node.data.target} />
            ),
            [INLINES.ENTRY_HYPERLINK]: node =>
            {
              return (
                <Link as={GatsbyLink} to={`/${getSlug(node.data.target.title)}`}>{node.content[0].value}</Link>
                // <pre>{JSON.stringify(node, null, 2)}</pre>
              )
            }
          },
          // renderText: text => (<Box as="span" w="full" maxW="52rem">{text}</Box>)
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
          # story {
          #   raw
          #   references {
          #     __typename
          #     # ... on ContentfulAsset {
          #     #   contentful_id
          #     #   title
          #     #   description
          #     #   gatsbyImageData
          #     # }
          #   }
          # }
          painting {
            gatsbyImageData
            title
          }
          testimonial {
            buyer
            testimonial {
              raw
            }
          }
        }
        ... on ContentfulCta {
          contentful_id
          text {
            raw
          }
          ctaText
          page {
            title
          }
        }
        ... on ContentfulPaintingCollection {
          contentful_id
          collectionName
          text {
            raw
          }
          paintings {
            id
            name
            text {
              raw
            }
            printSizes {
              price
            }
            images {
              gatsbyImageData
              title
            }
          }
        }
        ... on ContentfulTestimonial {
          contentful_id
          buyer
          location
          testimonial {
            raw
          }
          photo {
            gatsbyImageData
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
        ... on ContentfulContactForm {
          contentful_id
          title
        }
        ... on ContentfulHero {
          contentful_id
          title
          tagline
          backgroundImages {
            gatsbyImageData
            title
          }
        }
      }
    }
  }
}`