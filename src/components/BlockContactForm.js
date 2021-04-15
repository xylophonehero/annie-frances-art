import React from 'react';
import
{
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  // Select,
  Textarea,
  VStack,
} from "@chakra-ui/react"

function BlockContactForm()
{
  return (
    <Box
      as="form"
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      maxW="48rem"
      mx={[4, 8, null, "auto"]}
      mt="4"
      bg="gray.50"
      p="4"
      rounded="xl"
      action="/contact-thanks"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <VStack spacing="4" w="100%" >
        <FormControl id="name" isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input name="name" required="" placeholder="Name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input type="email" name="email" required="" placeholder="E-mail" />
        </FormControl>
        {/* <FormControl id="intrestedIn">
          <FormLabel htmlFor="intrestedIn">I am interested in</FormLabel>
          <Select name="intrestedIn" placeholder="Select one">
            <option>Copywriting</option>
            <option>Content writing</option>
            <option>Proofreading</option>
            <option>I'm not sure</option>
          </Select>
        </FormControl> */}
        <FormControl id="message" isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            name="message"
            placeholder="Message"
            required=""
            rows="5"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">Send</Button>
      </VStack>
    </Box>
  );
}

export default BlockContactForm;