import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import ProgressArrow from './ProgressArrow';

function Layout({ children })
{
  return (
    <Flex direction="column" pos="relative" minH="100vh" overflowX="hidden">
      <Header />
      <Box as="main" flexGrow={1}>{children}</Box>
      <Footer />
      <ProgressArrow />
    </Flex>
  );
}

export default Layout;