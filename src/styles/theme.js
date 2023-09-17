import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import fonts from './fonts'
import Button from './components/Button'

const overrides = {
  fonts,
  colors,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px'
  },
  initialColorMode: 'dark',
  components: { Button }
}

const customTheme = extendTheme(overrides)

export default customTheme
