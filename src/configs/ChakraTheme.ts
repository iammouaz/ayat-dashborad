import { extendTheme } from '@chakra-ui/react'
import { labelsVariant } from './variants/labels'
import { buttonsVariants } from './variants/buttons'

const theme = extendTheme({
  fonts: {
    heading: 'Comfortaa',
    body: 'Comfortaa',
  },
  colors: {
    primary: '#3b86ff',
  },
  components: {
    Form: labelsVariant,
    Button: buttonsVariants,
  },
})

export default theme