import
{
  Box,
  VStack,
  Text,
  Flex,
  Link,
  SimpleGrid,
  Button,
  InputGroup,
  Input,
  InputRightAddon
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby'
import React from 'react';

function Footer()
{
  // const onSubmit = (e) =>
  // {
  //   e.preventDefault()
  //   console.log("submitted")
  // }

  return (
    <Box w="full" p="12" bgGradient="linear(to-b, gray.100, gray.400)">
      <VStack spacing="8">
        <SimpleGrid columns={[1, 1, 3]} gap="4">
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb="4">Site navigation</Text>
            <Text><Link as={GatsbyLink} to="/store">Store</Link></Text>
            <Text><Link as={GatsbyLink} to="/about-annie">About Annie</Link></Text>
            <Text><Link as={GatsbyLink} to="/annie's-mission">Annie's Mission</Link></Text>
            <Text><Link as={GatsbyLink} to="/commissions">Commissions</Link></Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb="4">Extra bits</Text>
            <Text><Link as={GatsbyLink} to="/contact-me">Contact</Link></Text>
            <Text><Link as={GatsbyLink} to="/shipping-and-returns">Shipping &amp; Returns</Link></Text>
            <Text><Link as={GatsbyLink} to="/privacy-policy">Privacy Policy</Link></Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb="4">Subscribe to my newsletter:</Text>
            <form action="https://anniefrancesart.us1.list-manage.com/subscribe/post?u=8f6456baf626ffa8671669566&amp;id=1992aec1a5" method="post" target="_blank">
              <InputGroup>
                <Input bg="white" placeholder="Your e-mail" name="EMAIL" />
                <InputRightAddon>
                  <Button type="submit">
                    Go
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </form>
          </Box>
        </SimpleGrid>
        <Flex flexDir={["column", "row"]} justifyContent="space-between" maxW="720px" w="full" textAlign="center">
          <Text mb="4">© 2021 Copyright all rights reserved Annie Frances</Text>
          <Text>Website created by <Link href="https://nickworrall.co.uk" isExternal>Nick Worrall</Link></Text>
        </Flex>
      </VStack>

    </Box>
  );
}

export default Footer;