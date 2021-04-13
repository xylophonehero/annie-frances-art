import { Box, Heading, HStack, Stack, VStack, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
// import Content from '../components/Content'
import { FormatPrice } from '../utils/Format';
import StripeBuyButton from '../components/StripeBuyButton';
import { FaChevronLeft, FaChevronRight, FaFacebookF } from 'react-icons/fa';
import PaintingCard from '../components/PaintingCard';
import PaintingModal from '../components/PaintingModal';
import { AnimatePresence, motion } from 'framer-motion';


function PaintingPage({ data })
{
  const [imageIndex, setImageIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const duration = 0.3
  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        // delay: duration,
        // when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  const paintingInfo = data.contentfulPainting
  return (
    <PageLayout pageTitle={paintingInfo.name}>
      <PaintingModal {...paintingInfo} isOpen={isOpen} onClose={onClose} index={imageIndex} />
      <Stack direction={["column", null, "row"]} spacing="8">
        <VStack
          // alignItems="start"
          border="1px"
          borderColor={["white", "gray.300"]}
          p={["0", "8"]}
          w={["100%", null, "28rem", "40rem", "48rem"]}
          flexShrink="0"
          spacing="8"
        >
          <Box borderBottom="1px" borderColor="gray.300" pb="4" w="full">
            <Breadcrumb spacing="8px" separator={<Box as={FaChevronRight} color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/paintings">Paintings</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" isCurrentPage>{paintingInfo.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          {/* <Box borderTop="2px" w="full" my={4} /> */}
          <AnimatePresence
            exitBeforeEnter
          >
            <Box
              as={motion.div}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
              key={imageIndex}
              overflow="hidden"
              // w="full"
              w="fit-content"
              p={["0", "4"]}
              boxShadow="dark-lg"
              display="flex"
              onClick={onOpen}
            >
              <Box
                as={GatsbyImage}
                image={getImage(paintingInfo.images[imageIndex])}
                alt={paintingInfo.name}
              />
            </Box>
          </AnimatePresence>
          {/* <Box bgColor="red" w="full" h="200px" pos="relative" overflow="hidden">
              {paintingInfo.images.map((image, index) => (
                // <Box
                //   key={image.id}
                //   p={4}
                //   boxShadow="xl"
                //   w="full"
                //   h="full"
                //   objectFit="contain"
                //   pos="relative"
                //   overflow="hidden"
                // >
                <Box
                  key={image.id}
                  as={GatsbyImage}
                  image={getImage(image)}
                  opacity={index === imageIndex ? 1 : 0}
                  transition="opacity 500ms ease"
                  pos="absolute"
                  // w="full"
                  // h="full"
                  imgStyle={{ objectFit: "cover" }}
                  alt={paintingInfo.name} />

              ))}
            </Box> */}

          <HStack
            borderBottom="1px"
            w="full"
            borderColor="gray.300"
            pb="8"
            justifyContent="center"
          >
            <IconButton icon={<FaChevronLeft />} onClick={() => setImageIndex(mod(imageIndex - 1, paintingInfo.images.length))} />
            {paintingInfo.images.map((image, index) => (
              <Box
                key={image.id}
                cursor="pointer"
                as={GatsbyImage}
                // transition="transform 2s"
                transform={index === imageIndex ? "scale(1.2)" : "scale(1)"}
                // border={index === imageIndex ? "solid 2px" : "none"}
                // borderColor="blue.700"
                image={getImage(image)}
                w="50px"
                h="50px"
                alt={paintingInfo.name}
                onClick={() => setImageIndex(index)}
              />
            ))}
            <IconButton icon={<FaChevronRight />} onClick={() => setImageIndex(mod(imageIndex + 1, paintingInfo.images.length))} />
          </HStack>
          <HStack>
            <Text fontWeight="bold">Share:</Text>
            <IconButton icon={<FaFacebookF />} colorScheme="facebook" />
            <IconButton icon={<FaFacebookF />} colorScheme="facebook" />
            <IconButton icon={<FaFacebookF />} colorScheme="facebook" />
          </HStack>
        </VStack>
        <Box className="content" flexShrink="1">
          <Heading>{paintingInfo.name}</Heading>
          <Text fontWeight="semibold" fontSize="2xl">{FormatPrice(paintingInfo.price, 'AUD')}</Text>
          <Box>{renderRichText(paintingInfo.text)}</Box>
          <Text><Box as="span" fontWeight="bold">Size: </Box>{paintingInfo.width}x{paintingInfo.height}mm</Text>
          <Text><Box as="span" fontWeight="bold">Medium: </Box>Make field</Text>
          {/* <Content text={paintingInfo.description} /> */}
          <StripeBuyButton paintingId={paintingInfo.id} />
        </Box>
      </Stack>
      <Box my="16">
        <Heading as="h3" textAlign="left" mb="8">Related Products</Heading>
        <SimpleGrid columns={[1, 2, null, 4]} gap="8">
          {data.allContentfulPainting.nodes.map(painting => (
            <PaintingCard key={painting.id} {...painting} noBuy />
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
}

export default PaintingPage;

export const query = graphql`query SinglePaintingPage($name: String) {
  contentfulPainting(name:{eq: $name}){
    id: contentful_id
    name
    description{
      childMarkdownRemark {
        html
      }
    }
    text {
      raw
    }
    price
    width
    height
    images {
      id: contentful_id
      gatsbyImageData( placeholder: BLURRED, height: 500)
    }
  }
  allContentfulPainting(limit: 4, filter: {name: {ne: $name}}) {
    nodes{
      id: contentful_id
      name
      price
      images {
        id: contentful_id
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}`

function mod(n, m)
{
  return ((n % m) + m) % m;
}