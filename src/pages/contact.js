import React from 'react';
import
{
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import PageLayout from '../components/PageLayout';

function Contact(props)
{
  return (
    <PageLayout pageTitle="Contact">
      <form action="https://submit-form.com/ThNpTWwV" style={{ width: "100%", marginTop: "16px" }}>
        <VStack spacing="4" w="100%" >
          <FormControl id="name" isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input name="name" required="" placeholder="Name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input type="email" name="email" required="" placeholder="E-mail" />
          </FormControl>
          <FormControl id="intrestedIn">
            <FormLabel htmlFor="intrestedIn">I am interested in</FormLabel>
            <Select name="intrestedIn" placeholder="Select one">
              <option>Copywriting</option>
              <option>Content writing</option>
              <option>Proofreading</option>
              <option>I'm not sure</option>
            </Select>
          </FormControl>
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
      </form>
    </PageLayout>
  );
}

export default Contact;