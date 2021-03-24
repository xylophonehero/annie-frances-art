// import { Box, Heading, HStack, Stack, VStack, Text, } from '@chakra-ui/react';
import { graphql } from 'gatsby';

import React from 'react';
import PageLayout from '../components/PageLayout';
import Content from '../components/Content'



function Basicpage({ data })
{
  const info = data.contentfulPage
  return (
    <PageLayout pageTitle={info.title}>
      <Content text={info.body} width="full" maxW="800px" />
    </PageLayout>
  );
}

export default Basicpage;

export const query = graphql`
  query BasicPage($title: String) {
    contentfulPage(title:{eq: $title}){
      id: contentful_id
      title
      body{
        childMarkdownRemark{
          html
        }
      }
    }
  }
`