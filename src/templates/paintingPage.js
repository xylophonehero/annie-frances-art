// import
// {
//   Box,
//   Button,
//   Heading,
//   HStack,
//   Stack,
//   VStack,
//   Text,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   IconButton,
//   SimpleGrid,
//   useDisclosure,
//   Select,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   FormLabel,
//   Container,
//   Link,
// } from '@chakra-ui/react';
// import { graphql, Link as GatsbyLink } from 'gatsby';
// import { getImage, GatsbyImage } from 'gatsby-plugin-image';
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
// import React, { useState, useContext } from 'react';
// // import PageLayout from '../components/PageLayout';
// // import Content from '../components/Content'
// import { FormatPrice } from '../utils/Format';
// // import StripeBuyButton from '../components/StripeBuyButton';
// import { FaChevronLeft, FaChevronRight, FaFacebookF, FaPaw, FaPinterestP, FaTwitter } from 'react-icons/fa';
// import PaintingCard from '../components/PaintingCard';
// import PaintingModal from '../components/PaintingModal';
// import { AnimatePresence, motion } from 'framer-motion';

// import Seo from '../components/SEO';

// import CartContext from '../context/cartContext'
// import { getSlug } from '../utils/GetSlug';


// function PaintingPage({ data })
// {
//   const paintingInfo = data.contentfulPainting

//   const [imageIndex, setImageIndex] = useState(0)
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const [sizeIndex, setSizeIndex] = useState(0)
//   const [quantity, setQuantity] = useState(1)

//   const { addToCart } = useContext(CartContext)

//   const duration = 0.3
//   const variants = {
//     initial: {
//       opacity: 0,
//     },
//     enter: {
//       opacity: 1,
//       transition: {
//         duration: duration,
//         // delay: duration,
//         // when: 'beforeChildren',
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: duration },
//     },
//   }
//   console.log(JSON.parse(paintingInfo.text.raw).content[0].content[0].value)

