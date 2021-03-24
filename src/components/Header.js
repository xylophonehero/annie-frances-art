import React from "react";
import { Link, Box, Flex, Text, Stack, Collapse, useDisclosure, Heading } from "@chakra-ui/react";
import { Link as GatsbyLink } from 'gatsby'
import Cart from './Cart'


const NavBar = (props) =>
{
  const { isOpen, onToggle } = useDisclosure()

  return (
    <NavBarContainer {...props}>
      <GatsbyLink
        to="/"
      >
        <Box w={["200px", "300px", "200px", "300px"]}>
          <Heading>Annie Frances Art</Heading>
        </Box>
      </GatsbyLink>

      <MenuToggle toggle={onToggle} isOpen={isOpen} />
      <Box display={{ base: "none", md: "block" }}>
        <MenuLinks />
      </Box>

      <MobileMenu isOpen={isOpen} />
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

const MenuItem = ({ children, isLast, to = "/", ...rest }) =>
{
  return (
    <Link href={to}>
      <Text display="block" fontFamily="heading" textTransform="uppercase" color="gray.700" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MobileMenu = ({ isOpen }) =>
{
  return (

    <Box
      display={{ base: "block", md: "none" }}
      flexBasis="100%"
    >
      <Collapse in={isOpen} animateOpacity>
        <MenuLinks />
      </Collapse>
    </Box>
  )
}

const MenuLinks = () =>
{
  return (

    <Stack
      spacing={[4, 4, 4, 8]}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "column", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/services">Services</MenuItem>
      <MenuItem to="/paintings">Paitings</MenuItem>
      <MenuItem to="/testimonials">Testimonails</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
      <Cart />
      {/* <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
              }}
            >
              Create Account
            </Button>
          </MenuItem> */}
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
      p={4}
      bgGradient="linear(to-r, teal.200, teal.400)"
      color="gray.600"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;