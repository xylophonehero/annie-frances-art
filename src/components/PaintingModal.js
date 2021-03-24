// import React from 'react'
// import
// {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Text,
//   Box,
//   Button,
//   Flex,
//   HStack,
//   Button,
// } from "@chakra-ui/react"
// import { getImage, GatsbyImage } from 'gatsby-plugin-image'

// import Content from './Content'

// function PortfolioModal({ isOpen, onClose, title, tagline, description, mainMedia, link, pdf })
// {
//   const realLink = link ? link : pdf ? pdf.file.url : mainMedia.file.url

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size="5xl"  >
//       <ModalOverlay />
//       <ModalContent overflow="hidden">
//         <ModalHeader bgGradient="linear(to-r, teal.100, teal.300)" pr="10">{title}</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Flex
//             // columns={{ base: "1", lg: "2" }}
//             flexWrap={{ base: "wrap-reverse", lg: "nowrap" }}
//             // spacing="8"
//             p="4"
//           >
//             <GatsbyImage image={getImage(mainMedia)} />
//             <Box ml={{ base: "0", lg: "10" }} >
//               <Text as="h3" fontWeight="semibold" fontSize="xl">{tagline}</Text>
//               <Box as="hr" my="4" />
//               <Content text={description} />
//             </Box >
//           </Flex>
//         </ModalBody>
//         <ModalFooter>


//           <HStack spacing="8">
//             <Button as="a" href={realLink} target="_blank" >
//               Read More
//               </Button>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//           </HStack>

//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   )
// }

// export default PortfolioModal