//   return (
//     <Container centerContent size="large" py={16}>
//       <Seo
//         title={`Annie Frances Art | ${paintingInfo.name}`}
//         image={paintingInfo.images[0].file.url}
//         description={JSON.parse(paintingInfo.text.raw).content[0].content[0].value}
//       />
//       <PaintingModal {...paintingInfo} isOpen={isOpen} onClose={onClose} index={imageIndex} />
//       <Stack direction={["column", null, "row"]} spacing="8">
//         <VStack
//           // alignItems="start"
//           border="1px"
//           borderColor={["white", "gray.300"]}
//           p={["0", "8"]}
//           w={["100%", null, "28rem", "40rem", "48rem"]}
//           flexShrink="0"
//           spacing="8"
//         >
//           <Box borderBottom="1px" borderColor="gray.300" pb="4" w="full">
//             <Breadcrumb spacing="8px" separator={<Box as={FaChevronRight} color="gray.500" />}>
//               <BreadcrumbItem>
//                 <BreadcrumbLink as={GatsbyLink} to="/">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbItem>
//                 <BreadcrumbLink as={GatsbyLink} to="/paintings">Paintings</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="#" isCurrentPage>{paintingInfo.name}</BreadcrumbLink>
//               </BreadcrumbItem>
//             </Breadcrumb>
//           </Box>
//           {/* <Box borderTop="2px" w="full" my={4} /> */}
//           <AnimatePresence
//             exitBeforeEnter
//           >
//             <Box
//               as={motion.div}
//               variants={variants}
//               initial="initial"
//               animate="enter"
//               exit="exit"
//               key={imageIndex}
//               overflow="hidden"
//               // w="full"
//               w="fit-content"
//               p={["0", "4"]}
//               boxShadow="dark-lg"
//               display="flex"
//               onClick={onOpen}
//             >
//               <Box
//                 as={GatsbyImage}
//                 image={getImage(paintingInfo.images[imageIndex])}
//                 alt={paintingInfo.name}
//               />
//             </Box>
//           </AnimatePresence>
//           <HStack
//             borderBottom="1px"
//             w="full"
//             borderColor="gray.300"
//             pb="8"
//             justifyContent="center"
//           >
//             <IconButton icon={<FaChevronLeft />} onClick={() => setImageIndex(mod(imageIndex - 1, paintingInfo.images.length))} />
//             {paintingInfo.images.map((image, index) => (
//               <Box
//                 key={image.id}
//                 cursor="pointer"
//                 as={GatsbyImage}
//                 // transition="transform 2s"
//                 transform={index === imageIndex ? "scale(1.2)" : "scale(1)"}
//                 // border={index === imageIndex ? "solid 2px" : "none"}
//                 // borderColor="blue.700"
//                 image={getImage(image)}
//                 w="50px"
//                 h="50px"
//                 alt={paintingInfo.name}
//                 onClick={() => setImageIndex(index)}
//               />
//             ))}
//             <IconButton icon={<FaChevronRight />} onClick={() => setImageIndex(mod(imageIndex + 1, paintingInfo.images.length))} />
//           </HStack>
//           <HStack>
//             <Text fontWeight="bold">Share:</Text>
//             <Link isExternal href={`https://www.facebook.com/sharer/sharer.php?u=https://anniefrancesart.com/paintings/${getSlug(paintingInfo.name)}`}>
//               <IconButton icon={<FaFacebookF />} colorScheme="facebook" />
//             </Link>
//             <Link isExternal href={`https://twitter.com/intent/tweet?url=https://anniefrancesart.com/paintings/${getSlug(paintingInfo.name)}&text=/`}>
//               <IconButton icon={<FaTwitter />} colorScheme="twitter" />
//             </Link>
//             <Link isExternal href={`https://pinterest.com/pin/create/button/?url=https://anniefrancesart.com/paintings/${getSlug(paintingInfo.name)}&media=&description=`}>
//               <IconButton icon={<FaPinterestP />} colorScheme="red" />
//             </Link>
//           </HStack>
//         </VStack>
//         <Box className="content" flexShrink="1">
//           <Heading>{paintingInfo.name}</Heading>
//           <Box>{renderRichText(paintingInfo.text)}</Box>
//           <Text fontWeight="semibold" color="blue.700">All of Annie's current works are on sale at Something For Jess Cafe, Chippendale Sydney. But you can still buy prints online.</Text>
//           <FormLabel htmlFor="size">Size:</FormLabel>
//           <Select name="size" onChange={(e) => setSizeIndex(e.target.value)} mb="2">
//             {paintingInfo.printSizes.map((size, index) => (
//               <option key={size.id} value={index}>{size.title} ({FormatPrice(size.price, 'AUD')})</option>
//             ))}
//           </Select>
//           <FormLabel htmlFor="quantity">Quantity:</FormLabel>
//           <NumberInput name="quantity" defaultValue={1} min={1} max={10} onChange={value => setQuantity(value)} mb="2">
//             <NumberInputField />
//             <NumberInputStepper>
//               <NumberIncrementStepper />
//               <NumberDecrementStepper />
//             </NumberInputStepper>
//           </NumberInput>
//           <Text fontWeight="semibold" fontSize="2xl">{FormatPrice(paintingInfo.printSizes[sizeIndex].price * quantity, 'AUD')}</Text>
//           <Button onClick={() => addToCart(paintingInfo, sizeIndex, quantity)} rightIcon={<FaPaw />}>Add to cart</Button>
//           {/* <Text><Box as="span" fontWeight="bold">Size: </Box>{paintingInfo.width}x{paintingInfo.height}mm</Text>
//           <Text><Box as="span" fontWeight="bold">Medium: </Box>Make field</Text> */}

//           {/* <StripeBuyButton paintingId={paintingInfo.id} /> */}
//           <Box my="8">{renderRichText(data.contentfulSiteConfig.paintingDescription)}</Box>
//           <Link as={GatsbyLink} to="/shipping-and-returns">Shipping and return info</Link>
//         </Box>
//       </Stack>
//       <Box my="16">
//         <Heading as="h3" textAlign="left" mb="8">Related Products</Heading>
//         <SimpleGrid columns={[1, 2, 3, 4]} gap="8">
//           {data.allContentfulPainting.nodes.map(painting => (
//             <PaintingCard key={painting.id} {...painting} noBuy />
//           ))}
//         </SimpleGrid>
//       </Box>
//     </Container>
//   );
// }

// export default PaintingPage;

// export const query = graphql`query SinglePaintingPage($name: String) {
//   contentfulPainting(name:{eq: $name}){
//     id: contentful_id
//     name
//     text {
//       raw
//     }
//     price
//     width
//     height
//     printSizes {
//       id: contentful_id
//       title
//       short
//       long
//       price
//     }
//     images {
//       id: contentful_id
//       gatsbyImageData( placeholder: BLURRED, height: 500)
//       file {
//         url
//       }
//     }
//   }
//   allContentfulPainting(limit: 8, filter: {name: {ne: $name}, commission: {ne: true}}) {
//     nodes{
//       id: contentful_id
//       name
//       printSizes {
//         title
//         price
//       }
//       images {
//         id: contentful_id
//         gatsbyImageData(placeholder: BLURRED)
//       }
//     }
//   }
//   contentfulSiteConfig {
//     paintingDescription {
//       raw
//     }
//   }
// }`

// function mod(n, m)
// {
//   return ((n % m) + m) % m;
// }