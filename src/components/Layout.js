import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import ProgressArrow from './ProgressArrow';
import { motion, AnimatePresence } from 'framer-motion';


function Layout({ children, location })
{
  const duration = 0.5

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }


  return (
    <Flex direction="column" pos="relative" minH="100vh" overflowX="hidden">
      <Header />
      <Box flexGrow={1}>
        <AnimatePresence>
          <Box
            as={motion.main}
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </Box>
        </AnimatePresence>
      </Box>
      <Footer />
      <ProgressArrow />
    </Flex>
  );
}

export default Layout;