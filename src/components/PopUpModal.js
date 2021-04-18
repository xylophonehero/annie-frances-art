import React, { useEffect } from 'react';
import
{
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box
} from "@chakra-ui/react"
import Cookies from 'js-cookie';
import { StaticImage } from 'gatsby-plugin-image';

function PopUpModal()
{
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() =>
  {
    if (!Cookies.get('ModalTriggered'))
    {

      setTimeout(function ()
      {
        onOpen()
        Cookies.set('ModalTriggered', 'true')
      }, 5000)
    }
  }, [onOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent bg="#f3ebe4">
        <ModalHeader>Let’s be friends!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form action="https://anniefrancesart.us1.list-manage.com/subscribe/post?u=8f6456baf626ffa8671669566&amp;id=1992aec1a5" method="post" target="_blank">
            <VStack spacing="4">
              <Text>Please subscribe and be the first to know about Annie’s new artworks, freebies, promotions and more!</Text>
              <Box w="full" pos="relative" px={[8, 16]}><StaticImage src="../images/heart-paw.jpg" alt="Heart Paw" objectFit="contain" /></Box>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type="text" name="FNAME" variant="filled" />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" name="LNAME" variant="filled" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="EMAIL" variant="filled" />
              </FormControl>
              <Button type="submit" colorScheme="green" onClick={onClose}>Submit</Button>
            </VStack>
          </form>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Text>Powered by MailChimp</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PopUpModal;