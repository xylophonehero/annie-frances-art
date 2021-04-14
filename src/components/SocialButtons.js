import React from 'react';
import { IconButton, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function SocialButtons({ facebook, instagram })
{
  const handleClick = (url) =>
  {
    window.open(url, '_blank')
  }

  return (
    <VStack
      pos="fixed"
      left="0"
      top="50%"
      transform="translateY(-50%)"
      spacing="0"
      display={["none", null, "flex"]}
    >
      <IconButton icon={<FaFacebookF />} colorScheme="facebook" rounded="none" roundedTopRight="lg" onClick={() => handleClick(facebook)} />
      <IconButton icon={<FaInstagram />} colorScheme="pink" rounded="none" roundedBottomRight="lg" onClick={() => handleClick(instagram)} />
      {/* <IconButton icon={<FaPinterestP />} colorScheme="red" rounded="none" roundedBottomRight="lg" /> */}
    </VStack>
  );
}

export default SocialButtons;