import { Box, VStack, Text, Flex, Link, SimpleGrid, Button, InputGroup, Input, InputRightAddon } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby'
import React from 'react';

function Footer()
{
  const onSubmit = (e) =>
  {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <Box w="full" p="12" bgColor="blue.200">
      <VStack spacing="8">
        <SimpleGrid columns={[1, 1, 3]}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb="4">Another menu</Text>
            <Text><Link as={GatsbyLink} to="/">Paintings</Link></Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb="4">Boring bits</Text>
            <Text><Link as={GatsbyLink} to="/">Privacy Policy</Link></Text>
            <Text><Link as={GatsbyLink} to="/">Faqs</Link></Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb="4">Subscribe to my newsletter</Text>
            <form onSubmit={onSubmit}>
              <InputGroup colorScheme="teal">
                <Input placeholder="Your e-mail" />
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