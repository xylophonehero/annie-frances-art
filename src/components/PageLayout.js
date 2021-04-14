import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

function PageLayout({ children, pageTitle })
{
  return (
    <Container centerContent size="large" py={16}>
      <Heading as="h1" color="gray.600" mb={8}>{pageTitle}</Heading>
      {children}
    </Container>
  );
}

export default PageLayout;