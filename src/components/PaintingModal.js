import React, { useState } from 'react'
import
{
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Flex,
  IconButton,
  Box
} from "@chakra-ui/react"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


function PortfolioModal({ isOpen, onClose, name, index, images })
{
  const [imageIndex, setImageIndex] = useState(index)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered >
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader pr="10">{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="row" justify="center">
            <Box as={GatsbyImage} image={getImage(images[imageIndex])} alt={name} boxShadow="dark-lg" />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <HStack
            w="full"
            justifyContent="center"
          >
            <IconButton icon={<FaChevronLeft />} />
            {images.map((image, index) => (
              <Box
                key={image.id}
                cursor="pointer"
                as={GatsbyImage}
                border={index === imageIndex ? "solid 2px" : "none"}
                borderColor="gray.700"
                image={getImage(image)}
                w="50px"
                h="50px"
                alt={name}
                onClick={() => setImageIndex(index)}
              />
            ))}
            <IconButton icon={<FaChevronRight />} />
          </HStack>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PortfolioModal