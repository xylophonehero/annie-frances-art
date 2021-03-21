import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      100: '#b3fef8',
      500: '#03e3d1',
      600: '#02b0a2',
      700: '#027e74',
      800: '#014c46',
    }
  },
  fonts: {
    heading: "Trocchi"
  },
  components: {
    Container: {
      baseStyle: {
        maxW: { base: '100%', lg: '960px', xl: '1152px' }
      },
      sizes: {
        large: {
          maxW: { base: '100%', lg: '1152px', xl: '1344px' }
        }
      }

    }
  }
})

export default theme