import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import ProgressArrow from './ProgressArrow';
import { motion, AnimatePresence } from 'framer-motion';
import SocialButtons from './SocialButtons';
import { graphql, StaticQuery } from 'gatsby';
import { CartProvider } from '../context/cartContext';
import PopUpModal from './PopUpModal';


function Layout({ children, location })
{
  // const { data } = useStaticQuery(query)
  // console.log(data)

  const duration = 0.3

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
    <StaticQuery
      query={query}
      render={(data) => (
        <CartProvider>
          <PopUpModal />
          <Flex direction="column" pos="relative" minH="100vh">
            <Header logo={data.contentfulSiteConfig.logo} menuLinks={data.contentfulSiteConfig.headerMenu} />
            <Box flexGrow={1}>
              <AnimatePresence>
                <Box
                  as={motion.main}
                  key={location.pathname}
                  variants={variants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  overflowX="hidden"
                >
                  {children}
                </Box>
              </AnimatePresence>
            </Box>
            <Footer />
            <SocialButtons facebook={data.contentfulSiteConfig.facebook} instagram={data.contentfulSiteConfig.instagram} />
            {/* <ProgressArrow /> */}
          </Flex>
        </CartProvider>
      )}
    />
  )


  // return (
  //   <Flex direction="column" pos="relative" minH="100vh" overflowX="hidden">
  //     <Header />
  //     <Box flexGrow={1}>
  //       <AnimatePresence>
  //         <Box
  //           as={motion.main}
  //           key={location.pathname}
  //           variants={variants}
  //           initial="initial"
  //           animate="enter"
  //           exit="exit"
  //         >
  //           {children}
  //         </Box>
  //       </AnimatePresence>
  //     </Box>
  //     <Footer />
  //     <SocialButtons />
  //     <ProgressArrow />
  //   </Flex>
  // );
}

export default Layout;

const query = graphql` query LayoutQuery {
  contentfulSiteConfig {
    headerMenu {
        id: contentful_id
        title
    }
    facebook
    instagram
    logo {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}`