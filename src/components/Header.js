import React from "react";
import { Box, Flex, Text, Stack, Collapse, useDisclosure, Spacer, Icon } from "@chakra-ui/react";
import { Link } from 'gatsby'
// import Cart from './Cart'
import { getSlug } from '../utils/GetSlug'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaShoppingCart } from "react-icons/fa";



function NavBar({ logo, menuLinks })
{
  const { isOpen, onToggle, onClose } = useDisclosure()

  // const { data } = useStaticQuery(query)
  // console.log(data)
  // return (
  //   <pre>{JSON.stringify(data, null, 2)}</pre>
  // )
  // const menuLinks = data.contentfulSiteConfig.headerMenu
  return (
    <NavBarContainer>
      <Link
        to="/"
      >

        <Box pos="relative" w={["100px", "120px", "100px", "140px"]}>

          <GatsbyImage image={getImage(logo)} alt="Annie Frances Art logo" objectFit="contain" />

        </Box>
      </Link>
      <Spacer />
      <Box display={{ base: "none", md: "inline-block" }}>
        <MenuLinks menu={menuLinks} />
      </Box>
      <Link to="/store" state={{ path: 'widgetshoppingcart/shoppingcart.html' }} >
        {/* <IconButton icon={<FaShoppingCart />} aria-label="cart" size="lg" mx="4" colorScheme="gray" variant="ghost" /> */}
        <Flex fontSize="2xl" mx="6" flexDir="column" justifyContent="center">
          <Icon as={FaShoppingCart} />
        </Flex>
      </Link>
      {/* <Cart /> */}
      <MenuToggle toggle={onToggle} isOpen={isOpen} />
      <MobileMenu isOpen={isOpen} onClose={onClose} menu={menuLinks} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      // fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  // fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) =>
{
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} color="gray.700">
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, onClose = () => { }, to = "/" }) =>
{
  return (
    <Box as={Link} to={to} className="navbar-link" pos="relative" onClick={onClose}>
      <Text
        display="block"
        textTransform="uppercase"
        color="gray.700"
        fontWeight="semibold"
      >
        {children}
      </Text>
      <Box
        pos="absolute"
        h="2px"
        bgColor="gray.700"
        w="0"
        transition="width 0.3s ease"

        sx={{
          ".navbar-link:hover &": {
            width: "100%",
          },
        }}
      />
    </Box>
  );
};

const MobileMenu = ({ isOpen, menu, onClose }) =>
{
  return (

    <Box
      display={{ base: "block", md: "none" }}
      flexBasis="100%"
    >
      <Collapse in={isOpen} animateOpacity>
        <MenuLinks menu={menu} onClose={onClose} />
      </Collapse>
    </Box>
  )
}

const MenuLinks = ({ menu, onClose }) =>
{
  return (

    <Stack
      spacing={[4, 4, 4, 8]}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "column", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/store">Store</MenuItem>
      {menu.map(link => (
        <MenuItem key={link.id} to={`/${getSlug(link.title)}`} onClose={onClose}>{link.title}</MenuItem>
      ))}

      {/* <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/my-mission">My Mission</MenuItem>
      <MenuItem to="/faqs">FAQs</MenuItem>
      <MenuItem to="/paintings">Paitings</MenuItem>
      <MenuItem to="/testimonials">Testimonails</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem> */}

    </Stack>

  );
};

const NavBarContainer = ({ children, ...props }) =>
{
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pos="sticky"
      top="0"
      zIndex="2"
      // zIndex="sticky"
      // mb={8}
      p={2}
      bgGradient="linear(to-r, gray.100, gray.200)"
      color="gray.600"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

// const query = graphql` query HeaderMenu {
//   contentfulPage {
//     title
//   }
//   contentfulSiteConfig {
//     headerMenu {
//       ... on ContentfulPage {
//         id: contentful_id
//         title
//       }
//       ... on ContentfulPaintingsPage {
//         id: contentful_id
//         title
//       }
//       ... on ContentfulTestimonialsPage {
//         id: contentful_id
//         title
//       }
//     }
//   }
// }`