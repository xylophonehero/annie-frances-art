// import { Box, Heading, HStack, Stack, VStack, Text, } from '@chakra-ui/react';
import { graphql } from 'gatsby';

import React from 'react';
import PageLayout from '../components/PageLayout';
// import Content from '../components/Content'
import { Box } from '@chakra-ui/react';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



function Basicpage({ data })
{
  const pageData = data.contentfulPage
  return (
    <PageLayout pageTitle={pageData.title}>
      <Box className="content" w="full" maxW="52rem">
        {renderRichText(pageData.text, {
          // renderNode: {
          //   [BLOCKS.EMBEDDED_ASSET]: node =>
          //   (
          //     <pre>
          //       <code>{JSON.stringify(node, null, 2)}</code>
          //     </pre>
          //   )
          // }
        })}
      </Box>
      {/* <Content text={info.body} width="full" maxW="800px" /> */}
    </PageLayout>
  );
}

export default Basicpage;

export const query = graphql`query BasicPage($title: String) {
  contentfulPage(title:{eq: $title}){
    id: contentful_id
    title
    body{
      childMarkdownRemark{
        html
      }
    }
    text {
      raw
      references {
        __typename
        gatsbyImageData
      }
    }
  }
}`