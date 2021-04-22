import React from 'react';
import { IconButton, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

function SocialButtons({ facebook, instagram, pinterest })
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
      <IconButton icon={<FaInstagram />} colorScheme="pink" rounded="none" onClick={() => handleClick(instagram)} />
      <IconButton icon={<FaPinterestP />} colorScheme="red" rounded="none" roundedBottomRight="lg" onClick={() => handleClick(pinterest)} />
    </VStack>
  );
}

export default SocialButtons;