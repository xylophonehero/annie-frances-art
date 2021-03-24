import { Box, VStack, Text, Flex, Link } from '@chakra-ui/react';

import React from 'react';

function Footer()
{
  return (
    <Box w="full" p="12" bgColor="gray.200">
      <VStack>
        {/* <Stack direction={["column", "row"]} spacing={["4", "4", "12"]} mb="8">
          <Box w={["150px", null, "175px"]}>
            <StaticImage src='../../static/badge-copywriter.png' alt="copywriter" objectFit="contain" />
          </Box>
          <Box w={["150px", null, "175px"]}>
            <StaticImage src='../../static/badge-copywriter.png' alt="copywriter" objectFit="contain" />
          </Box>
          <Box w={["150px", null, "175px"]}>
            <StaticImage src='../../static/badge-copywriter.png' alt="copywriter" objectFit="contain" />
          </Box>
        </Stack> */}
        <Flex flexDir={["column", "row"]} justifyContent="space-between" maxW="720px" w="full" textAlign="center">
          <Text mb="4">Copywright © 2021 Annie Francis Art</Text>
          <Text>Website created by <Link href="https://nickworrall.co.uk" isExternal>Nick Worrall</Link></Text>
        </Flex>
      </VStack>

    </Box>
  );
}

export default Footer;