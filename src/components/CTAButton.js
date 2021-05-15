import { Box, Button, Icon } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa'

function CTAButton({ text, url })
{
  return (
    <Link to={url}>
      <Button
        bgGradient="linear(to-r, teal.500, cyan.500)"
        width="fit-content"
        _hover={{
          bgGradient: "linear(to-r, teal.500, cyan.500)",
        }}
        className="cta-button"
        color="white"
      >
        <Box
          as="span"
          display="flex"
          alignItems="center"
          textTransform="none"
        >
          {text}
          <Icon
            as={FaChevronRight}
            ml="0"
            opacity="0"
            w="0"
            transition="all 0.3s ease"
            sx={{
              ".cta-button:hover &": {
                w: '1em',
                opacity: "1",
                ml: "1.5",
                transition: "all 0.3s ease"
              }
            }}
          />
        </Box>
      </Button>
    </Link>
  );
}

export default CTAButton;