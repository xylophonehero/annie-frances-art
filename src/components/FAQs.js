import React from 'react';
import
{
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react"

import Content from './Content'

function FAQs({ faqs })
{
  return (
    <Box p="16" w="100%">
      {/* <Heading textAlign="center" mb="8">FAQs</Heading> */}
      <Accordion w="full" maxW="72em" allowToggle>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} mb="4" boxShadow="lg" borderRadius="xl" overflow="hidden">

            <AccordionButton bgColor="gray.100" _expanded={{ bgColor: "gray.300" }}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold" as="h3">{faq.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p={4}>
              <Content as="div" text={faq.answer} />
            </AccordionPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </Box>
  );
}

export default FAQs;