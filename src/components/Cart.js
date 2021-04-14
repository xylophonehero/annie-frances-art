import React, { useContext } from 'react';
import
{
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  IconButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  VStack,
} from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'

import Context from '../context/cartContext'
import { FormatPrice } from '../utils/Format'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Cart(props)
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const { cartItems, changeQty, resetCart, totalPrice, checkout } = useContext(Context)



  return (
    <>
      <IconButton aria-label="cart" icon={<FaShoppingCart />} ref={btnRef} onClick={onOpen} size="lg" mx="4" colorScheme="gray" variant="ghost" />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay>
          <DrawerContent bg="gray.100">
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody>
              {cartItems.length === 0 && "There is nothing in your cart"}
              {cartItems.map(product =>
              {
                const { title: size, price } = product.printSizes[product.sizeIndex]
                return (
                  <Box key={product.id + product.sizeIndex} p="4" mb="4" boxShadow="md" bg="blue.50">
                    <Flex mb="4">
                      <Box as={GatsbyImage} image={getImage(product.images[0])} mr="4" w="100px" h="100px" alt={product.name} />
                      {/* <Box w="100px" mr={3}><Img fluid={product.image.childImageSharp.fluid} /></Box> */}
                      <Box>
                        <Heading fontSize="2xl" mb="2">{product.name}</Heading>
                        <Text><Box as="span" fontWeight="semibold">Size:</Box> {size}</Text>
                        <Text><Box as="span" fontWeight="semibold">Price:</Box> {FormatPrice(price * product.qty, "AUD")}</Text>
                      </Box>
                    </Flex>
                    {/* <label htmlFor={product.sku}>Qunatity</label> */}
                    <Flex w="full" justify="space-between">
                      <NumberInput defaultValue={product.qty} min={1} max={10} onChange={value => changeQty(product, product.sizeIndex, value)}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {/* <NumberSpinner name={product.name} initial={product.qty} handleChange={value => changeQty(product, value)} /> */}
                      {/* <input type="hidden" name={product.sku} value={product.sku} /> */}
                      <IconButton aria-label="remove" icon={<GrClose />} onClick={() => changeQty(product, product.sizeIndex, 0)} />
                    </Flex>

                  </Box>
                )
              })}
            </DrawerBody>

            <DrawerFooter>
              <VStack align="flex-end">
                <Text fontSize="xl" fontWeight="semibold">Total: {FormatPrice(totalPrice(), "AUD")}</Text>
                <HStack>
                  <Button variant="outline" mr={3} onClick={resetCart}>
                    Empty Cart
                  </Button>
                  <Button colorScheme="blue" onClick={checkout}>Proceed</Button>
                </HStack>
              </VStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Cart;